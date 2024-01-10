<script setup lang="ts">
import { ref } from 'vue';
import { getVMark } from '@/directives/VMark';
import type { VueMarkOptions, VueMarkPluginItem } from '@/types';

const { options, plugins, markdown } = defineProps<{
  title: string;
  markdown: string;
  options?: VueMarkOptions;
  plugins?: VueMarkPluginItem[];
  reactive?: boolean;
}>();

const reactiveMarkdown = ref(markdown);

const vMark = getVMark(options, plugins);
</script>

<template>
  <div class="render-markdown">
    <h1>{{ title }}</h1>
    <span v-mark="reactiveMarkdown"></span>
    <textarea
      type="text"
      label="Markdown"
      placeholder="Markdown"
      v-model="reactiveMarkdown"
      v-if="reactive"
    />
  </div>
</template>

<style scoped>
.render-markdown {
  width: 400px;
  padding: 0 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.render-markdown > h1 {
  margin-bottom: 1rem;
  white-space: nowrap;
}

.render-markdown > span {
  width: 100%;
  height: 100%;

  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 15px;
}

.render-markdown > textarea {
  width: 100%;
  margin-top: 10px;

  padding: 4px 6px;
  border: 1px solid #ccc;
  border-radius: 10px;

  background: #6896d0;
  color: #181212;
}
</style>
