<template>
    <section id="features-11" class="py-80 features-section division">
        <div class="container mt-5">
            <!-- SECTION TITLE -->
            <div class="row justify-content-center">
                <div class="search-input">
                    <AppSearchTerm @prompt-id-change="onPromptIdChange" @form-submit="handleFormSubmit" />
                </div>
                <div class="col-md-10 col-lg-9">
                    <div class="section-title mb-70 text-center">
                        <!-- Title -->
                        <h2 class="s-50 w-700 text-white">Our solutions for you.</h2>
                        <!-- Text -->
                        <p class="s-21 color--grey text-white">An ecosystem for the entire company.</p>
                    </div>
                </div>
            </div>
            <!-- FEATURES-11 WRAPPER with Glass Effect -->
            <div class="glass-effect p-4">
                <div class="fbox-wrapper">
                    <div class="row row-cols-1 row-cols-md-2 rows-3">
                        <!-- FEATURE BOX #1 -->
                        <div class="col">
                            <div class="fbox-11 fb-1 wow fadeInUp">
                                <!-- Icon -->
                                <div class="fbox-ico-wrap">
                                    <div class="fbox-ico ico-50">
                                        <div class="shape-ico">
                                            <!-- Vector Icon -->
                                            <span class="flaticon-paper-sizes color--theme"></span>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Icon -->
                                <!-- Text -->
                                <div class="fbox-txt">
                                    <h6 class="s-22 w-700 ">80+ A4ManagementTools</h6>
                                    <p class="">80+ Tools, A4 format with integrated procedures of key
                                        business and HR management activities.</p>
                                </div>
                            </div>
                        </div>
                        <!-- END FEATURE BOX #1 -->
                        <!-- FEATURE BOX #2 -->
                        <div class="col">
                            <div class="fbox-11 fb-2 wow fadeInUp">
                                <!-- Icon -->
                                <div class="fbox-ico-wrap">
                                    <div class="fbox-ico ico-50">
                                        <div class="shape-ico">
                                            <!-- Vector Icon -->
                                            <span class="flaticon-magnifying-glass color--theme"></span>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Icon -->
                                <!-- Text -->
                                <div class="fbox-txt">
                                    <h6 class="s-22 w-700 ">2 Comprehensive Assessments of the Organization
                                    </h6>
                                    <p class="">2 Self-assessments (business management and process
                                        management) based on international standards. 2 Three-year development plans
                                        with 300+ development activities integrated by A4ManagementTools.</p>
                                </div>
                            </div>
                        </div>
                        <!-- END FEATURE BOX #2 -->
                        <!-- FEATURE BOX #3 -->
                        <div class="col">
                            <div class="fbox-11 fb-3 wow fadeInUp">
                                <!-- Icon -->
                                <div class="fbox-ico-wrap">
                                    <div class="fbox-ico ico-50">
                                        <div class="shape-ico">
                                            <!-- Vector Icon -->
                                            <span class="flaticon-graphic color--theme"></span>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Icon -->
                                <!-- Text -->
                                <div class="fbox-txt">
                                    <h6 class="s-22 w-700 ">80+ Self-paced Reverse Training</h6>
                                    <p class="">150+ hours-lessons of self-paced trainings inherent to each
                                        A4ManagementTool. A practice-based digital learning place. At the user's pace,
                                        online or in-person.</p>
                                </div>
                            </div>
                        </div>
                        <!-- END FEATURE BOX #3 -->
                        <!-- FEATURE BOX #4 -->
                        <div class="col">
                            <div class="fbox-11 fb-4 wow fadeInUp">
                                <!-- Icon -->
                                <div class="fbox-ico-wrap">
                                    <div class="fbox-ico ico-50">
                                        <div class="shape-ico">
                                            <!-- Vector Icon -->
                                            <span class="flaticon-wireframe color--theme"></span>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Icon -->
                                <!-- Text -->
                                <div class="fbox-txt">
                                    <h6 class="s-22 w-700 ">1 HR Development Planner</h6>
                                    <p class="">1 HR development planning tool. Automated summons.</p>
                                </div>
                            </div>
                        </div>
                        <!-- END FEATURE BOX #4 -->
                        <!-- FEATURE BOX #5 -->
                        <div class="col">
                            <div class="fbox-11 fb-5 wow fadeInUp">
                                <!-- Icon -->
                                <div class="fbox-ico-wrap">
                                    <div class="fbox-ico ico-50">
                                        <div class="shape-ico">
                                            <!-- Vector Icon -->
                                            <span class="flaticon-play color--theme"></span>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Icon -->
                                <!-- Text -->
                                <div class="fbox-txt">
                                    <h6 class="s-22 w-700 ">1ClickToPlay</h6>
                                    <p class="">The new Integrated Presentation Technology (IPT). Project
                                        progress to your team or superiors with 1 click, 0 minutes of preparation and 0
                                        PowerPoint.</p>
                                </div>
                            </div>
                        </div>
                        <!-- END FEATURE BOX #5 -->
                        <!-- FEATURE BOX #6 -->
                        <div class="col">
                            <div class="fbox-11 fb-6 wow fadeInUp">
                                <!-- Icon -->
                                <div class="fbox-ico-wrap">
                                    <div class="fbox-ico ico-50">
                                        <div class="shape-ico">
                                            <!-- Vector Icon -->
                                            <span class="flaticon-suit color--theme"></span>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Icon -->
                                <!-- Text -->
                                <div class="fbox-txt">
                                    <h6 class="s-22 w-700 ">Customer Success Managers</h6>
                                    <p class="">Managers dedicated to customer success. Facilitation of
                                        implementation of A4ManagementTools.</p>
                                </div>
                            </div>
                        </div>
                        <!-- END FEATURE BOX #6 -->
                        <!-- FEATURE BOX #7 -->
                        <div class="col">
                            <div class="fbox-11 fb-7 wow fadeInUp">
                                <!-- Icon -->
                                <div class="fbox-ico-wrap">
                                    <div class="fbox-ico ico-50">
                                        <div class="shape-ico">
                                            <!-- Vector Icon -->
                                            <span class="flaticon-bookmark color--theme"></span>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Icon -->
                                <!-- Text -->
                                <div class="fbox-txt">
                                    <h6 class="s-22 w-700 ">4 Postgraduate Training</h6>
                                    <p class="">70% tool practice, 30% theory. Comparison of managers with 10+
                                        years of experience. In partnership with the Swiss University of Applied
                                        Sciences (SUP).</p>
                                </div>
                            </div>
                        </div>
                        <!-- END FEATURE BOX #7 -->
                        <!-- FEATURE BOX #8 -->
                        <div class="col">
                            <div class="fbox-11 fb-8 wow fadeInUp">
                                <!-- Icon -->
                                <div class="fbox-ico-wrap">
                                    <div class="fbox-ico ico-50">
                                        <div class="shape-ico">
                                            <!-- Vector Icon -->
                                            <span class="flaticon-idea color--theme"></span>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Icon -->
                                <!-- Text -->
                                <div class="fbox-txt">
                                    <h6 class="s-22 w-700 ">5000+ Ghost Advice</h6>
                                    <p class="">Recommendations. Instructions, advanced techniques, risks and
                                        remedies, insights and common mistakes to avoid.</p>
                                </div>
                            </div>
                        </div>
                        <!-- END FEATURE BOX #8 -->
                        <!-- FEATURE BOX #9 -->
                        <div class="col">
                            <div class="fbox-11 fb-9 wow fadeInUp">
                                <!-- Icon -->
                                <div class="fbox-ico-wrap">
                                    <div class="fbox-ico ico-50">
                                        <div class="shape-ico">
                                            <!-- Vector Icon -->
                                            <span class="flaticon-search-engine-1 color--theme"></span>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Icon -->
                                <!-- Text -->
                                <div class="fbox-txt">
                                    <h6 class="s-22 w-700 ">5000+ AI Insights</h6>
                                    <p class="">How-to tips and contents enabled by artificial intelligence
                                        and approved by our consultants.</p>
                                </div>
                            </div>
                        </div>
                        <!-- END FEATURE BOX #9 -->
                    </div>
                    <!-- End row -->
                </div>
            </div>
            <!-- END FEATURES-11 WRAPPER -->
        </div>
        <!-- End container -->
    </section>
    <!-- END FEATURES-11 -->
    <!-- DIVIDER LINE -->
    <hr class="divider" />
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
#features-11 {
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: visible;
}

#features-11::before {
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
    z-index: -1;
}

.glass-effect {
    position: relative;
    background-color: rgba(255, 255, 255, 0.85);

    /* Compatibilità con browser WebKit */
    padding: 20px;
    border-radius: 12px;
    /* Bordo leggermente trasparente */
}

/* Mantieni i colori del testo e delle icone in bianco */
p,
.fbox-ico span {
    color: rgb(67, 72, 85);
}

.search-input {
    width: 90%;
    margin-bottom: 2rem;
}

.fbox-11 {
    margin: 20px;
}
</style>