<template>
    <div id="advanced-search">

        <div class="container">
            <div class="filter-section">
                <select v-model="form.selectedCategory" class="form-select" @change="filteredTools">
                    <option value="">Filter Categories</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{
                        category.description }}</option>
                </select>
                <select v-model="form.selectedLevel" class="form-select" @change="filteredTools">
                    <option value="">Filter Levels</option>
                    <option v-for="level in levels" :key="level.id" :value="level.id">{{ level.description }}
                    </option>
                </select>
                <select v-model="form.selectedProgram" class="form-select" @change="filteredTools">
                    <option value="">Filter Programs</option>
                    <option v-for="program in programs" :key="program.id" :value="program.id">{{ program.description
                        }}</option>
                </select>
            </div>
            <div class="results-count">
                We have found {{ tools.length }} tools.
            </div>
            <div class="results-container">
                <ToolList v-if="!isLoading" :tools="tools" @tool-click="openModal" />
            </div>
        </div>
    </div>
    <ToolDetail :tool="selectedTool" :show="showModal" @close="closeModal" />
</template>

<script>
import axios from 'axios';
import ToolList from '~/components/sections/SearchTools/ToolList.vue';
import ToolDetail from '~/components/sections/SearchTools/ToolDetail.vue';

const toolsEndpoint = "https://antiquewhite-squid-521659.hostingersite.com/api/tools";
const categoriesEndpoint = "https://antiquewhite-squid-521659.hostingersite.com/api/categories";
const levelsEndpoint = "https://antiquewhite-squid-521659.hostingersite.com/api/levels";
const programsEndpoint = "https://antiquewhite-squid-521659.hostingersite.com/api/programs";

export default {
    name: "AdvancedSearch",
    components: { ToolList, ToolDetail },
    props: {
        promptId: {
            type: [String, Number],
            required: false,
            default: null
        },
        promptDescription: {
            type: String,
            required: false,
            default: ''
        }
    },
    data() {
        return {
            endpoint: toolsEndpoint,
            form: {
                selectedCategory: "",
                selectedLevel: "",
                selectedProgram: ""
            },
            tools: [],
            categories: [],
            levels: [],
            programs: [],
            errors: [],
            isLoading: false,
            selectedTool: null,
            showModal: false,
        };
    },
    watch: {
        promptId: 'filteredTools',
        'form.selectedCategory': 'filteredTools',
        'form.selectedLevel': 'filteredTools',
        'form.selectedProgram': 'filteredTools',
    },
    methods: {
        filteredTools() {
            this.tools = [];
            const params = {
                category: this.form.selectedCategory,
                level: this.form.selectedLevel,
                program: this.form.selectedProgram,
                prompt_id: this.promptId,
            };
            this.isLoading = true;
            axios.get(toolsEndpoint, { params })
                .then((res) => {
                    this.tools = res.data;
                })
                .catch((err) => { console.error(err) })
                .then(() => {
                    this.isLoading = false;
                });
        },

        fetchOptions() {
            axios.get(categoriesEndpoint)
                .then((res) => {
                    this.categories = res.data;
                })
                .catch((err) => { console.error(err) });

            axios.get(levelsEndpoint)
                .then((res) => {
                    this.levels = res.data;
                })
                .catch((err) => { console.error(err) });

            axios.get(programsEndpoint)
                .then((res) => {
                    this.programs = res.data;
                })
                .catch((err) => { console.error(err) });
        },

        openModal(tool) {
            this.selectedTool = tool;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    },
    created() {
        this.fetchOptions();
        this.filteredTools();
    },
};
</script>

<style scoped>
#advanced-search {
    min-height: 100vh;
    background-color: #fff;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container {
    padding: 20px;
}

.filter-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.results-count {
    text-align: center;
    color: rgb(0, 0, 0);
    font-weight: bold;
    margin-bottom: 20px;
}

.results-container {
    max-width: 1200px;
    width: 100%;
    overflow-y: auto;
    padding-bottom: 20px;
}

.results-container::-webkit-scrollbar {
    width: 10px;
}

.results-container::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

.results-container::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}

.results-container::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.7);
}

@media (max-width: 768px) {
    .filter-section {
        flex-direction: column;
        align-items: center;
    }

    .results-count {
        font-size: 1rem;
    }

    .results-container {
        height: calc(100vh - 250px);
    }
}
</style>