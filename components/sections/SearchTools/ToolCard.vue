<template>
    <div class="tool-card">
        <div class="card h-100">
            <div class="row g-0">
                <div class="col-md-3">
                    <img :src="imagePath" class="img-fluid rounded-start" alt="Tool Image" draggable="false"
                        @contextmenu.prevent />
                </div>
                <div class="col-md-9 card-content">
                    <div class="card-body">
                        <h5 class="card-title">{{ tool.name }}</h5>
                        <strong class="card-text">{{ tool.subtitle }}</strong>
                        <div class="tool-details">
                            <span>
                                {{ tool.mission }}
                            </span>
                        </div>
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
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform: scale(0.80);
}

.tool-card:hover {
    transform: scale(0.85);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.card {
    border: none;
    background: transparent;
}

.img-fluid {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.card-content {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 10px;
}

.card-body {
    padding: 15px;
    background: transparent;
}

.card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: #225e8e;
}

.card-text {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: #225e8e;
}

.tool-details {
    margin-top: 8px;
    font-size: 1.1rem;
}

@media (max-width: 768px) {
    .card-body {
        padding: 8px;
    }

    .img-fluid {
        height: 120px;
    }
}
</style>