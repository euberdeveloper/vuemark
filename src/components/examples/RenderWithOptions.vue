<script setup lang="ts">
import RenderMarkdown from '@/components/RenderMarkdown.vue';

defineProps<{
  markdown: string;
}>();
</script>

<template>
  <RenderMarkdown
    class="md"
    title="Markdown -options"
    :markdown="markdown"
    :options="{ linkify: true, breaks: true }"
  />
</template>
