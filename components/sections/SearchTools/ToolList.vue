<template>
    <div class="tool-list">
        <div v-if="tools.length === 0" class="alert alert-warning" role="alert">
            Nessun tool trovato.
        </div>
        <div v-else class="row" style="margin-right: 0;">
            <ToolCard v-for="tool in tools" :key="tool.id" :tool="tool" @click.native="handleToolClick(tool)"
                class="col-12 mb-4" />
        </div>
    </div>
</template>

<script>
import ToolCard from '~/components/sections/SearchTools/ToolCard.vue';

export default {
    name: "ToolList",
    props: {
        tools: {
            type: Array,
            required: true,
        },
    },
    components: {
        ToolCard,
    },
    methods: {
        handleToolClick(tool) {
            this.$emit('tool-click', tool);
        }
    }
};
</script>

<style scoped>
.tool-list {
    width: 100%;
}
</style>