import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import RenderMarkdown from '@/components/RenderMarkdown.vue';

describe('RenderMarkdown', () => {
  it('renders properly', () => {
    const wrapper = mount(RenderMarkdown);
    expect(wrapper.text()).toContain('pippo');
  });
});
