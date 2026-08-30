<script setup lang="ts">
import { ref, useSlots } from 'vue'

const props = defineProps<{
    src: string
}>()

const video = ref<HTMLVideoElement | null>(null)
const slots = useSlots()
const loaded = ref<boolean>(false)

function maximize(){
  if(loaded.value)
    video.value?.requestFullscreen()
}

function hasDescription() : boolean {
  return !!slots.description;
}

function onVideoLoaded() {
  loaded.value = true
}

</script>

<template>
    <div class="divVideo" :class="{placeholder: !loaded}" @click="maximize">
        <video :class="{loaded}" ref="video" autoplay muted loop playsinline preload="metadata" @canplay="onVideoLoaded">
            <source :src=src type="video/webm">
        </video>
        <div class="divVideoOverlay" :class="{invisible: !loaded}" style="color: white">
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
.divVideo {
  position: relative;
  display: inline-block;

  border-radius: 1rem;

  width: 100%;
  aspect-ratio: 16/9;
}

.divVideo.placeholder {
  background-color: var(--color-placeholder);
  animation: pulse 1000ms ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

video {
  border-radius: inherit;

  display: none;

  width: 100%;
  height: auto;
}

video.loaded {
  display: block;
}

.divVideoOverlay {
  position: absolute;
  inset: 0;

  border-radius: inherit;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transition: opacity 400ms ease-in-out;

  pointer-events: none;
}

.svgVideoMaximize {
  scale: .1;
  transition: scale 200ms ease-in-out;
}

.divVideo:hover {
  cursor: pointer;
}

.divVideo:hover .divVideoOverlay {
    opacity: 1;
}
.divVideo:hover .divVideoOverlay .svgVideoMaximize{
    scale: 1
}
</style>