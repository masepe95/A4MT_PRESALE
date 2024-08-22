<template>
    <div id="main-menu" class="wsmainfull menu clearfix">
        <div class="wsmainwp clearfix">
            <!-- HEADER BLACK LOGO -->
            <div class="desktoplogo">
                <NuxtLink to="/" class="logo-black"><img src="/assets/images/A4MT-logo-small.png" alt="logo" />
                </NuxtLink>
            </div>
            <!-- HEADER WHITE LOGO -->
            <div class="desktoplogo">
                <NuxtLink to="/" class="logo-white"><img src="/assets/images/A4MT-logo-small.png" alt="logo" />
                </NuxtLink>
            </div>
            <!-- MAIN MENU -->
            <nav class="wsmenu clearfix">
                <ul class="wsmenu-list nav-theme">
                    <!-- SIMPLE NAVIGATION LINK -->
                    <li class="nl-simple" aria-haspopup="true">
                        <NuxtLink to="/about" class="h-link" @click="handleLinkClick">About</NuxtLink>
                    </li>
                    <li class="nl-simple" aria-haspopup="true">
                        <NuxtLink to="/solutions" class="h-link" @click="handleLinkClick">Solutions</NuxtLink>
                    </li>
                    <li class="nl-simple" aria-haspopup="true">
                        <NuxtLink to="/benefits" class="h-link" @click="handleLinkClick">Benefits</NuxtLink>
                    </li>
                    <li class="nl-simple" aria-haspopup="true">
                        <NuxtLink to="/pricing-1" class="h-link" @click="handleLinkClick">Prices</NuxtLink>
                    </li>
                    <li class="nl-simple" aria-haspopup="true">
                        <NuxtLink to="/contacts" class="h-link" @click="handleLinkClick">Contact</NuxtLink>
                    </li>
                    <li class="nl-simple reg-fst-link mobile-last-link" aria-haspopup="true">
                        <NuxtLink to="/login-2" class="h-link" @click="handleLinkClick">Sign in</NuxtLink>
                    </li>
                    <!-- LANGUAGE SELECTOR -->
                    <li class="nl-simple" aria-haspopup="true">
                        <div class="language-selector" ref="languageDropdown">
                            <button @click="toggleLanguageDropdown" class="h-link">English &#9662;</button>
                            <ul v-if="isLanguageDropdownOpen" class="language-dropdown">
                                <li @click="closeLanguageDropdown">
                                    <NuxtLink to="https://ita.a4managementtools.com">Italiano</NuxtLink>
                                </li>
                                <li class="disabled">Français</li>
                                <li class="disabled">Deutsch</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isLanguageDropdownOpen = ref(false);
const languageDropdown = ref(null);

const toggleLanguageDropdown = (event) => {
    isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value;
    if (languageDropdown.value) {
        languageDropdown.value.classList.toggle('open', isLanguageDropdownOpen.value);
    }
    event.stopPropagation();
};

const closeLanguageDropdown = () => {
    isLanguageDropdownOpen.value = false;
    if (languageDropdown.value) {
        languageDropdown.value.classList.remove('open');
    }
};

const handleClickOutside = (event) => {
    if (languageDropdown.value && !languageDropdown.value.contains(event.target)) {
        closeLanguageDropdown();
    }
};

const handleScroll = () => {
    const menu = document.getElementById("main-menu");
    const header = document.getElementById("header");
    if (window.pageYOffset > 100) {
        menu.classList.add("scroll");
        if (header) {
            header.classList.add("scroll");
        }
    } else {
        menu.classList.remove("scroll");
        if (header) {
            header.classList.remove("scroll");
        }
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
    window.removeEventListener("scroll", handleScroll);
});
</script>


<style scoped>
/* Stile per il contenitore del selettore di lingua */
.language-selector {
    position: relative;
    display: inline-block;
    color: white;
    padding-top: 11px;
}

/* Stile per il bottone del selettore di lingua */
.language-selector .h-link {
    background: none;
    border: none;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    padding: 10px 15px;
    text-decoration: none;
    transition: color 0.3s ease;
}

/* Dropdown del selettore di lingua */
.language-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #333;
    border-radius: 4px;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    list-style: none;
    min-width: 140px;
    z-index: 9999;
    font-family: inherit;
}

/* Stato aperto del dropdown */
.language-selector.open .language-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* Stile dei link all'interno del dropdown */
.language-dropdown li a {
    display: block;
    padding: 10px 15px;
    cursor: pointer;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.language-dropdown li.disabled {
    color: #ccc;
    cursor: default;
    padding: 10px 15px;
}

/* Stile per lo scroll */
.scroll {
    background-color: rgba(0, 0, 0, 0.8);
    /* Esempio: cambia lo sfondo del menu e dell'header */
    transition: background-color 0.3s ease, padding 0.3s ease;
}

#main-menu.scroll {
    padding: 10px 0;
    /* Riduce il padding quando si scrolla */
}

#header.scroll {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    /* Aggiunge un'ombra per separare l'header dal contenuto */
}

/* Cambia il colore del testo quando il menu è in stato di scroll */
#main-menu.scroll .h-link {
    color: rgb(71, 71, 71);
    /* Cambia il colore del testo in bianco (o qualsiasi colore preferito) */
}

#main-menu.scroll .language-selector .h-link {
    color: rgb(71, 71, 71);
    /* Assicura che il colore del testo del selettore di lingua sia coerente con gli altri link */
}

/* Modalità mobile */
@media (max-width: 768px) {
    .language-selector .h-link {
        color: black;
    }

    .language-dropdown {
        position: static;
        background-color: white;
        border: none;
        padding: 0;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    .language-dropdown li a {
        color: black;
        padding: 10px;
    }

    .language-dropdown li a:hover {
        background-color: #f0f0f0;
    }

    .language-selector {
        margin-top: 10px;
    }
}

a:hover {
    color: white !important;
    text-decoration: none;
}
</style>
