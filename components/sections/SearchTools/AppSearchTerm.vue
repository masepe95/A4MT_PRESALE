<template>
    <form @submit.prevent="handleFormSubmit" class="search-form">
        <div class="searchbar input-group">
            <input type="text" v-model="searchQuery" class="form-control" :placeholder="inputProps.placeholder"
                aria-describedby="button-addon2" @input="handleInput" @focus="handleFocus" @blur="handleBlur" />
            <button type="button" class="clear-btn" v-if="searchQuery" @click="clearSearchQuery">
                X
            </button>
            <button type="submit" class="search-btn" id="button-addon2">
                Inspire me
            </button>
        </div>
        <div v-if="showSuggestions && suggestions.length > 0" class="suggestions">
            <ul class="list-group">
                <li v-for="(suggestion, index) in suggestions" :key="suggestion.id"
                    @mousedown.prevent="handleSuggestionSelected(suggestion)" class="list-group-item">
                    {{ suggestion.description }}
                </li>
            </ul>
        </div>
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

<style scoped>
.search-form {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.searchbar {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
}

input {
    width: 100%;
    border-radius: 30px;
    padding-right: 40px;
    border: 1px solid #ccc;
    padding: 10px 15px;
}

input:focus {
    border-color: #000;
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.clear-btn {
    position: absolute;
    top: 50%;
    right: 130px;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.clear-btn i {
    color: #000;
}

.clear-btn:hover i {
    color: #555;
}

.search-btn {
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.search-btn i {
    color: #000;
}

.search-btn:hover i {
    color: #555;
}

.suggestions {
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    z-index: 5;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    max-height: 200px;
    overflow-y: auto;
}

.list-group {
    list-style: none;
    padding: 0;
    margin: 0;
}

.list-group-item {
    padding: 10px 15px;
    cursor: pointer;
}

.list-group-item:hover {
    background: #f0f0f0;
}
</style>
