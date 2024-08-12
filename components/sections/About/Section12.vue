<template>
    <section class="bg--white-400 py-100 ct-03 content-section division">
        <!-- Background blurred effect -->
        <div class="search-input">
            <AppSearchTerm @prompt-id-change="onPromptIdChange" @form-submit="handleFormSubmit" />
        </div>
        <div class="container mt-5">
            <div class="row d-flex align-items-center">
                <!-- TEXT BLOCK -->
                <div class="col-md-6 col-lg-5 order-last order-md-2">
                    <div class="txt-block left-column wow fadeInRight">
                        <div class="text-overlay">
                            <!-- Title -->
                            <h2 class="s-46 w-700">Benefits for Organizations</h2>
                            <!-- List -->
                            <ul class="simple-list">
                                <li class="list-item">
                                    <p class="mb-0">2 Global Self-assessments. 1 three-year development plan featuring
                                        over
                                        300 suggested activities.</p>
                                </li>
                                <li class="list-item">
                                    <p class="mb-0">1 Partner with over 80 uniform A4ManagementTools.</p>
                                </li>
                                <li class="list-item">
                                    <p class="mb-0">Transfer know-how and key information to the organization by design
                                        without compromises.</p>
                                </li>
                                <li class="list-item">
                                    <p class="mb-0">Correct and documented management practice.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- END TEXT BLOCK -->
                <!-- IMAGE BLOCK -->
                <div class="col-md-6 col-lg-7 order-first order-md-2">
                    <div class="img-block right-column wow fadeInLeft">
                        <img class="img-fluid" src="/assets/images/img-14.png" alt="content-image" />
                    </div>
                </div>
            </div>
            <!-- End row -->
        </div>
        <!-- End container -->
    </section>
</template>

<style scoped>
.bg--white-400 {
    position: relative;
    min-height: 100vh;
    /* Ensure it covers the full viewport height */
    overflow: hidden;
    z-index: 1;
    background-image: url(../../../assets/images/main_background.jpeg);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}

.bg--white-400::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    /* Apply the blur effect */
    pointer-events: none;
    /* Make the overlay click-through */
    z-index: -1;
    /* Ensure it stays behind the content */
}

.search-input {
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 1rem;
}

.container {
    position: relative;
    z-index: 2;
    /* Mantieni il contenuto sopra il background sfocato */
}

/* Applica lo sfondo bianco semi-trasparente sotto il testo */
.text-overlay {
    position: relative;
    background-color: rgba(255, 255, 255, 0.827);
    padding: 40px;
    border-radius: 12px;
}
</style>



<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AppSearchTerm from '~/components/sections/SearchTools/AppSearchTerm.vue';

const searchPromptId = ref(null);
const searchQuery = ref(''); // Aggiungi questa riga per mantenere il prompt selezionato
const router = useRouter();

const onPromptIdChange = (id) => {
    searchPromptId.value = id;
};

const handleFormSubmit = (description) => {
    searchQuery.value = description; // Memorizza il prompt selezionato
    if (searchPromptId.value) {
        router.push({ name: 'inspiration', query: { prompt_id: searchPromptId.value, prompt_description: searchQuery.value } });
    }
};
</script>