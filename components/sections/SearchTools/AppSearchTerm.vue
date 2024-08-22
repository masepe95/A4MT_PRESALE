<template>
    <form @submit.prevent="handleFormSubmit" class="search-form">
        <div class="searchbar-container">
            <div class="searchbar input-group">
                <input type="text" v-model="searchQuery" class="form-control" :placeholder="inputProps.placeholder"
                    aria-describedby="button-addon2" @input="handleInput" @focus="handleFocus" @blur="handleBlur" />
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
        },
        promptId: {
            type: [String, Number],
            default: null
        }
    },
    data() {
        return {
            searchQuery: this.initialPrompt,
            previousQuery: this.initialPrompt,
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
        if (this.promptId) {
            this.fetchPromptById(this.promptId);
        }
    },
    watch: {
        initialPrompt(newPrompt) {
            this.searchQuery = newPrompt;
            this.previousQuery = newPrompt;
        },
        promptId(newId) {
            if (newId) {
                this.fetchPromptById(newId);
            }
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
            this.$emit('form-submit', suggestion.description);
        },
        handleInput() {
        if (this.searchQuery.length > 0) {
            // Lowercase the search query for case-insensitive matching
            const lowerCaseQuery = this.searchQuery.toLowerCase();

            // Split the search query into individual words
            const searchWords = lowerCaseQuery.split(' ').filter(Boolean);

            // Filter prompts based on whether they contain the full query or any of the search words
            this.suggestions = this.allPrompts.filter(prompt => {
                const promptText = prompt.description.toLowerCase();
                
                // Check if the full query matches or at least one word matches
                return promptText.includes(lowerCaseQuery) || searchWords.some(word => promptText.includes(word));
            });
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
        async fetchPromptById(promptId) {
            const apiUrl = `https://antiquewhite-squid-521659.hostingersite.com/api/prompts/${promptId}`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                this.searchQuery = data.description;
                this.previousQuery = data.description;
            } catch (error) {
                console.error('Errore nella chiamata API del backend:', error);
            }
        },
        handleFormSubmit() {
            this.showSuggestions = true;
            this.$nextTick(() => {
                this.$refs.searchInput.focus();
            });
        },
        handleFocus() {
            this.previousQuery = this.searchQuery;
            this.searchQuery = '';
            this.showSuggestions = true;
        },
        handleBlur() {
            if (this.searchQuery.trim() === '') {
                this.searchQuery = this.previousQuery;
            }
            setTimeout(() => {
                this.showSuggestions = false;
            }, 100);
        }
    },
};
</script>

<style scoped>
.search-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.searchbar-container {
    width: 100%;
    max-width: 600px;
    position: relative;
    padding: 0 10px;
}

.searchbar {
    width: 100%;
    display: flex;
    align-items: center;
}

input {
    flex: 1;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid #ccc;
    padding: 12px 15px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    box-sizing: border-box;
    height: 50px;
}

input:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.1);
}

.search-btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border: 1px solid #294e80;
    background: #294e80;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    height: 50px;
    box-sizing: border-box;
    transition: background 0.3s ease, border-color 0.3s ease;
}

.search-btn:hover {
    background: #0056b3;
    border-color: #0056b3;
}

.suggestions {
    position: absolute;
    top: calc(100% + 5px);
    width: 90%;
    z-index: 1000;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    max-height: 400px;
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
    transition: background 0.3s ease;
}

.list-group-item:hover {
    background: #f0f0f0;
}

@media (max-width: 576px) {
    .searchbar-container {
        padding: 0 10px;
    }
}
</style>
