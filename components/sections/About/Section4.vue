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
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" width="560" height="315"
                                src="https://www.youtube.com/embed/4v-PWQDcqgQ?si=8HlDeaCbgapdJpuZ&rel=0&controls=0&modestbranding=1&showinfo=0"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End row -->
        </div>
        <!-- End container -->
    </section>
</template>
<style scoped>
.embed-responsive {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;
}

.embed-responsive::before {
    content: "";
    display: block;
    padding-top: 56.25%;
    /* 16:9 ratio */
}

.embed-responsive .embed-responsive-item {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>
