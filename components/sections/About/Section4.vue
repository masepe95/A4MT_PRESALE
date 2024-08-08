<template>
    <section class="bg--04 bg--fixed py-100 ct-01 content-section division">
        <div class="container">
            <div class="row d-flex align-items-center">
                <!-- TEXT BLOCK -->
                <div class="col-md-6 order-last order-md-2">
                    <div class="txt-block left-column wow fadeInRight">
                        <!-- Section ID -->
                        <span class="section-id">Founder at Marco Cerulli Consulting</span>
                        <!-- Title -->
                        <h2 class="s-50 w-700">Marco Cerulli</h2>
                        <!-- Text -->
                        <p class="p-lg">&quot;A4ManagementTools is a service of Marco Cerulli Consulting, a Swiss
                            business management strategy organization. We have been offering A4ManagementTools in
                            many organizations since 2016. Since 2018, they have been part of the Master's program
                            for executive officers in the administration of the Canton of Ticino and the Swiss
                            University of Applied Science (SUP) postgraduate education.&quot;</p>
                    </div>
                </div>
                <!-- END TEXT BLOCK -->
                <!-- IMAGE BLOCK -->
                <div class="col-md-6 order-first order-md-2">
                    <div class="img-block j-img video-preview right-column wow fadeInLeft">
                        <!-- Play Icon -->
                        <ElementsVideoModal :link="'https://www.youtube.com/embed/4v-PWQDcqgQ?si=9goFFoHEoxyfnC14'">
                            <template v-slot:button>
                                <div class="video-btn video-btn-xl bg--theme">
                                    <div class="video-block-wrapper"><span class="flaticon-play-button"></span></div>
                                </div>
                            </template>
                        </ElementsVideoModal>
                        <!-- Preview Image -->
                        <img class="img-fluid r-20" src="/assets/images/marco-cerulli.png" alt="video-preview" />
                    </div>
                </div>
            </div>
            <!-- End row -->
        </div>
        <!-- End container -->
    </section>
</template>
