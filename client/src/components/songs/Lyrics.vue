<template>
  <panel title="Lyrics">
        <textarea
          readonly
          label="Tab"
          v-model="lyrics"
          multi-line
        ></textarea>
  </panel>
</template>

<script>

export default {
  props: [
    'lyrics'
  ]
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
