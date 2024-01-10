<script setup lang="ts">
import sup from 'markdown-it-sup';
import sub from 'markdown-it-sub';

import type { VueMarkPluginSimpleItem } from '@/types';

import RenderMarkdown from '@/components/RenderMarkdown.vue';

defineProps<{
  markdown: string;
}>();

const supPlugin: VueMarkPluginSimpleItem = {
  type: 'simple',
  plugin: sup as any
};
const subPlugin: VueMarkPluginSimpleItem = {
  type: 'simple',
  plugin: sub as any
};
</script>

<template>
  <RenderMarkdown
    class="md"
    title="Markdown - sub/sup"
    :markdown="markdown"
    :options="{ linkify: true, breaks: true }"
    :plugins="[supPlugin, subPlugin]"
  />
</template>
