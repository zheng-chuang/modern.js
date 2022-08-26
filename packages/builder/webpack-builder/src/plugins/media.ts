import { join } from 'path';
import {
  getDistPath,
  getFilename,
  MEDIA_EXTENSIONS,
  getRegExpForExts,
  getDataUrlCondition,
} from '../shared';
import type { BuilderPlugin } from '../types';

export const PluginMedia = (): BuilderPlugin => ({
  name: 'webpack-builder-plugin-media',

  setup(api) {
    api.modifyWebpackChain((chain, { isProd, CHAIN_ID }) => {
      const config = api.getBuilderConfig();
      const regExp = getRegExpForExts(MEDIA_EXTENSIONS);

      const distDir = getDistPath(config, 'media');
      const filename = getFilename(config, 'media', isProd);

      chain.module
        .rule(CHAIN_ID.RULE.MEDIA)
        .test(regExp)
        // @ts-expect-error webpack-chain has incorrect type for `rule.type`
        .type('asset')
        .parser({
          dataUrlCondition: getDataUrlCondition(config.output?.dataUriLimit),
        })
        .set('generator', {
          filename: join(distDir, filename),
        });
    });
  },
});