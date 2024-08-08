<template>
    <section id="contacts-1" class="pb-50 inner-page-hero contacts-section division">
        <div class="container">
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
                        <form name="contactform" class="row contact-form">
                            <!-- Form Select -->
                            <div class="col-md-12 input-subject">
                                <p class="p-lg">This question is about:</p>
                                <span>Choose a topic, so we know who to send your request to: </span>
                                <select class="form-select subject" aria-label="Default select example">
                                    <option selected>This question is about...</option>
                                    <option>I would like a quotation</option>
                                    <option>I would like to assess my organisation and establish an action plan.
                                    </option>
                                    <option>I would like to candidate myself as an Associate Success Manager / Partner.
                                    </option>
                                    <option>I am a customer. I have a request.
                                    </option>
                                    <option>Other...</option>
                                </select>
                            </div>
                            <!-- Contact Form Input -->
                            <div class="col-md-12">
                                <p class="p-lg">Your Name:</p>
                                <span>Please enter your real name: </span>
                                <input type="text" name="name" class="form-control name" placeholder="Your Name*" />
                            </div>
                            <div class="col-md-12">
                                <p class="p-lg">Your Professional Email Address:</p>
                                <span>We do not accept personal e-mail addresses.</span>
                                <input type="text" name="email" class="form-control email"
                                    placeholder="Email Address*" />
                            </div>
                            <div class="col-md-12">
                                <p class="p-lg">Your Phone Number:</p>
                                <span>Please include your country code (Ex. +41)</span>
                                <input type="tel" name="tel" class="form-control phone"
                                    placeholder="+41 ## ### ## ##" />
                            </div>
                            <div class="col-md-12">
                                <p class="p-lg">Organization Name:</p>
                                <span>Please enter your organization name: </span>
                                <input type="text" name="company" class="form-control company"
                                    placeholder="Organization Name" />
                            </div>
                            <!-- Form Select -->
                            <div class="col-md-12 input-subject">
                                <p class="p-lg">Number of collaborators</p>
                                <span>Choose a range, so we know what is best suited for you: </span>
                                <select class="form-select subject" aria-label="Default select example">
                                    <option selected disabled>Number of Employees...</option>
                                    <option>
                                        < 10 </option>
                                    <option>
                                        < 50</option>
                                    <option>
                                        < 100</option>
                                    <option>
                                        < 200</option>
                                    <option>
                                        < 500</option>
                                    <option>
                                        < 1000</option>
                                    <option>
                                        < 9999</option>
                                    <option> > 10'000</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <p class="p-lg">Explain your question in details:</p>
                                <span>Be VERY precise so we can help you super fast.</span>
                                <textarea class="form-control message" name="message" rows="6"
                                    placeholder=""></textarea>
                            </div>
                            <div class="col-md-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="flexCheckDefault" checked>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Yes, I would like to know what happens in before the public.
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
