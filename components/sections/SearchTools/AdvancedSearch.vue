<template>
    <div id="advanced-search">
        <div class="container">
            <div class="filter-section">
                <div class="filter-group" v-click-outside="() => closeDropdown('categories')">
                    <button class="dropbtn" @click="toggleDropdown('categories')">Select Categories</button>
                    <div class="dropdown-content" :class="{ show: dropdowns.categories }">
                        <div v-for="category in categories" :key="category.id" class="dropdown-item">
                            <input type="checkbox" :id="'category-' + category.id" :value="category.id"
                                v-model="form.selectedCategories" @change="filteredTools">
                            <label :for="'category-' + category.id">{{ category.description }}</label>
                        </div>
                    </div>
                </div>
                <div class="filter-group" v-click-outside="() => closeDropdown('levels')">
                    <button class="dropbtn" @click="toggleDropdown('levels')">Select Levels</button>
                    <div class="dropdown-content" :class="{ show: dropdowns.levels }">
                        <div v-for="level in levels" :key="level.id" class="dropdown-item">
                            <input type="checkbox" :id="'level-' + level.id" :value="level.id"
                                v-model="form.selectedLevels" @change="filteredTools">
                            <label :for="'level-' + level.id">{{ level.description }}</label>
                        </div>
                    </div>
                </div>
                <div class="filter-group" v-click-outside="() => closeDropdown('programs')">
                    <button class="dropbtn" @click="toggleDropdown('programs')">Select Programs</button>
                    <div class="dropdown-content" :class="{ show: dropdowns.programs }">
                        <div v-for="program in programs" :key="program.id" class="dropdown-item">
                            <input type="checkbox" :id="'program-' + program.id" :value="program.id"
                                v-model="form.selectedPrograms" @change="filteredTools">
                            <label :for="'program-' + program.id">{{ program.description }}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="results-count">
                We have found {{ tools.length }} tools.
            </div>
            <div class="results-container">
                <ToolList v-if="!isLoading" :tools="tools" @tool-click="openModal" />
            </div>
        </div>
        <ToolDetail :tool="selectedTool" :show="showModal" @close="closeModal" />
    </div>
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
                selectedCategories: [],
                selectedLevels: [],
                selectedPrograms: []
            },
            tools: [],
            categories: [],
            levels: [],
            programs: [],
            errors: [],
            isLoading: false,
            selectedTool: null,
            showModal: false,
            dropdowns: {
                categories: false,
                levels: false,
                programs: false
            }
        };
    },
    watch: {
        promptId() {
            this.filteredTools();
        }
    },
    methods: {
        toggleDropdown(dropdown) {
            this.dropdowns[dropdown] = !this.dropdowns[dropdown];
        },
        closeDropdown(dropdown) {
            this.dropdowns[dropdown] = false;
        },
        async filteredTools() {
            this.tools = [];
            const params = {
                categories: this.form.selectedCategories.join(','),
                levels: this.form.selectedLevels.join(','),
                programs: this.form.selectedPrograms.join(','),
                prompt_id: this.promptId,
            };

            this.isLoading = true;
            try {
                const res = await axios.get(toolsEndpoint, { params });
                this.tools = res.data;
            } catch (err) {
                console.error('Errore durante il filtraggio dei tool:', err);
                this.errors.push('Errore durante il filtraggio dei tool.');
            } finally {
                this.isLoading = false;
            }
        },

        async fetchOptions() {
            try {
                const [categoriesRes, levelsRes, programsRes] = await Promise.all([
                    axios.get(categoriesEndpoint),
                    axios.get(levelsEndpoint),
                    axios.get(programsEndpoint)
                ]);
                this.categories = categoriesRes.data;
                this.levels = levelsRes.data;
                this.programs = programsRes.data;
            } catch (err) {
                console.error('Errore nel caricamento delle opzioni:', err);
            }
        },

        openModal(tool) {
            this.selectedTool = tool;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    },
    async created() {
        await this.fetchOptions();
        this.filteredTools();
    },
};
</script>

<style scoped>
#advanced-search {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
}

.container {
    padding: 20px;
    width: 100%;
    max-width: 1200px;
}

.filter-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
}

.filter-group {
    flex: 1;
    margin: 10px;
    position: relative;
    display: flex;
    justify-content: center;
}

.dropdown {
    position: relative;
    display: inline-block;
    width: 100%;
}

.dropbtn {
    background-color: transparent;
    color: white;
    font-weight: 600;
    padding: 10px 15px;
    font-size: 16px;
    border: 0px solid white;
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
    text-align: center;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 5px;
    max-height: 200px;
    overflow-y: auto;
    margin-top: 5px;
    top: 100%;
}

.dropdown-content .dropdown-item {
    padding: 8px 12px;
    display: flex;
    align-items: center;
}

.dropdown-content .dropdown-item label {
    margin-left: 10px;
    color: #333;
}

.dropdown-content.show {
    display: block;
}

.results-count {
    text-align: center;
    color: #ffff;
    font-weight: bold;
    margin: 20px 0;
}

.results-container {
    width: 100%;
    overflow-y: auto;
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

    .filter-group {
        width: 100%;
    }

    .results-count {
        font-size: 1rem;
    }

    .results-container {
        height: calc(100vh - 320px);
    }
}

@media (max-width: 576px) {
    .dropbtn {
        font-size: 12px;
        padding: 6px 8px;
    }
}
</style>
