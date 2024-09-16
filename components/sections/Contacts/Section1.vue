<template>
    <section id="contacts-1" class="pb-50 inner-page-hero contacts-section division">
        <div class="container">
            <!-- FEEDBACK MESSAGE -->
            <div v-if="feedbackMessage" :class="['feedback-message', feedbackClass]" class="text-center mb-4">
                <h1>{{ feedbackMessage }}</h1>
            </div>
            <!-- SECTION TITLE -->
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-9">
                    <div class="section-title text-center mb-80">
                        <!-- Title -->
                        <h2 class="s-52 w-700">Questions? Let's Talk</h2>
                        <!-- Text -->
                        <p class="p-lg">Want to learn more about A4ManagementTools, get a quote, or speak with an
                            expert? Let us know what you are looking for and we’ll get back to you right away</p>
                    </div>
                </div>
            </div>
            <!-- CONTACT FORM -->
            <div class="row justify-content-center">
                <div class="col-md-11 col-lg-10 col-xl-8">
                    <div class="form-holder">
                        <form @submit.prevent="handleSubmit" name="contactform" class="row contact-form"
                            autocomplete="on">
                            <!-- Form Select -->
                            <div class="col-md-12 input-subject">
                                <p class="p-lg">This question is about:</p>
                                <span>Choose a topic, so we know who to send your request to: </span>
                                <select required v-model="form.subject" class="form-select subject"
                                    aria-label="Default select example" autocomplete="off">
                                    <option selected>This question is about...</option>
                                    <option value="subscribe">Subscribe me to receive a case study, articles and news
                                        before the public.
                                    </option>
                                    <option value="quotation">I would like a quotation.</option>
                                    <option value="assessment">I would like to assess my organisation and establish an
                                        action plan.
                                    </option>
                                    <option value="candidate">I would like to candidate myself as an Associate Success
                                        Manager / Partner.
                                    </option>
                                    <option value="request">I am a customer. I have a request.
                                    </option>
                                    <option value="other">Other...</option>
                                </select>
                            </div>
                            <!-- Contact Form Input -->
                            <div class="col-md-12">
                                <p class="p-lg">Your Name:</p>
                                <span>Please enter your real name: </span>
                                <input required v-model="form.name" type="text" name="name" class="form-control name"
                                    placeholder="Your Name*" autocomplete="name" />
                            </div>
                            <div class="col-md-12">
                                <p class="p-lg">Your Professional Email Address:</p>
                                <span>We do not accept personal e-mail addresses.</span>
                                <input required v-model="form.email" type="text" name="email" class="form-control email"
                                    placeholder="Email Address*" autocomplete="email" />
                            </div>
                            <div class="col-md-12">
                                <p class="p-lg">Your Phone Number:</p>
                                <span>Please include your country code (Ex. +41)</span>
                                <input required v-model="form.tel" type="tel" name="tel" class="form-control phone"
                                    placeholder="+41 ## ### ## ##" autocomplete="tel" />
                            </div>
                            <div class="col-md-12">
                                <p class="p-lg">Organization Name:</p>
                                <span>Please enter your organization name: </span>
                                <input v-model="form.company" type="text" name="company" class="form-control company"
                                    placeholder="Organization Name" autocomplete="organization" />
                            </div>
                            <!-- Form Select -->
                            <div class="col-md-12 input-subject">
                                <p class="p-lg">Number of collaborators</p>
                                <span>Choose a range, so we know what is best suited for you: </span>
                                <select v-model="form.employees" class="form-select subject"
                                    aria-label="Default select example" autocomplete="off">
                                    <option selected disabled>Number of Employees...</option>
                                    <option value="<10">
                                        < 10</option>
                                    <option value="<50">
                                        < 50</option>
                                    <option value="<100">
                                        < 100</option>
                                    <option value="<200">
                                        < 200</option>
                                    <option value="<500">
                                        < 500</option>
                                    <option value="<1000">
                                        < 1000</option>
                                    <option value="<9999">
                                        < 9999</option>
                                    <option value=">10000">> 10'000</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <p class="p-lg">Explain your question in details:</p>
                                <span>Be VERY precise so we can help you super fast.</span>
                                <textarea v-model="form.message" class="form-control message" name="message" rows="6"
                                    placeholder="" autocomplete="off"></textarea>
                            </div>
                            <div class="col-md-12">
                                <div class="form-check">
                                    <input v-model="form.checkbox" class="form-check-input" type="checkbox"
                                        id="flexCheckDefault" checked>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Yes, I would like to receive a case study, articles and news before the public.
                                    </label>
                                </div>
                            </div>
                            <!-- Contact Form Button -->
                            <div class="col-md-12 mt-15 form-btn text-right">
                                <button type="submit" class="btn btn--theme hover--theme submit">Submit Request</button>
                            </div>
                            <div class="contact-form-notice">
                                <p class="p-sm">We are committed to your privacy. A4ManagementTools uses the information
                                    you provide us to contact you about our relevant content, products, and services.
                                    You may unsubscribe from these communications at any time. For more information,
                                    check out our <NuxtLink to="/privacy">Privacy Policy</NuxtLink>.</p>
                            </div>
                            <!-- Contact Form Message -->
                            <div class="col-lg-12 contact-form-msg">
                                <span class="loading"></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END CONTACT FORM -->
        </div>
        <!-- End container -->
    </section>
    <hr class="divider" />
</template>

<script>
export default {
    data() {
        return {
            form: {
                subject: this.$route.query.subject || '', // Precompila il subject con il valore dalla query string
                name: '',
                email: this.$route.query.email || '', // Precompila il campo email se presente nella query string
                tel: '',
                company: '',
                employees: '',
                message: '',
                checkbox: true,
            },
            feedbackMessage: '',
            feedbackClass: ''  // Aggiungi una variabile per la classe del messaggio di feedback
        };
    },
    methods: {
        async handleSubmit() {
            try {
                console.log(this.form); // Aggiungi questo per vedere cosa stai inviando

                const domainBlacklist = [
                    'gmail', 'google', 'yahoo', 'hotmail', 'outlook', 'live', 'aol', 'icloud', 'mail', 'protonmail',
                    'yandex', 'gmx', 'zoho', 'inbox', 'me', 'mac', 'msn', 'aim', 'rediffmail', 'lycos',
                    'comcast', 'sbcglobal', 'frontier', 'verizon', 'att', 'charter', 'optonline',
                    'rocketmail', 'fastmail', 'hushmail', 'btinternet',
                ];

                // Estrai il dominio dell'email e controlla il dominio principale (prima del punto)
                const emailDomain = this.form.email.split('@')[1].toLowerCase();
                const domainBase = emailDomain.split('.')[0]; // Prende la parte prima del primo "."

                if (domainBlacklist.includes(domainBase)) {
                    this.feedbackMessage = 'Please use a professional or company email address.';
                    this.feedbackClass = 'text-danger';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                }

                const formData = new FormData();
                formData.append('subject', this.form.subject);
                formData.append('name', this.form.name);
                formData.append('email', this.form.email);
                formData.append('tel', this.form.tel);
                formData.append('company', this.form.company);
                formData.append('employees', this.form.employees);
                formData.append('message', this.form.message);
                formData.append('checkbox', this.form.checkbox ? 1 : 0); // Converti booleano in intero

                // const response = await fetch('http://127.0.0.1:8000/api/contact', {
                //     method: 'POST',
                //     body: formData,
                // });

                const response = await fetch('https://antiquewhite-squid-521659.hostingersite.com/api/contact', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Validation Errors:', errorData.errors);
                    this.feedbackMessage = 'Validation failed. Please check your input.';
                    this.feedbackClass = 'text-danger';  // Aggiungi una classe per errore
                } else {
                    const data = await response.json();
                    this.feedbackMessage = data.message;
                    this.feedbackClass = 'text-success';  // Aggiungi una classe per successo
                    this.resetForm();
                }

                // Scroll to top of the page
                window.scrollTo({ top: 0, behavior: 'smooth' });

            } catch (error) {
                console.error('Error:', error);
                this.feedbackMessage = 'An error occurred. Please try again later.';
                this.feedbackClass = 'text-danger';  // Aggiungi una classe per errore
                window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to top on error as well
            }
        },
        resetForm() {
            this.form.subject = '';
            this.form.name = '';
            this.form.email = '';
            this.form.tel = '';
            this.form.company = '';
            this.form.employees = '';
            this.form.message = '';
            this.form.checkbox = true;
        }
    }
}
</script>

<style>
.feedback-message.text-success h1 {
    color: green;
}

.feedback-message.text-danger h1 {
    color: red;
}
</style>
