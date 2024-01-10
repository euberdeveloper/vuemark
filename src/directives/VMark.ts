import type { Directive } from 'vue';
import markdownit from 'markdown-it';

import type { VueMarkOptions, VueMarkPluginItem } from '@/types';

/** A factory function generating v-mark directives. The options and the plugins for markdown-it can be passed.
 * @param options The options to pass to markdown-it.
 * @param plugins The plugins to add to markdown-it.
 * @returns A v-mark directive.
 */
function getVMark(options: VueMarkOptions = {}, plugins: VueMarkPluginItem[] = []): Directive {
  const md = markdownit(options);

  for (const plugin of plugins) {
    switch (plugin.type) {
      case 'simple':
        md.use(plugin.plugin);
        break;
      case 'with-options':
        md.use(plugin.plugin, plugin.options);
        break;
      case 'with-params':
        md.use(plugin.plugin, ...plugin.params);
        break;
    }
  }

  function render(value: string) {
    return md.render(value);
  }

  return {
    beforeMount(el, binding) {
      el.innerHTML = render(binding.value);
    },
    beforeUpdate(el, binding) {
      el.innerHTML = render(binding.value);
    }
  };
}

/**
 * A default vMark directive, without any plugin or custom option specified.
 */
export const vMark = getVMark();

export default getVMark;
