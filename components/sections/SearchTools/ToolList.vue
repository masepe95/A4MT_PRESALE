<template>
    <div class="tool-list container">
        <div v-if="tools.length === 0" class="alert alert-warning" role="alert">
            Nessun tool trovato.
        </div>
        <div v-else>
            <div class="tool-count-message">
                We have found {{ toolsCount }} tools.
            </div>
            <div class="tool-row">
                <ToolCard v-for="tool in tools" :key="tool.id" :tool="tool" @click.native="handleToolClick(tool)"
                    class="col-12 tool-card" />
            </div>
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
    computed: {
        toolsCount() {
            return this.tools.length;
        }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
}

.tool-row {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
}

.tool-count-message {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
}

.tool-card {
    margin-bottom: 0px;
}
</style>
