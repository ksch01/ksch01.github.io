<script setup lang="ts">

const open = defineModel<boolean>("open")

defineEmits(["loseFocus"])

</script>

<template>
    <Transition name="fade">
        <div v-if="open" class="modal" @click.self="$emit('loseFocus')">
            <div class="modalBody">
                <slot/>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.modal {
    position: fixed;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1000;
}

.modalBody {
    max-width: min(90vw, 1200px);
    max-height: 90vh;

    background-color: rgba(255, 255, 255, .8);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);

    border-color: currentColor;
    border-width: 1px;
    border-style: solid;
    border-radius: 1rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>