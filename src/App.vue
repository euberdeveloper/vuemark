<script setup lang="ts">
import RenderSimple from '@/components/examples/RenderSimple.vue';
import RenderWithOptions from '@/components/examples/RenderWithOptions.vue';
import RenderWithEmojiPlugin from '@/components/examples/RenderWithEmojiPlugin.vue';
import RenderWithSubSubPlugins from '@/components/examples/RenderWithSubSubPlugins.vue';
import RenderWithContainerPlugin from '@/components/examples/RenderWithContainerPlugin.vue';
import RenderReactive from '@/components/examples/RenderReactive.vue';

const chapterMarkdown = `# Capitolo 1

## Inizio

Tutto inizio da **Dio** che creò il ^cielo^ e la ~terra~.

## Intermezzo

### Preistoria

**Dio** creò l'_uomo_ a sua *immagine*.

### Storia

Gli 
uomini inventarono la scrittura :).

### Storia moderna

Gli uomini inventarono https://it.wikipedia.org

## Fine

::: spoiler click me
*content*
:::

Ci fu l'apocalisse ///
`;
</script>

<template>
  <div class="examples-container">
    <RenderSimple :markdown="chapterMarkdown" />
    <RenderWithOptions :markdown="chapterMarkdown" />
    <RenderWithEmojiPlugin :markdown="chapterMarkdown" />
    <RenderWithSubSubPlugins :markdown="chapterMarkdown" />
    <RenderWithContainerPlugin :markdown="chapterMarkdown" />
    <RenderReactive markdown="# La tua storia" />
  </div>
</template>

<style scoped>
.examples-container {
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;

  padding: 24px 0;
}

.md {
  margin: 5px 1px;
}
</style>

<style>
strong {
  font-weight: bold;
}
</style>
