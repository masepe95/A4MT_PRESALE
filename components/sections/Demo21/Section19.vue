<script>

export default {
    name: 'AppHero',
    data() {
        return {
            searchPromptId: null,
        }
    },
    emits: ['prompt-id-change', 'form-submit'],
    methods: {
        onPromptIdChange(id) {
            this.searchPromptId = id;
            this.$emit('prompt-id-change', this.searchPromptId);
        },
        handleFormSubmit() {
            this.$emit('form-submit');
            if (this.searchPromptId) {
                this.$router.push({ name: 'AdvancedSearch', query: { prompt_id: this.searchPromptId } });
            }
        }
    }
}
</script>

<template>
    <div id="app-hero" ref="hero">
        <div class="hero-overlay">
            <!-- <img src="/A4MT-logo-hero.png" alt="logo" class="hero-logo"> -->
            <h1 class="hero-title mt-5">3-Moves Ahead Management.</h1>
            <div class="search-input">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#app-hero {
    height: 100vh;
    background-image: url(../../../assets/images/main_background.jpeg);
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        /* Darker overlay for better text readability */
        z-index: 0;
    }
}

.hero-logo {
    width: 50%;
    max-width: 550px;
    height: auto;
    z-index: 1;
    margin-bottom: 2rem;
}

.hero-overlay {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 10vh;
    z-index: 1;
}

.hero-title {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
    color: #ffffff;
    font-size: 2.5rem;
    margin: 1rem 0;
    z-index: 1;
}

.search-input {
    width: 50vw;
    margin-top: 2rem;
    z-index: 1;
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-logo {
        width: 70%;
    }

    .search-input {
        width: 80vw;
    }
}

@media (max-width: 576px) {
    .hero-title {
        font-size: 1.4rem;
    }

    .hero-logo {
        width: 80%;
    }

    .search-input {
        width: 80vw;
    }
}
</style>
