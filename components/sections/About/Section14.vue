<template>
    <section id="newsletter-1" class="newsletter-section">
        <div class="newsletter-overlay">
            <div class="container">
                <div class="row d-flex align-items-center row-cols-1 row-cols-lg-2">
                    <!-- NEWSLETTER TEXT -->
                    <div class="col">
                        <div class="newsletter-txt">
                            <h4 class="s-34 w-700">Receive a Case Study!
                            </h4>
                            <p class="p-lg">We commit to offering you concrete, immediately applicable value.</p>
                        </div>
                    </div>
                    <!-- NEWSLETTER FORM -->
                    <div class="col">
                        <form class="newsletter-form" @submit.prevent="handleSubmit">
                            <div class="input-group">
                                <input type="email" autocomplete="off" class="form-control"
                                    placeholder="Your email address" required v-model="email" />
                                <span class="input-group-btn">
                                    <button type="submit" class="btn btn--theme hover--theme">Subscribe Now</button>
                                </span>
                            </div>
                            <!-- Newsletter Form Notification -->
                            <label for="s-email" class="form-notification"></label>
                        </form>
                    </div>
                    <!-- END NEWSLETTER FORM -->
                </div>
                <!-- End row -->
            </div>
            <!-- End container -->
        </div>
        <!-- End newsletter-overlay -->
    </section>
    <!-- END NEWSLETTER-1 -->
    <!-- DIVIDER LINE -->
    <hr class="divider" />
</template>

<script>
export default {
    data() {
        return {
            email: ''
        };
    },
    methods: {
        handleSubmit() {
            if (this.email) {
                const encodedEmail = encodeURIComponent(this.email);
                // Aggiungi il valore del subject alla query string
                this.$router.push(`/contacts?email=${encodedEmail}&subject=subscribe`);
            }
        }
    }
}
</script>
