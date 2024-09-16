<template>
    <section id="pricing-1" class="gr--whitesmoke pb-40 inner-page-hero pricing-section">
        <div class="container">
            <!-- SECTION TITLE -->
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-8">
                    <div class="section-title mb-70">
                        <!-- Title -->
                        <h2 class="s-52 w-700 text-white">Simple Pricing</h2>
                        <!-- TOGGLE BUTTON -->
                        <div class="toggle-btn ext-toggle-btn toggle-btn-md mt-30">
                            <!-- <span class="toggler-txt">Billed monthly</span> -->
                            <!-- <label class="switch-wrap">
                                <input type="checkbox" id="checbox" @change="togglePrices" />
                                <span class="switcher bg--grey switcher--theme">
                                    <span class="show-annual"></span>
                                    <span class="show-monthly"></span>
                                </span>
                            </label> -->
                            <!-- <span class="toggler-txt">Billed yearly</span> -->
                            <!-- Text -->
                            <p class=" text-white">An ecosystem for the entire company, try it for free with
                                your team!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END SECTION TITLE -->
            <!-- PRICING TABLES -->
            <div class="pricing-1-wrapper">
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <!-- STARTER PLAN -->
                    <div class="col">
                        <div id="pt-1-1"
                            class="p-table pricing-1-table bg--white-100 block-shadow r-12 d-flex flex-column">
                            <!-- TABLE HEADER -->
                            <div class="pricing-table-header">
                                <!-- Title -->
                                <h5 class="s-24 w-700">Starter Plan</h5>

                                <!-- Button -->
                                <a href="`/contacts?subject=offer`"
                                    class="pt-btn btn r-04 btn--theme hover--theme mt-3">Offer</a>
                                <!-- Price -->
                                <!-- <div class="price mt-3">
                                    <sup class="color--black">CHF</sup>
                                    <span class="color--black price">13.99</span>
                                    <sup class="validity color--grey">&nbsp;/&ensp;20 Tools</sup>
                                    <p class="color--grey m-0">CHF 23.99 / 40 Tools to choose</p>
                                    <p class="color--grey m-0">CHF 33.99 / 60 Tools to choose</p>
                                    <p class="color--grey m-0">CHF 39.99 / 80 Tools to choose</p>
                                    <p class="color--grey m-0">by month, up to 100 licenses</p>
                                </div> -->
                            </div>
                            <!-- END TABLE HEADER -->
                            <!-- PRICING FEATURES -->
                            <ul class="pricing-features color--black ico-10 ico--green mt-25 flex-grow-1"
                                style="font-size: 14px;">
                                <li>
                                    <p><span class="flaticon-check"></span> 80+ A4ManagementTools</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> 80+ Student didactic material kit</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> 5000+ AI Insights</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> 5000+ Ghost Advice</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> 100+ Toolchains</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Free extension to guests</p>
                                </li>
                                <li class="mt-5 disabled-option">
                                    <p> Others:</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Full configuration</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Ownership of own content</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Bulk user import</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Change tools after purchase</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Onboarding Starter Kit</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Hidden A4ManagementTools</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Inspiration Board</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Overview Board</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Notifications</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Permissions and visibility</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> User preferences</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Privacy, encryption, and compliance</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Secure Socket Layer: SSL / TLS</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> 99% uptime and monitoring</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Certified cloud hosting</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> User feedback</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Unwanted traffic protection</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Account migration</p>
                                </li>
                                <li class="disabled-option mt-4">
                                    <p>Upon request:</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> 4+ Postgraduate trainings</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Posters</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Discount for NGOs and Universities</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Referrals and promotions</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- END STARTER PLAN -->
                    <!-- BASIC PLAN -->
                    <div class="col">
                        <div id="pt-1-2"
                            class="p-table pricing-1-table bg--white-100 block-shadow r-12 d-flex flex-column">
                            <!-- TABLE HEADER -->
                            <div class="pricing-table-header">
                                <!-- Title -->
                                <h5 class="s-24">Scaling</h5>
                                <!-- Button -->
                                <a href="`/contacts?subject=offer`"
                                    class="pt-btn btn r-04 btn--theme hover--theme mt-3">Offer</a>
                                <!-- Price -->
                                <!-- <div class="price mt-3"> -->
                                <!-- Monthly Price -->
                                <!-- <div class="price2" v-if="showPrice2">
                                        <sup class="color--black">CHF</sup>
                                        <span class="color--black price"></span>
                                        <sup class="validity color--grey">&nbsp;/&ensp;mo</sup>
                                    </div> -->
                                <!-- Yearly Price -->
                                <!-- Text -->
                                <!-- <p class="color--grey m-0">for each user, by month.</p> -->
                                <!-- </div> -->
                            </div>
                            <!-- END TABLE HEADER -->
                            <!-- PRICING FEATURES -->
                            <ul class="pricing-features color--black ico-10 ico--green mt-25 flex-grow-1"
                                style="font-size: 14px;">
                                <li>
                                    <p><span class="flaticon-check"></span> 150+ hours of Training</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Kit for Superusers</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Group training and Practice</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Certificates of Expertise</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Collaborators' motivation video call</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> 200+ Application Examples</p>
                                </li>
                                <li class="disabled-option mt-4">
                                    <p>Upon request:</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Single Sign On</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Multi-factor authentication</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Multilingual</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Collaborate in team</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Online shop</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Chat</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- END BASIC PLAN -->
                    <!-- ADVANCED PLAN -->
                    <div class="col">
                        <div id="pt-1-3"
                            class="p-table pricing-1-table bg--white-100 block-shadow r-12 d-flex flex-column">
                            <!-- TABLE HEADER -->
                            <div class="pricing-table-header">
                                <!-- Title -->
                                <h5 class="s-24">Advanced</h5>
                                <!-- Button -->
                                <a href="`/contacts?subject=offer`"
                                    class="pt-btn btn r-04 btn--theme hover--theme mt-3">Offer</a>
                                <!-- Price -->
                                <!-- <div class="price mt-3"> -->
                                <!-- Monthly Price -->
                                <!-- <div class="price2" v-if="showPrice2"> -->
                                <!-- <sup class="color--black">CHF</sup>
                                        <span class="color--black price"></span> -->
                                <!-- <sup class="validity color--grey">&nbsp;/&ensp;mo</sup> -->
                                <!-- </div> -->
                                <!-- Yearly Price -->
                                <div class="price1" v-if="showPrice1">
                                    <!-- <sup class="color--black">$</sup>
                                        <span class="color--black">194.99</span>
                                        <sup class="validity color--grey">&nbsp;/&ensp;yr</sup> -->
                                    <!-- Discount Badge -->
                                    <!-- <div class="pricing-discount bg--yellow-400 color--black r-36">
                                            <h6 class="s-17">Save 35%</h6>
                                        </div> -->
                                </div>
                                <!-- Text -->
                                <!-- <p class="color--grey m-0">for each user, by month.
                                    </p>
                                    <p class="color--grey m-0">Pro services are included.
                                    </p> -->
                                <!-- </div> -->
                            </div>
                            <!-- END TABLE HEADER -->
                            <!-- PRICING FEATURES -->
                            <ul class="pricing-features color--black ico-10 ico--green mt-25 flex-grow-1"
                                style="font-size: 14px;">
                                <li>
                                    <p><span class="flaticon-check"></span> 1 ClickToPlay</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> 80+ A4ManagementTools compiled by AI</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> 1 HR planning tool</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Certified distribution of generated content
                                    </p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> 80+ Teachers training kit</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Synchronization of assignments</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Activity log</p>
                                </li>
                                <li class="disabled-option mt-4">
                                    <p>Upon Request:</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> 1 Customer Success Manager</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Drip contents</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Track your progess</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Pre-launch review</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Data migration service</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Chatbot support</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Sandbox</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Lessons completion required</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Transfer verification</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <!-- END ADVANCED PLAN -->
                    <!-- ADVANCED PLAN -->
                    <div class="col">
                        <div id="pt-1-3"
                            class="p-table pricing-1-table bg--white-100 block-shadow r-12 d-flex flex-column">
                            <!-- TABLE HEADER -->
                            <div class="pricing-table-header">
                                <!-- Title -->
                                <h5 class="s-24">Enterprise</h5>
                                <!-- Button -->
                                <a href="`/contacts?subject=offer`"
                                    class="pt-btn btn r-04 btn--theme hover--theme mt-3">Offer</a>

                            </div>
                            <!-- END TABLE HEADER -->
                            <!-- PRICING FEATURES -->
                            <ul class="pricing-features color--black ico-10 ico--green mt-25 flex-grow-1"
                                style="font-size: 14px;">
                                <li>
                                    <p><span class="flaticon-check"></span> 1 Global self-assessment</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> 1 Process self-assessment</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Constant contact</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> MyA4ManagementTools</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Multi-layers for complex cases</p>
                                </li>
                                <li>
                                    <p><span class="flaticon-check"></span> Organization' Health Monitoring</p>
                                </li>
                                <li class="disabled-option mt-4">
                                    <p>Others:</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Interface with owned software</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> DMS interface</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Communication Vitality Index</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> User progress report</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Deluxe catalog</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Webhooks</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Bulk emails</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> API</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Customizable domains</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> CSS / HTML editing</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Add your brand</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Additional landing page</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Links to custom sites</p>
                                </li>
                                <li class="disabled-option">
                                    <p><span class="flaticon-check"></span> Stand-alone software</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- END ADVANCED PLAN -->
                </div>
            </div>
            <!-- PRICING TABLES -->
        </div>
        <!-- End container -->
    </section>
</template>

<script>
export default {
    data() {
        return {
            showPrice1: false,
            showPrice2: true
        };
    },
    methods: {
        togglePrices() {
            this.showPrice1 = !this.showPrice1;
            this.showPrice2 = !this.showPrice2;
        }
    }
};
</script>
<style scoped>
li p {
    font-size: 13px;
}

sup {
    font-size: 20px;
}

.price-big {
    font-size: 38px;
}

.pricing-features li {
    padding: 5px 8px;
}

.price span {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 2rem;
    line-height: 1;
    font-weight: 600;
    letter-spacing: -2px;
}

.price sup.validity {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.7rem;
    font-weight: 400;
    top: -2px;
    left: 0;
}

.price p {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 0.6rem;
}

#pricing-1 {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    background-image: url(../../../assets/images/main_background.jpeg);
    /* Background image */
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}

#pricing-1::after {
    content: "";
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
</style>
