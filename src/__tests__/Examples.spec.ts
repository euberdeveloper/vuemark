import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';

import RenderSimple from '@/components/examples/RenderSimple.vue';
import RenderWithOptions from '@/components/examples/RenderWithOptions.vue';
import RenderWithEmojiPlugin from '@/components/examples/RenderWithEmojiPlugin.vue';
import RenderWithSubSubPlugins from '@/components/examples/RenderWithSubSubPlugins.vue';
import RenderWithContainerPlugin from '@/components/examples/RenderWithContainerPlugin.vue';

describe('Examples', () => {
    it('It should render a markdown without any options', () => {
      const wrapper = mount(RenderSimple, {
        propsData: {
          title: 'Simple',
          markdown: '**pippo**',
        },
      });
      const spanElement = wrapper.find('.render-markdown > span');
      const tag = spanElement.find('strong');
      expect(tag.text()).toContain('pippo');
    });

    it('It should render a markdown with options', () => {
      const wrapper = mount(RenderWithOptions, {
        propsData: {
          title: 'With options',
          markdown: '\npippo\n https://euber.dev\n',
        },
      });
      const spanElement = wrapper.find('.render-markdown > span');

      const brTag = spanElement.find('br');
      expect(brTag.exists()).toBeTruthy();

      const aTag = spanElement.find('a');
      expect(aTag.exists()).toBeTruthy();
    });

    it('It should render a markdown with emojis plugin', () => {
      const wrapper = mount(RenderWithEmojiPlugin, {
        propsData: {
          title: 'Emojis',
          markdown: '///',
        },
      });
      const spanElement = wrapper.find('.render-markdown > span');
      expect(spanElement.text()).toContain('😢');
    });

    it('It should render a markdown with sub and sup plugin', () => {
      const wrapper = mount(RenderWithSubSubPlugins, {
        propsData: {
          title: 'SubSup',
          markdown: '~sub~ ^sup^',
        },
      });
      const spanElement = wrapper.find('.render-markdown > span');

      const subTag = spanElement.find('sub');
      expect(subTag.exists()).toBeTruthy();

      const supTag = spanElement.find('sup');
      expect(supTag.exists()).toBeTruthy();
    });

    it('It should render a markdown with container plugin', () => {
      const wrapper = mount(RenderWithContainerPlugin, {
        propsData: {
          title: 'Container',
          markdown: '::: spoiler click me\n*content*\n:::',
        },
      });
      const spanElement = wrapper.find('.render-markdown > span');
      const detailsTag = spanElement.find('details');
      expect(detailsTag.exists()).toBeTruthy();
    });
});
