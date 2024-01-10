import type { App, Plugin } from 'vue';
import type { VueMarkOptions, VueMarkPluginItem } from '@/types';

import vMark, { getVMark } from '@/directives/VMark';

export type {
  VueMarkOptions,
  VueMarkPluginItem,
  VueMarkPluginSimpleItem,
  VueMarkPluginWithOptionsItem,
  VueMarkPluginWithParamsItem
} from '@/types';

/** The options to pass to the VueMark plugin */
export type VueMarkPluginOptions = {
  /** A string containing the directive's name that will be installed. The default value is 'v-mark'. */
  directiveName?: string;
  /** The optional markdown-it options that will be passed as they are. */
  markdownItOptions?: VueMarkOptions;
  /** The optional markdown-it plugins that can be manually installed and added here. */
  plugins?: VueMarkPluginItem[];
};

const defaultOptions: Required<VueMarkPluginOptions> = {
  directiveName: 'v-mark',
  markdownItOptions: {},
  plugins: []
};

function mergeOptions(options: VueMarkPluginOptions): Required<VueMarkPluginOptions> {
  return Object.assign({}, defaultOptions, options);
}

const VueMark = {
  install(Vue: App, options: VueMarkPluginOptions = {}): void {
    const opts = mergeOptions(options);
    Vue.directive(opts.directiveName, getVMark(opts.markdownItOptions, opts.plugins));
  }
} as Plugin;

export { getVMark, vMark, VueMark };

