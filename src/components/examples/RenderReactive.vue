<script setup lang="ts">
import RenderMarkdown from '@/components/RenderMarkdown.vue';

defineProps<{
  markdown: string;
}>();
</script>

<template>
  <RenderMarkdown
    class="md"
    title="Markdown - reactive"
    :markdown="markdown"
    :options="{ linkify: true, breaks: true }"
    reactive
  />
</template>
