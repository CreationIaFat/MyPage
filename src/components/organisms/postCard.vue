<template>
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">{{ summary }}</strong>
        <h3 class="mb-0">{{ title }}</h3>
        <div class="mb-1 text-muted">11/12</div>
        <p class="card-text mb-auto">これは写真の解説文付きのカードです。自然に説明を加えることができます。</p>
        <a href="#" class="stretched-link">続きを読む</a>
    </div>
    <div class="col-auto d-none d-lg-block" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'postCard',
    props: {
        title: {
            type: String,
            default: '',
            required: true,
        },
        summary: {
            type: String,
            default: '',
            required: true,
        },
    },
})
</script>