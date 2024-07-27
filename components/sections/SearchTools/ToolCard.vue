<template>
    <div class="tool-card">
        <div class="card h-100">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="imagePath" class="img-fluid" alt="Tool Image" draggable="false" @contextmenu.prevent />
                </div>
                <div class="col-md-8 d-flex align-items-center">
                    <div class="card-body">
                        <h5 class="card-title">{{ tool.name }}</h5>
                        <p class="card-subtitle mb-2 text-muted">{{ tool.subtitle }}</p>
                        <p class="card-text">{{ tool.mission }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToolCard',
    props: {
        tool: {
            type: Object,
            required: true
        }
    },
    computed: {
        imagePath() {
            return this.tool.image ? `assets/images/${this.tool.image}` : 'assets/images/A4XXX_Hidden_Banner.jpg';
        }
    }
};
</script>

<style scoped>
.tool-card {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card {
    border: none;
    background: transparent;
}

.img-fluid {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #225e8e;
}

.card-subtitle {
    font-size: 1.2rem;
    color: #555;
}

.card-text {
    font-size: 1rem;
}

@media (max-width: 768px) {
    .card-title {
        font-size: 1.2rem;
    }

    .card-subtitle {
        font-size: 1rem;
    }

    .card-text {
        font-size: 0.9rem;
    }
}
</style>
