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
        class: "navbar-dark navbar-dark-2 scheme-blue"
    },
});
</script>

<style scoped>
.page-container {
    padding-top: 100px;
    background: url(../../assets/images/main_background.jpeg) no-repeat center center fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    overflow-y: auto;
}
</style>
