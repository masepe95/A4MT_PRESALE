<template>
    <transition name="modal">
        <div class="modal fade show" tabindex="-1" role="dialog" v-if="show">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-background"
                        :style="{ backgroundImage: `url(${tool && tool.image ? '/assets/images/' + tool.image : '/assets/images/A4XXX_Hidden_Banner.jpg'})` }">
                    </div>
                    <div class="modal-background-overlay"></div>
                    <div class="modal-overlay">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ tool ? tool.name : 'Tool Details' }}</h5>
                            <button type="button" class="btn-close" @click="closeModal"></button>
                        </div>
                        <div class="modal-body">
                            <nav v-if="tool">
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active font-weight-bold" id="nav-summary-tab"
                                        data-bs-toggle="tab" href="#nav-summary" role="tab" aria-controls="nav-summary"
                                        aria-selected="true">Description</a>
                                    <a class="nav-item nav-link font-weight-bold" id="nav-problems-tab"
                                        data-bs-toggle="tab" href="#nav-problems" role="tab"
                                        aria-controls="nav-problems" aria-selected="false">Solved Problems</a>
                                    <a class="nav-item nav-link font-weight-bold" id="nav-results-tab"
                                        data-bs-toggle="tab" href="#nav-results" role="tab" aria-controls="nav-results"
                                        aria-selected="false">Key Results</a>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent" v-if="tool">
                                <div class="tab-pane fade show active modal-scroll-content" id="nav-summary"
                                    role="tabpanel" aria-labelledby="nav-summary-tab">
                                    <div class="content-scroll">
                                        <p>{{ tool.syntax }}</p>
                                    </div>
                                </div>
                                <div class="tab-pane fade modal-scroll-content" id="nav-problems" role="tabpanel"
                                    aria-labelledby="nav-problems-tab">
                                    <div class="content-scroll">
                                        <ul class="my-text-blue" v-html="formattedSolvedProblems"></ul>
                                    </div>
                                </div>
                                <div class="tab-pane fade modal-scroll-content" id="nav-results" role="tabpanel"
                                    aria-labelledby="nav-results-tab">
                                    <div class="content-scroll">
                                        <ul class="my-text-blue" v-html="formattedKeyResults"></ul>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <p>No tool selected.</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn my-btn" @click="closeModal">Chiudi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ToolDetail',
    props: {
        tool: {
            type: Object,
            required: false,
            default: null
        },
        show: {
            type: Boolean,
            required: true,
        }
    },
    computed: {
        formattedSolvedProblems() {
            if (!this.tool || !this.tool.solved_problems) return '';
            return this.tool.solved_problems
                .split('.')
                .map(problem => problem.trim())
                .filter(problem => problem.length > 0)
                .map(problem => `<li>${problem}</li>`)
                .join('');
        },
        formattedKeyResults() {
            if (!this.tool || !this.tool.key_results) return '';
            return this.tool.key_results
                .split('.')
                .map(result => result.trim())
                .filter(result => result.length > 0)
                .map(result => `<li>${result}</li>`)
                .join('');
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
};
</script>

<style scoped>
.modal {
    display: block;
    background: rgba(0, 0, 0, 0.5);
}

.modal-dialog {
    max-width: 80vw;
    width: auto;
    height: 80vh;
    position: relative;
}

.modal-content {
    background: transparent;
    border: none;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
}

.modal-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: -1;
}

.modal-background-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
}

.modal-overlay {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 20px;
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.modal-header {
    border-bottom: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #225E83;
}

.btn-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    line-height: 1;
    color: #000;
    opacity: 0.5;
    cursor: pointer;
}

.btn-close:hover {
    opacity: 0.8;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    color: #225E83;
    background-color: transparent;
    border-color: transparent transparent #225E83;
    border-bottom: 2px solid #225E83;
}

.nav-tabs .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    color: #225E83;
    opacity: 0.8;
    font-weight: 700;
}

.nav-tabs .nav-link:hover {
    border-color: transparent transparent #e9ecef;
    opacity: 1;
}

.tab-content {
    padding-top: 15px;
    flex-grow: 1;
}

.tab-content h6 {
    color: #225E83;
}

.tab-content p {
    color: #225E83;
    font-weight: 500;
    text-align: justify;
}

.content-scroll {
    max-height: 200px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.content-scroll::-webkit-scrollbar {
    display: none;
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.5s;
}

.modal-enter,
.modal-leave-to {
    opacity: 0;
}

@media (max-width: 768px) {
    .modal-dialog {
        max-width: 90vw;
        height: 70vh;
    }

    .modal-overlay {
        width: 90%;
        height: 70%;
    }
}
</style>
