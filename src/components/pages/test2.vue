<template>
    <h1>test2</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'test2',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
})
</script>