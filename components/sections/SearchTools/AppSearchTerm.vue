<template>
    <form @submit.prevent="handleFormSubmit">
        <div class="searchbar input-group px-2 position-relative">
            <input type="text" v-model="searchQuery" class="form-control" :placeholder="inputProps.placeholder"
                aria-describedby="button-addon2" @input="handleInput" @focus="handleFocus" @blur="handleBlur" />
            <button type="button" class="clear-btn" v-if="searchQuery" @click="clearSearchQuery">
                <i class="material-icons">close</i>
            </button>
            <button type="submit" class="d-flex align-items-center search-btn" id="button-addon2">
                <i class="material-icons fs-5 px-4">search</i>
            </button>
        </div>
        <div v-if="showSuggestions && suggestions.length > 0" class="position-relative me-5">
            <ul class="dropdown-menu" aria-labelledby="searchQuery" style="display: block;">
                <li v-for="(suggestion, index) in suggestions" :key="suggestion.id"
                    @mousedown.prevent="handleSuggestionSelected(suggestion)" class="dropdown-item">
                    {{ suggestion.description }}
                </li>
            </ul>
        </div>
        <div style="height: 30px;"></div>
    </form>
</template>

<script>
export default {
    name: 'AppSearchTerm',
    props: {
        initialPrompt: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            searchQuery: this.initialPrompt,
            suggestions: [],
            allPrompts: [],
            showSuggestions: false,
        };
    },
    emits: ['query-change', 'form-submit', 'prompt-id-change', 'prompt-selected'],
    computed: {
        inputProps() {
            return {
                value: this.searchQuery,
                placeholder: this.initialPrompt || 'What would you like to do?',
            };
        },
    },
    created() {
        this.fetchAllPrompts();
    },
    watch: {
        initialPrompt(newPrompt) {
            this.searchQuery = newPrompt;
        }
    },
    methods: {
        handleSuggestionSelected(suggestion) {
            this.searchQuery = suggestion.description;
            this.suggestions = [];
            this.showSuggestions = false;
            this.$emit('query-change', suggestion.description);
            this.$emit('prompt-id-change', suggestion.id);
            this.$emit('prompt-selected', suggestion.id);
            this.$emit('form-submit');
        },
        handleInput() {
            if (this.searchQuery.length > 0) {
                this.suggestions = this.allPrompts.filter(prompt =>
                    prompt.description.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            } else {
                this.suggestions = this.allPrompts;
            }
            this.showSuggestions = true;
        },
        async fetchAllPrompts() {
            const apiUrl = `https://antiquewhite-squid-521659.hostingersite.com/api/prompts`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                this.allPrompts = data;
                this.suggestions = this.allPrompts;
            } catch (error) {
                console.error('Errore nella chiamata API del backend:', error);
            }
        },
        handleFormSubmit() {
            if (this.searchQuery.trim() === '') {
                alert("La query di ricerca non può essere vuota.");
            } else {
                this.$emit('form-submit');
            }
        },
        handleFocus() {
            if (this.searchQuery.trim() === '') {
                this.suggestions = this.allPrompts;
            }
            this.showSuggestions = true;
        },
        handleBlur() {
            setTimeout(() => {
                this.showSuggestions = false;
            }, 100);
        },
        clearSearchQuery() {
            this.searchQuery = '';
            this.suggestions = [];
            this.showSuggestions = false;
        }
    },
};
</script>

<style lang="scss" scoped>
.searchbar {
    width: 100%;
    position: relative;

    input {
        border-radius: 30px;
        position: relative;
        padding-right: 40px;

        &:focus {
            outline-style: none;
            box-shadow: none;
            border-right-color: rgba(black, 0.8);
            box-shadow: -5px 10px 10px rgba(0, 0, 0, 0.7);
        }
    }

    button.clear-btn {
        position: absolute;
        top: 55%;
        transform: translateY(-50%);
        right: 100px;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0;
        z-index: 6;

        i {
            color: black;
        }

        &:hover {
            i {
                color: #000;
            }
        }
    }

    button.search-btn {
        height: 40px;
        background-color: white;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        border: none;
        transition: background-color 0.2s;

        i {
            color: black;
        }

        &:hover {
            background-color: #000;

            i {
                color: white;
            }
        }
    }
}

input[type="text"]:focus {
    outline-style: none;
    box-shadow: none;
    border-right-color: rgba(black, 0.8);
    box-shadow: -5px 10px 10px rgba(0, 0, 0, 0.7);
}

ul {
    width: 37%;
    left: 60px;
    max-height: 300px;
    overflow-y: auto;

    @media (max-width: 767px) {
        width: 90%;
        left: 5%;
        padding: 0;
        max-height: 150px;
    }
}

li {
    list-style-type: none;
    word-wrap: break-word;

    &:hover {
        background-color: rgba(black, 0.25);
    }
}

.dropdown-menu {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    position: absolute;
    left: 20px;
    width: 92%;

    @media (max-width: 767px) {
        width: 90%;
        left: 5%;
        padding: 0;
    }
}

a {
    text-decoration: none;
}

.dropdown-item {
    white-space: normal;
    padding: 10px;

    &:hover {
        cursor: pointer;
    }
}
</style>
