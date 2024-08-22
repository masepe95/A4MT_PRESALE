import { resolve } from "path";

export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, "/")
    },
    app: {
        head: {
            meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
            title: "A4ManagementTools",
            script: []
        }
    },
    css: [
        "~/assets/css/vendors/bootstrap.min.css",
        "~/assets/css/vendors/flaticon.css",
        "~/assets/css/vendors/menu.css",
        "~/assets/css/vendors/fade-down.css",
        "~/assets/css/vendors/magnific-popup.css",
        "~/assets/css/vendors/animate.css",
        "~/assets/css/main.scss",
        "~/assets/css/responsive.scss",
        "~/assets/css/color-scheme/blue.scss",
        "~/assets/css/color-scheme/crocus.scss",
        "~/assets/css/color-scheme/green.scss",
        "~/assets/css/color-scheme/magenta.scss",
        "~/assets/css/color-scheme/pink.scss",
        "~/assets/css/color-scheme/skyblue.scss",
        "~/assets/css/color-scheme/violet.scss",
    ],
    modules: [
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Rubik: {
                        wght: [300, 400, 500, 600, 700]
                    },
                    "Plus+Jakarta+Sans": {
                        wght: [400, 500, 600, 700]
                    },
                    Inter: {
                        wght: [400, 500, 600, 700, 800]
                    },
                    download: true,
                    inject: true
                }
            }
        ],
        "nuxt-swiper",
        '@nuxtjs/google-gtag', // Aggiunto modulo per Google Analytics
    ],
    'google-gtag': {
        id: 'G-GG7P21F453', // Sostituisci con il tuo Measurement ID di Google Analytics
        config: {
            anonymize_ip: true, // Anonimizza gli IP
            send_page_view: true, // Invia la visualizzazione di pagina iniziale
        },
        debug: false, // Imposta su true per debug durante lo sviluppo
    },
    plugins: [
        '~/plugins/bootstrap.client.js',
        '~/plugins/wow.client.js',
        '~/plugins/v-click-outside.js',
    ]
});
