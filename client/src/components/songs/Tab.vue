<template>
  <panel title="Tabs">
        <textarea
          readonly
          label="Tab"
          v-model="tab"
          multi-line
        ></textarea>
  </panel>
</template>

<script>

import Panel from '@/components/Panel'
export default {
  props: [
    'tab'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
  textarea {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    overflow: auto;
    padding: 10px;
    font-size: 12px;
  }
</style>
