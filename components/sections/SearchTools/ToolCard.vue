<template>
    <div class="tool-card">
        <div class="card h-100">
            <div class="row g-0">
                <div class="col-md-4 col-12">
                    <img :src="imagePath" class="img-fluid" alt="Tool Image" draggable="false" @contextmenu.prevent />
                </div>
                <div class="col-md-8 col-12 d-flex align-items-center">
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
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin: 10px 0;
    padding: 10px;
}

.tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card {
    border: none;
    background: transparent;
}

.img-fluid {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 15px;
    padding-left: 20px;
}

.card-body {
    padding: 15px;
}

.card-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #225e8e;
}

.card-subtitle {
    font-size: 1rem;
    color: #555;
    margin-bottom: 10px;
}

.card-text {
    font-size: 0.9rem;
    color: #333;
}

@media (max-width: 768px) {
    .tool-card {
        flex-direction: column;
        padding: 10px;
        border-radius: 0;
    }

    .card-body {
        padding: 20px;
    }

    .card-title {
        font-size: 1.3rem;
    }

    .card-subtitle {
        font-size: 1.1rem;
    }

    .card-text {
        font-size: 1rem;
    }
}

@media (max-width: 576px) {
    .tool-card {
        padding: 10px;
        border-radius: 0px;
    }

    .img-fluid {
        height: auto;
    }

    .card-body {
        padding: 20px;
    }

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
