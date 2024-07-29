<template>
    <div id="advanced-search">
        <AppSearchTerm :initialPrompt="initialPrompt" :promptId="routeQueryPromptId" @prompt-id-change="updatePromptId"
            @form-submit="filteredTools" />
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
            <div class="results-count" v-if="!isLoading">
                We have found {{ tools.length }} tools.
            </div>
            <div class="results-container">
                <ToolList v-if="!isLoading" :tools="tools" @tool-click="openModal" />
            </div>
        </div>
        <ToolDetail :tool="selectedTool" :show="showModal" @close="closeModal" />
        <PageLoading v-if="isLoading" />
    </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import ToolList from '~/components/sections/SearchTools/ToolList.vue';
import ToolDetail from '~/components/sections/SearchTools/ToolDetail.vue';
import AppSearchTerm from '~/components/sections/SearchTools/AppSearchTerm.vue';
import PageLoading from '~/components/elements/PageLoading.vue'; // Import the PageLoading component

const toolsEndpoint = "https://antiquewhite-squid-521659.hostingersite.com/api/tools";
const categoriesEndpoint = "https://antiquewhite-squid-521659.hostingersite.com/api/categories";
const levelsEndpoint = "https://antiquewhite-squid-521659.hostingersite.com/api/levels";
const programsEndpoint = "https://antiquewhite-squid-521659.hostingersite.com/api/programs";

export default {
    name: "AdvancedSearch",
    components: { ToolList, ToolDetail, AppSearchTerm, PageLoading }, // Add PageLoading to components
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
    setup(props) {
        const route = useRoute();
        const router = useRouter();
        const tools = ref([]);
        const categories = ref([]);
        const levels = ref([]);
        const programs = ref([]);
        const isLoading = ref(false);
        const selectedTool = ref(null);
        const showModal = ref(false);
        const dropdowns = ref({
            categories: false,
            levels: false,
            programs: false
        });
        const form = ref({
            selectedCategories: [],
            selectedLevels: [],
            selectedPrograms: []
        });

        const initialPrompt = ref(props.promptDescription);
        const routeQueryPromptId = ref(route.query.prompt_id || props.promptId);

        watch(route, (newRoute) => {
            if (newRoute.query.prompt_id) {
                routeQueryPromptId.value = newRoute.query.prompt_id;
            }
        });

        const updatePromptId = (id) => {
            routeQueryPromptId.value = id;
            router.push({ query: { ...route.query, prompt_id: id } });
        };

        const toggleDropdown = (dropdown) => {
            dropdowns.value[dropdown] = !dropdowns.value[dropdown];
        };

        const closeDropdown = (dropdown) => {
            dropdowns.value[dropdown] = false;
        };

        const filteredTools = async (description = '') => {
            isLoading.value = true;
            tools.value = [];
            const params = {
                categories: form.value.selectedCategories.join(','),
                levels: form.value.selectedLevels.join(','),
                programs: form.value.selectedPrograms.join(','),
                prompt_id: routeQueryPromptId.value,
                description: description || initialPrompt.value
            };

            try {
                const res = await axios.get(toolsEndpoint, { params });
                tools.value = res.data;
            } catch (err) {
                console.error('Errore durante il filtraggio dei tool:', err);
            } finally {
                isLoading.value = false;
            }
        };

        const fetchOptions = async () => {
            try {
                const [categoriesRes, levelsRes, programsRes] = await Promise.all([
                    axios.get(categoriesEndpoint),
                    axios.get(levelsEndpoint),
                    axios.get(programsEndpoint)
                ]);
                categories.value = categoriesRes.data;
                levels.value = levelsRes.data;
                programs.value = programsRes.data;
            } catch (err) {
                console.error('Errore nel caricamento delle opzioni:', err);
            }
        };

        const openModal = (tool) => {
            selectedTool.value = tool;
            showModal.value = true;
        };

        const closeModal = () => {
            showModal.value = false;
        };

        onMounted(async () => {
            await fetchOptions();
            await filteredTools();
        });

        return {
            form,
            tools,
            categories,
            levels,
            programs,
            isLoading,
            selectedTool,
            showModal,
            dropdowns,
            toggleDropdown,
            closeDropdown,
            filteredTools,
            openModal,
            closeModal,
            initialPrompt,
            routeQueryPromptId,
            updatePromptId
        };
    }
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
