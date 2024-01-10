<script setup lang="ts">
import * as emoji from 'markdown-it-emoji';
import type { Options as EmojiOptions } from 'markdown-it-emoji';

import type { VueMarkPluginWithOptionsItem } from '@/types';

import RenderMarkdown from '@/components/RenderMarkdown.vue';

defineProps<{
  markdown: string;
}>();

const emojiPlugin: VueMarkPluginWithOptionsItem<EmojiOptions> = {
  type: 'with-options',
  plugin: (emoji as any).full,
  options: {
    shortcuts: {
      cry: '///'
    }
  }
};
</script>

<template>
  <RenderMarkdown
    class="md"
    title="Markdown -emoji"
    :markdown="markdown"
    :options="{ linkify: true, breaks: true }"
    :plugins="[emojiPlugin]"
  />
</template>
