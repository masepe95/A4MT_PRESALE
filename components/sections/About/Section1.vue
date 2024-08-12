<template>
    <section id="about-2" class="rel inner-page-hero about-section division">
        <!-- ABOUT-2 TITLE -->
        <div class="container">
            <div class="row">
                <div class="col-md-11 col-lg-10 col-xl-9">
                    <div class="about-2-title mb-60">
                        <!-- Layer Scuro sul Contenuto di Testo -->
                        <div class="text-overlay">
                            <!-- Title -->
                            <h2 class="s-52 w-700 mb-30 text-white">We provide 80+ Tools & Trainings for managers and
                                collaborators
                            </h2>
                            <div class="search-input">
                                <AppSearchTerm @prompt-id-change="onPromptIdChange" @form-submit="handleFormSubmit" />
                            </div>
                            <!-- Text -->
                            <p class="mb-0 text-white">In A4ManagementTools, we offer intuitive digital tools that make
                                complex
                                management tasks more efficient by converting them into concise one-page documents.
                                These
                                tools, enriched with procedures, training and examples, improve employee autonomy and
                                management perception.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END ABOUT-2 TITLE -->
        <!-- ABOUT-2 IMAGES -->
        <div class="container-fluid">
            <div class="row">
                <!-- IMAGES-1 -->
                <div class="col-md-5">
                    <div class="text-end">
                        <!-- IMAGE-1 -->
                        <div class="about-2-img a-2-1 r-12">
                            <img class="img-fluid" src="/assets/images/a2-1.jpg" alt="about-image" />
                        </div>
                        <!-- IMAGE-2 -->
                        <div class="about-2-img a-2-2 r-12">
                            <img class="img-fluid" src="/assets/images/a2-2.jpg" alt="about-image" />
                        </div>
                    </div>
                </div>
                <!-- END IMAGES-1 -->
                <!-- IMAGES-2 -->
                <div class="col-md-7">
                    <!-- IMAGE-3 -->
                    <div class="about-2-img a-2-3 r-12">
                        <img class="img-fluid" src="/assets/images/a2-3.jpg" alt="about-image" />
                    </div>
                    <div class="row">
                        <!-- TEXT -->
                        <div class="col-md-7 col-lg-6">
                            <div class="a2-txt bg--black-400 pattern-01 bg--fixed color--white r-12">
                                <!-- Icon -->
                                <div class="a2-txt-quote ico-40 o-20">
                                    <span class="flaticon-quote"></span>
                                </div>
                                <!-- Text -->
                                <p>Imagine delegating 1 task in 5 minutes, using 1 A4 sheet containing procedure and
                                    instructions.
                                    Imagine consulting the progress 24/7 and presenting the results with the same
                                    document, with just 1 click and without rearranging the content. <br>
                                    Welcome to A4ManagementTools.</p>
                                <!-- Author -->
                                <p class="a2-txt-author">Marco Cerulli <span>CEO & FOUNDER</span></p>
                            </div>
                        </div>
                        <!-- IMAGE-4 -->
                        <div class="col-md-5 col-lg-6">
                            <div class="about-2-img a-2-4 r-12">
                                <img style="z-index: 5;" class="img-fluid" src="/assets/images/a2-4.jpg"
                                    alt="about-image" />
                            </div>
                        </div>
                    </div>
                    <!-- End row -->
                </div>
                <!-- END IMAGES-2 -->
            </div>
            <!-- End row -->
        </div>
        <!-- END ABOUT-2 IMAGES -->
    </section>
</template>

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

<style scoped>
.search-input {
    width: 90%;
    margin-bottom: 2rem;
}

.search-form{
    display: block;
}

#about-2 {
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: visible;
}

#about-2::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../../../assets/images/main_background.jpeg);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    filter: blur(5px);
    /* Applica l'effetto blur all'immagine di sfondo */
    z-index: -1;
    /* Mantiene il background dietro gli altri elementi */
}

/* Layer Scuro sul Contenuto di Testo */
.text-overlay {
    position: relative;
    background-color: rgba(0, 0, 0, 0.263);

    /* Compatibilità con browser WebKit */
    padding: 20px;
    border-radius: 12px;
    /* Bordo leggermente trasparente */
}
</style>
