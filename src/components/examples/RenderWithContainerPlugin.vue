<script setup lang="ts">
import container, { type ContainerOpts } from 'markdown-it-container';

import type { VueMarkPluginWithParamsItem } from '@/types';

import RenderMarkdown from '@/components/RenderMarkdown.vue';

defineProps<{
  markdown: string;
}>();

const containerPlugin: VueMarkPluginWithParamsItem = {
  type: 'with-params',
  plugin: container,
  params: [
    'group',
    {
      validate: (params) => !!params.trim().match(/^spoiler\s+(.*)$/),
      render: (tokens, idx) => {
        const m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);

        if (tokens[idx].nesting === 1) {
          return '<details><summary>' + m![1] + '</summary>\n';
        } else {
          return '</details>\n';
        }
      }
    } as ContainerOpts
  ]
};
</script>

<template>
  <RenderMarkdown
    class="md"
    title="Markdown -container"
    :markdown="markdown"
    :options="{ linkify: true, breaks: true }"
    :plugins="[containerPlugin]"
  />
</template>
