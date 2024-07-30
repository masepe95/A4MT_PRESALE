<template>
    <div class="brands-carousel-5">
        <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="2" :loop="true" :autoplay="{
            delay: 2500,
            disableOnInteraction: true
        }" :breakpoints="{
            400: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            900: { slidesPerView: 4, },
            1024: { slidesPerView: 5, },
        }">
            <SwiperSlide>
                <div class="brand-logo">
                    <img class="img-fluid theme-light" src="/assets/images/migros.png" alt="brand-logo" />
                    <img class="img-fluid theme-dark" src="/assets/images/migros.png" alt="brand-logo" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="brand-logo">
                    <img class="img-fluid theme-light" src="/assets/images/canton-ticino.png" alt="brand-logo" />
                    <img class="img-fluid theme-dark" src="/assets/images/canton-ticino.png" alt="brand-logo" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="brand-logo">
                    <img class="img-fluid theme-light" src="/assets/images/citta-locarno.png" alt="brand-logo" />
                    <img class="img-fluid theme-dark" src="/assets/images/citta-locarno.png" alt="brand-logo" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="brand-logo">
                    <img class="img-fluid theme-light" src="/assets/images/hugo-boss.png" alt="brand-logo" />
                    <img class="img-fluid theme-dark" src="/assets/images/hugo-boss.png" alt="brand-logo" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="brand-logo">
                    <img class="img-fluid theme-light" src="/assets/images/sbb.png" alt="brand-logo" />
                    <img class="img-fluid theme-dark" src="/assets/images/sbb.png" alt="brand-logo" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="brand-logo">
                    <img class="img-fluid theme-light" src="/assets/images/ses.png" alt="brand-logo" />
                    <img class="img-fluid theme-dark" src="/assets/images/ses.png" alt="brand-logo" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="brand-logo">
                    <img class="img-fluid theme-light" src="/assets/images/supsi.png" alt="brand-logo" />
                    <img class="img-fluid theme-dark" src="/assets/images/supsi.png" alt="brand-logo" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="brand-logo">
                    <img class="img-fluid theme-light" src="/assets/images/la-posta.png" alt="brand-logo" />
                    <img class="img-fluid theme-dark" src="/assets/images/la-posta.png" alt="brand-logo" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="brand-logo">
                    <img class="img-fluid theme-light" src="/assets/images/logo-rsi.png" alt="brand-logo" />
                    <img class="img-fluid theme-dark" src="/assets/images/logo-rsi.png" alt="brand-logo" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="brand-logo">
                    <img class="img-fluid theme-light" src="/assets/images/logoAET.png" alt="brand-logo" />
                    <img class="img-fluid theme-dark" src="/assets/images/logoAET.png" alt="brand-logo" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div class="brand-logo">
                    <img class="img-fluid theme-light" src="/assets/images/supsi.png" alt="brand-logo" />
                    <img class="img-fluid theme-dark" src="/assets/images/supsi.png" alt="brand-logo" />
                </div>
            </SwiperSlide>

        </Swiper>
    </div>
</template>
<style scoped></style>