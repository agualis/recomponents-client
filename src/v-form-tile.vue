<template>
    <div class="grid">
        <div class="grid-item grid-item-secondary">
            <div class="tile tile-description">
                <div class="tile-title">
                    <slot name="title"></slot>
                </div>
                <div class="tile-content">
                    <slot name="description"></slot>
                </div>
            </div>
        </div>
        <div class="grid-item grid-item-primary">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'v-form-tile',
    };
</script>
