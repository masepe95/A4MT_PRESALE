<template>
    <div class="page-container">
        <SectionsSearchToolsAdvancedSearch :promptId="searchPromptId" :promptDescription="initialPrompt" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SectionsSearchToolsAdvancedSearch from '~/components/sections/SearchTools/AdvancedSearch.vue';

const searchPromptId = ref(null);
const initialPrompt = ref('');

definePageMeta({
    layout: 'no-footer'
});
useHead({
    bodyAttrs: {
        class: "navbar-light navbar-dark-2 scheme-blue"
    },
});
</script>

<style scoped>
.page-container {
    padding-top: 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    overflow-y: auto;
}

.page-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../../assets/images/main_background.jpeg) no-repeat center center fixed;
    background-size: cover;
    filter: blur(5px);
    /* Applica l'effetto blur al background */
    z-index: -1;
}
</style>
