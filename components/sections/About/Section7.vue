<template>
    <section id="team-1" class="pt-100 team-section">
        <div class="container">
            <!-- SECTION TITLE -->
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-9">
                    <div class="section-title mb-80">
                        <!-- Title -->
                        <h2 class="s-50 w-700">All we do is dream and project amazing tools</h2>
                        <!-- Text -->
                        <p class="s-21 color--grey">We are passionate about transforming complex tasks into
                            ready-to-use, one-page tools.</p>
                    </div>
                </div>
            </div>
            <!-- TEAM MEMBERS WRAPPER -->
            <div class="team-members-wrapper">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    <!-- TEAM MEMBER #1 -->
                    <div class="col">
                        <div class="team-member mb-50 wow fadeInUp">
                            <!-- Team Member Photo -->
                            <div class="team-member-photo r-14">
                                <div class="hover-overlay">
                                    <img class="img-fluid" src="/assets/images/marco-cerulli-rit.png"
                                        alt="team-member-foto" />
                                    <div class="item-overlay"></div>
                                </div>
                            </div>
                            <!-- Team Member Data -->
                            <div class="team-member-data">
                                <h6 class="s-20 w-700 color--black">Marco Cerulli</h6>
                                <p class="color--grey">Founder and CEO</p>
                            </div>
                        </div>
                    </div>
                    <!-- END TEAM MEMBER #1 -->
                    <!-- TEAM MEMBER #2 -->
                    <div class="col">
                        <div class="team-member mb-50 wow fadeInUp">
                            <!-- Team Member Photo -->
                            <div class="team-member-photo r-14">
                                <div class="hover-overlay">
                                    <img class="img-fluid" src="/assets/images/marco-sepe-rit.png"
                                        alt="team-member-foto" />
                                    <div class="item-overlay"></div>
                                </div>
                            </div>
                            <!-- Team Member Data -->
                            <div class="team-member-data">
                                <h6 class="s-20 w-700 color--black">Marco Sepe</h6>
                                <p class="color--grey">IT Manager</p>
                            </div>
                        </div>
                    </div>
                    <!-- END TEAM MEMBER #2 -->
                    <!-- TEAM MEMBER #3 -->
                    <div class="col">
                        <div class="team-member mb-50 wow fadeInUp candidate-card" @click="redirectToCareers">
                            <!-- Team Member Photo -->
                            <div class="team-member-photo r-14">
                                <div class="hover-overlay">
                                    <img class="img-fluid" src="/assets/images/team-3.jpg" alt="team-member-foto" />
                                    <div class="item-overlay"></div>
                                </div>
                            </div>
                            <!-- Team Member Data -->
                            <div class="team-member-data">
                                <h6 class="s-20 w-700 color--black">Candidate</h6>
                                <p class="color--grey">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                    <!-- END TEAM MEMBER #3 -->
                    <!-- TEAM MEMBER #4 -->
                    <div class="col">
                        <div class="team-member mb-50 wow fadeInUp candidate-card" @click="redirectToCareers">
                            <!-- Team Member Photo -->
                            <div class="team-member-photo r-14">
                                <div class="hover-overlay">
                                    <img class="img-fluid" src="/assets/images/team-4.jpg" alt="team-member-foto" />
                                    <div class="item-overlay"></div>
                                </div>
                            </div>
                            <!-- Team Member Data -->
                            <div class="team-member-data">
                                <h6 class="s-20 w-700 color--black">Candidate</h6>
                                <p class="color--grey"> Associate Customer Success Manager</p>
                            </div>
                        </div>
                    </div>
                    <!-- END TEAM MEMBER #4 -->
                    <!-- TEAM MEMBER #5 -->
                    <div class="col">
                        <div class="team-member mb-50 wow fadeInUp candidate-card" @click="redirectToCareers">
                            <!-- Team Member Photo -->
                            <div class="team-member-photo r-14">
                                <div class="hover-overlay">
                                    <img class="img-fluid" src="/assets/images/team-5.jpg" alt="team-member-foto" />
                                    <div class="item-overlay"></div>
                                </div>
                            </div>
                            <!-- Team Member Data -->
                            <div class="team-member-data">
                                <h6 class="s-20 w-700 color--black">Candidate</h6>
                                <p class="color--grey"> Associate Customer Success Manager</p>
                            </div>
                        </div>
                    </div>
                    <!-- END TEAM MEMBER #5 -->
                    <!-- TEAM MEMBER #6 -->
                    <div class="col">
                        <div class="team-member mb-50 wow fadeInUp candidate-card" @click="redirectToCareers">
                            <!-- Team Member Photo -->
                            <div class="team-member-photo r-14">
                                <div class="hover-overlay">
                                    <img class="img-fluid" src="/assets/images/team-6.jpg" alt="team-member-foto" />
                                    <div class="item-overlay"></div>
                                </div>
                            </div>
                            <!-- Team Member Data -->
                            <div class="team-member-data">
                                <h6 class="s-20 w-700 color--black">Candidate</h6>
                                <p class="color--grey">Associate Promoter</p>
                            </div>
                        </div>
                    </div>
                    <!-- END TEAM MEMBER #6 -->
                    <!-- TEAM MEMBER #7 -->
                    <div class="col">
                        <div class="team-member mb-50 wow fadeInUp candidate-card" @click="redirectToCareers">
                            <!-- Team Member Photo -->
                            <div class="team-member-photo r-14">
                                <div class="hover-overlay">
                                    <img class="img-fluid" src="/assets/images/team-7.jpg" alt="team-member-foto" />
                                    <div class="item-overlay"></div>
                                </div>
                            </div>
                            <!-- Team Member Data -->
                            <div class="team-member-data">
                                <h6 class="s-20 w-700 color--black">Candidate</h6>
                                <p class="color--grey">Associate Promoter</p>
                            </div>
                        </div>
                    </div>
                    <!-- END TEAM MEMBER #7 -->
                    <!-- TEAM MEMBER #8 -->
                    <div class="col">
                        <div class="team-member mb-50 wow fadeInUp candidate-card" @click="redirectToCareers">
                            <!-- Team Member Photo -->
                            <div class="team-member-photo r-14">
                                <div class="hover-overlay">
                                    <img class="img-fluid" src="/assets/images/team-13.jpg" alt="team-member-foto" />
                                    <div class="item-overlay"></div>
                                </div>
                            </div>
                            <!-- Team Member Data -->
                            <div class="team-member-data">
                                <h6 class="s-20 w-700 color--black">Grow with Us!</h6>
                                <p class="color--grey"><a href="/careers">Careers</a></p>
                            </div>
                        </div>
                    </div>
                    <!-- END TEAM MEMBER #8 -->
                </div>
                <!-- End row -->
            </div>
            <!-- TEAM MEMBERS WRAPPER -->
            <!-- MORES BUTTON -->
            <div class="row">
                <div class="col">
                    <div class="more-btn text-center mt-20 wow fadeInUp">
                        <NuxtLink to="/careers" class="btn btn--tra-black hover--theme">Join our team</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <!-- End container -->
    </section>
</template>

<script>
export default {
    methods: {
        redirectToCareers() {
            this.$router.push('/careers');
        }
    }
}
</script>

<style>
.candidate-card {
    cursor: pointer;
}
</style>