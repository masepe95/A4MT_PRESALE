<template>
    <div id="app-hero" ref="hero">
        <div class="hero-overlay">
            <img :src="logo" alt="logo" class="hero-logo">
            <h1 class="hero-title mt-5"><span ref="typedText"></span></h1>
            <div class="search-input">
                <AppSearchTerm @prompt-id-change="onPromptIdChange" @form-submit="handleFormSubmit" />
            </div>
            <img src="../../../assets/images/swiss-quality.png" alt="Swiss Quality" class="swiss-quality">
            <!-- <SectionsAboutSection6 style="width: 100%;" /> -->
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Typed from 'typed.js';
import AppSearchTerm from '~/components/sections/SearchTools/AppSearchTerm.vue';
import logo from '~/assets/images/A4MT-logo-hero.png'

const searchPromptId = ref(null);
const searchQuery = ref(''); // Aggiungi questa riga per mantenere il prompt selezionato
const router = useRouter();
const typedText = ref(null);

const onPromptIdChange = (id) => {
    searchPromptId.value = id;
};

const handleFormSubmit = (description) => {
    searchQuery.value = description; // Memorizza il prompt selezionato
    if (searchPromptId.value) {
        router.push({ name: 'inspiration', query: { prompt_id: searchPromptId.value, prompt_description: searchQuery.value } });
    }
};

onMounted(() => {
    const options = {
        strings: ['80+ Tools for Managers &#x2022; A4 Format.'],
        typeSpeed: 40,
        showCursor: false,
    };

    new Typed(typedText.value, options);
});
</script>

<style scoped>
#app-hero {
    height: 100vh;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

#app-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../../../assets/images/main_background.jpeg);
    background-position: center;
    background-size: cover;
    z-index: -2;
    /* Place behind the hero-overlay */
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 16vh;
    z-index: 1;
    backdrop-filter: blur(5px);
    /* Apply the blur to the background */
    -webkit-backdrop-filter: blur(5px);
    /* Ensure compatibility with Safari */
}

.hero-logo {
    width: 50%;
    max-width: 550px;
    height: auto;
    z-index: 1;
    margin-bottom: 0.5rem;
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
    padding-top: 16vh;
    z-index: 1;
}

.hero-title {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
    color: #ffffff;
    font-size: 2.5rem;
    margin: 1rem 0;
}

.search-input {
    width: 100%;
    max-width: 600px;
    margin-top: 1rem;
}

.swiss-quality {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 150px;
    /* Adjust the size as needed */
    height: auto;
    z-index: 2;
    /* Ensure it is above the background and other elements */
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-logo {
        width: 70%;
    }

    .search-input {
        width: 90%;
    }

    .swiss-quality {
        width: 100px;
        /* Adjust the size for smaller screens */
    }
}

@media (max-width: 576px) {
    .hero-title {
        font-size: 1.2rem;
    }

    .hero-logo {
        width: 80%;
    }

    .search-input {
        width: 100%;
    }

    .swiss-quality {
        width: 80px;
        /* Adjust the size for even smaller screens */
    }

}

@media (max-width: 768px) and (orientation: landscape) {
    #app-hero {
        padding-top: 5vh;
    }

    .hero-logo {
        width: 60%;
    }

    .hero-title {
        font-size: 1.8rem;
    }

    .search-input {
        width: 90%;
        margin-top: 0rem;
    }
}
</style>
