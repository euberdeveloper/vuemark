import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import RenderMarkdown from '@/components/RenderMarkdown.vue';

describe('RenderMarkdown', () => {
    it('It should render a bold text', () => {
      const wrapper = mount(RenderMarkdown, {
        propsData: {
          title: 'boh',
          markdown: '**pippo**',
        },
      });
      const spanElement = wrapper.find('.render-markdown > span');
      const tag = spanElement.find('strong');
      expect(tag.text()).toContain('pippo');
    });

    it('It should render an italic text', () => {
      const wrapper = mount(RenderMarkdown, {
        propsData: {
          title: 'boh',
          markdown: '*pluto*',
        },
      });
      const spanElement = wrapper.find('.render-markdown > span');
      const tag = spanElement.find('em');
      expect(tag.text()).toContain('pluto');
    });

    it('It should render a link', () => {
      const wrapper = mount(RenderMarkdown, {
        propsData: {
          title: 'boh',
          markdown: '[paperino](https://euber.dev)',
        },
      });
      const spanElement = wrapper.find('.render-markdown > span');
      const tag = spanElement.find('a');
      expect(tag.text()).toContain('paperino');
      expect(tag.attributes('href')).toBe('https://euber.dev');
    });

    it('It should be reactive', async () => {
      const wrapper = mount(RenderMarkdown, {
        propsData: {
          title: 'boh',
          markdown: '# Capitolo',
          reactive: true
        },
      });
      const initialSpanElement = wrapper.find('.render-markdown > span');
      const h1Tag = initialSpanElement.find('h1');
      expect(h1Tag.text()).toContain('Capitolo');

      const textarea = wrapper.find('.render-markdown > textarea');
      textarea.setValue('## Sottocapitolo');

      await wrapper.vm.$nextTick();

      const finalSpanElement = wrapper.find('.render-markdown > span');
      const h2Tag = finalSpanElement.find('h2');
      expect(h2Tag.text()).toContain('Sottocapitolo');
    });
});
