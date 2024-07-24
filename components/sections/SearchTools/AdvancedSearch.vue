<template>
    <div id="advanced-search">
        <div class="container search-bar-container">
            <AppSearchTerm :initialPrompt="initialPrompt" @prompt-id-change="onPromptIdChange"
                @form-submit="onFormSubmit" />
        </div>
        <div class="container-fluid w-100" id="filter-form">
            <form>
                <div class="row justify-content-center px-3">
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="form-group px-3">
                            <div class="dropdown">
                                <button class="btn dropdown-toggle w-100 transparent-button" type="button"
                                    id="categoriesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filter Categories
                                </button>
                                <ul class="dropdown-menu w-100 glass-effect" aria-labelledby="categoriesDropdown">
                                    <li class="mb-2" v-for="category in categories" :key="category.id">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox"
                                                :id="'category-' + category.id" :value="category.id"
                                                v-model="form.categories">
                                            <label class="form-check-label" :for="'category-' + category.id">{{
                                                category.description }}</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="form-group px-3">
                            <div class="dropdown">
                                <button class="btn dropdown-toggle w-100 transparent-button" type="button"
                                    id="levelsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filter Levels
                                </button>
                                <ul class="dropdown-menu w-100 glass-effect" aria-labelledby="levelsDropdown">
                                    <li class="mb-2" v-for="level in levels" :key="level.id">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" :id="'level-' + level.id"
                                                :value="level.id" v-model="form.levels">
                                            <label class="form-check-label" :for="'level-' + level.id">{{
                                                level.description }}</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="form-group px-3">
                            <div class="dropdown">
                                <button class="btn dropdown-toggle w-100 transparent-button" type="button"
                                    id="programsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filter Programs
                                </button>
                                <ul class="dropdown-menu w-100 glass-effect" aria-labelledby="programsDropdown">
                                    <li class="mb-2" v-for="program in programs" :key="program.id">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox"
                                                :id="'program-' + program.id" :value="program.id"
                                                v-model="form.programs">
                                            <label class="form-check-label" :for="'program-' + program.id">{{
                                                program.description }}</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="results-container">
            <ToolList v-if="!isLoading" :tools="tools" @tool-click="openModal" />
        </div>
        <ToolDetail :tool="selectedTool" :show="showModal" @close="closeModal" />
    </div>
</template>

<script>
import axios from 'axios';
import AppSearchTerm from '~/components/sections/SearchTools/AppSearchTerm.vue';
import ToolList from '~/components/sections/SearchTools/ToolList.vue';
import ToolDetail from '~/components/sections/SearchTools/ToolDetail.vue';

const toolsEndpoint = "https://antiquewhite-squid-521659.hostingersite.com/api/tools";
const categoriesEndpoint = "https://antiquewhite-squid-521659.hostingersite.com/api/categories";
const levelsEndpoint = "https://antiquewhite-squid-521659.hostingersite.com/api/levels";
const programsEndpoint = "https://antiquewhite-squid-521659.hostingersite.com/api/programs";
const promptEndpoint = "https://antiquewhite-squid-521659.hostingersite.com/api/prompts";

const formField = {
    categories: [],
    levels: [],
    programs: [],
};

export default {
    name: "AdvancedSearch",
    components: { AppSearchTerm, ToolList, ToolDetail },
    data() {
        return {
            endpoint: toolsEndpoint,
            isHomePage: false,
            form: { ...formField },
            tools: [],
            categories: [],
            levels: [],
            programs: [],
            errors: [],
            isLoading: false,
            searchPromptId: this.$route.query.prompt_id || null,
            initialPrompt: this.$route.query.prompt_description || '',
            selectedTool: null,
            showModal: false,
        };
    },
    computed: {
        hasErrors() {
            return Object.keys(this.errors).length;
        }
    },
    watch: {
        'form.categories': 'filteredTools',
        'form.levels': 'filteredTools',
        'form.programs': 'filteredTools',
    },
    methods: {
        filteredTools() {
            this.validateAdvancedSearch();

            if (this.hasErrors) {
                return;
            }

            this.tools = [];
            const params = {
                categories: this.form.categories.join(','),
                levels: this.form.levels.join(','),
                programs: this.form.programs.join(','),
                prompt_id: this.searchPromptId,
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

        fetchPromptDescription() {
            if (this.searchPromptId) {
                axios.get(`${promptEndpoint}/${this.searchPromptId}`)
                    .then((res) => {
                        this.initialPrompt = res.data.description || '';
                    })
                    .catch((err) => { console.error(err); });
            }
        },

        resetFilters() {
            this.form = { ...formField };
        },

        validateAdvancedSearch() {
            this.errors = {};
            // Rimuovi la validazione obbligatoria per consentire la ricerca con filtri parziali
        },
        onPromptIdChange(id) {
            this.searchPromptId = id;
            this.resetFilters();  // Resetta i filtri
            this.filteredTools(); // Ricarica i tool ogni volta che il prompt cambia
        },
        onFormSubmit() {
            if (this.searchPromptId) {
                this.filteredTools();
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
    created() {
        this.fetchOptions();
        this.fetchPromptDescription(); // Fetch prompt description if prompt_id is present
        this.filteredTools();  // Carica tutti i tools all'inizio
    },
};
</script>

<style lang="scss" scoped>
#advanced-search {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url(../../../assets/images/main_background.jpeg);
    background-position: center;
    background-size: cover;
    position: relative;
    padding-top: 80px;
}

.search-bar-container {
    justify-content: center;
    width: 100%;
}

#filter-form {
    padding-bottom: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.results-container {
    overflow-y: auto;
    padding: 0 15px;
    height: calc(100vh - 320px);
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

.form-group label {
    color: #222121;
    font-weight: 500;
}

.dropdown-menu {
    max-height: 200px;
    overflow-y: auto;
}

.form-check {
    margin-left: 10px;
}

.form-check-label {
    cursor: pointer;
}

.transparent-button {
    background: transparent;
    color: #fff;
    border: none;
    font-weight: 500;
    box-shadow: none;
    padding: 10px;
    transition: none;
}

.transparent-button:hover,
.transparent-button:focus {
    background: transparent;
    color: #fff;
    box-shadow: none;
    outline: none;
}

.glass-effect {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #fff;
}

.glass-effect .dropdown-menu {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

@media (max-width: 1200px) {
    .search-bar-container {
        padding-left: 20px;
        padding-right: 20px;
    }

    .form-group {
        padding-left: 20px;
        padding-right: 20px;
    }

    .dropdown-menu {
        max-height: 150px;
    }

    .form-group .dropdown-toggle {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

@media (max-width: 992px) {
    .search-bar-container {
        padding-left: 15px;
        padding-right: 15px;
    }

    .form-group {
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 15px;
    }

    .dropdown-menu {
        max-height: 140px;
    }

    .form-group .dropdown-toggle {
        font-size: 13px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

@media (max-width: 768px) {
    .search-bar-container {
        padding-left: 10px;
        padding-right: 10px;
    }

    .form-group {
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 15px;
    }

    .dropdown-menu {
        max-height: 120px;
    }

    .form-group .dropdown-toggle {
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

@media (max-width: 576px) {
    #advanced-search {
        padding-top: 40px;
    }

    .results-container {
        height: calc(100vh - 400px);
    }

    .search-bar-container {
        padding-left: 8px;
        padding-right: 8px;
    }

    .form-group {
        padding-left: 8px;
        padding-right: 8px;
        margin-bottom: 15px;
    }

    .dropdown-menu {
        max-height: 100px;
    }

    .form-group .dropdown-toggle {
        font-size: 11px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
