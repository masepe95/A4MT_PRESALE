<template>
    <div class="page-container">
        <AppSearchTerm :initialPrompt="initialPrompt" @prompt-id-change="onPromptIdChange" @form-submit="onFormSubmit"
            class="" />
        <SectionsSearchToolsAdvancedSearch :promptId="searchPromptId" :promptDescription="initialPrompt" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AppSearchTerm from '~/components/sections/SearchTools/AppSearchTerm.vue';
import SectionsSearchToolsAdvancedSearch from '~/components/sections/SearchTools/AdvancedSearch.vue';

const searchPromptId = ref(null);
const initialPrompt = ref('');

const onPromptIdChange = (id) => {
    searchPromptId.value = id;
};

const onFormSubmit = (description) => {
    initialPrompt.value = description;
};

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
    /* Adjust this value based on the height of your header */
}
</style>