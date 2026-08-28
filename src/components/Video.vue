<script setup lang="ts">
import { ref, useSlots } from 'vue'

const props = defineProps<{
    src: string
}>()

const video = ref<HTMLVideoElement | null>(null)
const slots = useSlots()


function maximize(){
    video.value?.requestFullscreen()
}

function hasDescription() : boolean {
  return !!slots.description;
}

</script>

<template>
    <div class="divVideo" @click="maximize">
        <video ref="video" autoplay muted loop playsinline preload="metadata">
            <source :src=src type="video/webm">
        </video>
        <div class="divVideoOverlay" style="color: white">
            <svg class="svgVideoMaximize" xmlns="http://www.w3.org/2000/svg" width="2em" fill="currentColor" viewBox="0 0 32 32">
              <defs id="defs1" />
              <g id="layer1">
                <g id="g1">
                  <rect id="rect1-8" width="14" height="2" x="18" y="0" rx="1" />
                  <rect id="rect1-8-27" width="14" height="2" x="0.41550007" y="-1.0000001" rx="1" transform="rotate(45)" />
                  <rect id="rect1-8-27-9" width="14" height="2" x="30.839476" y="-0.99999964" rx="1" transform="rotate(45)" />
                  <g id="g2">
                    <rect id="rect1-8-9" width="10" height="2" x="-3.5527137e-15" y="0" rx="1" />
                    <rect id="rect1-8-9-4" width="10" height="2" x="-10" y="-1.7763568e-15" rx="1" transform="rotate(-90)" />
                  </g>
                  <g id="g2-3" transform="rotate(180,16,16)">
                    <rect id="rect1-8-9-41" width="10" height="2" x="-3.5527137e-15" y="0" rx="1" />
                    <rect id="rect1-8-9-4-1" width="10" height="2" x="-10" y="-1.7763568e-15" rx="1" transform="rotate(-90)" />
                  </g>
                  <rect id="rect1-8-2" width="14" height="2" x="-14" y="30" rx="1" transform="rotate(-90)" />
                </g>
                <g id="g1-6" transform="rotate(180,16,16)">
                  <rect id="rect1-8-8" width="14" height="2" x="18" y="0" rx="1" />
                  <rect id="rect1-8-2-5" width="14" height="2" x="-14" y="30" rx="1" transform="rotate(-90)" />
                </g>
              </g>
            </svg>
        </div>
    </div>
</template>

<style scoped>

</style>