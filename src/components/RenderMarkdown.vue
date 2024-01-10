<script setup lang="ts">
import { vMark } from '@/directives/VMark';
</script>

<template>
  <span v-mark="'# pippo \n\n **ciao** come *va*'"></span>
</template>
