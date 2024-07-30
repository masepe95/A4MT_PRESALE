<template>
    <transition name="modal">
        <div class="modal fade show d-flex align-items-center justify-content-center" tabindex="-1" role="dialog"
            v-if="show" @click.self="closeModal">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="card">
                        <div class="card-img-top-wrapper position-relative">
                            <img class="card-img-top"
                                :src="tool && tool.image ? '/assets/images/' + tool.image : '/assets/images/A4XXX_Hidden_Banner.jpg'"
                                alt="Tool Image">
                            <button type="button" class="close btn-close" @click="closeModal">&times;</button>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title mb-4 text-center">{{ tool ? tool.name : 'Tool Details' }}</h5>
                            <div v-if="tool" class="row">
                                <div class="col-md-6">
                                    <h6 class="mb-3 ms-3">Key Results</h6>
                                    <ul class="list-group list-group-flush mb-5" v-html="formattedKeyResults"></ul>
                                </div>
                                <div class="col-md-6">
                                    <h6 class="mb-3 ms-3">Solved Problems</h6>
                                    <ul class="list-group list-group-flush" v-html="formattedSolvedProblems"></ul>
                                </div>
                            </div>
                            <div v-else>
                                <p>No tool selected.</p>
                            </div>
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
                .map(problem => `<li class="list-group-item">${problem}</li>`)
                .join('');
        },
        formattedKeyResults() {
            if (!this.tool || !this.tool.key_results) return '';
            return this.tool.key_results
                .split('.')
                .map(result => result.trim())
                .filter(result => result.length > 0)
                .map(result => `<li class="list-group-item">${result}</li>`)
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
    height: auto;
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

.card {
    max-height: 80vh;
    overflow-y: auto;
}

.card-title {
    color: #294e80;
    font-size: 2rem;
}

.card-body {
    position: relative;
}


.card-img-top-wrapper {
    width: 100%;
    height: auto;
    position: relative;
}

.card-img-top {
    width: 100%;
    height: auto;
    object-fit: contain;
}

@media (min-width: 992px) {
    .card-img-top {
        max-height: 500px;
    }
}

@media (max-width: 768px) {
    .modal-dialog {
        max-width: 95vw;
    }

    .card {
        max-height: 70vh;
    }
}

@media (max-width: 576px) {
    .modal-dialog {
        max-width: 100vw;
    }

    .card {
        max-height: 60vh;
    }
}
</style>
