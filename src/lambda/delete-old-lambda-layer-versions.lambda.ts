import { LambdaClient, ListLayersCommand, ListLayerVersionsCommand, DeleteLayerVersionCommand } from '@aws-sdk/client-lambda';
import { Handler, Context } from 'aws-lambda';

const client = new LambdaClient({});

export const handler: Handler = async (_event: any, _context: Context) => {
  // Validate RETAIN_VERSIONS environment variable
  const retainVersionStr = process.env.RETAIN_VERSIONS;
  if (retainVersionStr === undefined || !/^(0|[1-9]\d*)$/.test(retainVersionStr)) {
    throw new Error('Invalid RETAIN_VERSIONS environment variable value. It should be a string containing a positive integer.');
  }

  const retainVersions = parseInt(retainVersionStr, 10);

  try {
    // List all Lambda layers
    const listAllLayersCmd = new ListLayersCommand({});
    const layers = await client.send(listAllLayersCmd);
    if (layers.Layers === undefined) {
      console.log('No layers found.');
      return;
    }

    // Iterate over each layer
    layers.Layers.forEach(async (layer) => {
      if (layer.LayerName === undefined) {
        console.log('Layer name is undefined.');
        return;
      }

      // List versions for the current layer
      const listLayerVersionsCmd = new ListLayerVersionsCommand({ LayerName: layer.LayerName });
      const layerVersions = await client.send(listLayerVersionsCmd);
      if (layerVersions.LayerVersions === undefined || layerVersions.LayerVersions.length <= retainVersions) {
        console.log(`Layer: ${layer.LayerName} - Keeping all versions. No action needed.`);
        return;
      }

      // Sort layer versions in ascending order
      const sortedVersions = layerVersions.LayerVersions.sort((a, b) => {
        const aVersion = a.Version ?? 0;
        const bVersion = b.Version ?? 0;
        return aVersion - bVersion;
      });

      // Identify versions to delete and delete them
      const versionsToDelete = sortedVersions.slice(0, sortedVersions.length - retainVersions);
      versionsToDelete.forEach(async (version) => {
        if (version.Version === undefined) {
          console.log('Version number is undefined.');
          return;
        }

        const deleteLayerVersionCmd = new DeleteLayerVersionCommand({ LayerName: layer.LayerName, VersionNumber: version.Version });
        await client.send(deleteLayerVersionCmd);
        console.log(`Deleted version ${version.Version} of layer ${layer.LayerName}.`);
      });
    });
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  }
};