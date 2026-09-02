<script setup lang="ts">
import type { Tech } from "@/projects";
import { ref, onMounted, onUnmounted, nextTick } from "vue";

const props = defineProps<{
  techs: Array<Tech>
}>()

class GellyIcon {
    element;

    private baseX = 0;
    private baseY = 0;

    x = 0;
    y = 0;

    private targetX = 0;
    private targetY = 0;

    private vX = 0;
    private vY = 0;

    scale = 1;
    private targetScale = 1;

    private hover = false;

    constructor(element: HTMLElement, containerRect : DOMRect){
        this.element = element
        this.updateBase(containerRect)
    }

    updateBase(containerRect : DOMRect){
        const rect = this.element.getBoundingClientRect();
        const iconX = rect.left - containerRect.left + rect.width / 2;
        const iconY = rect.top - containerRect.top + rect.height / 2;
        this.setBase(iconX, iconY)
    }

    setBase(baseX : number, baseY : number){
        this.baseX = baseX;
        this.baseY = baseY;

        this.targetX = baseX;
        this.targetY = baseY;
    }

    getBaseDirection(x : number, y : number) : [number, number, number] {
        let dX = this.baseX - x
        let dY = this.baseY - y

        let d = Math.hypot(dX, dY)

        let ndX = dX / d
        let ndY = dY / d

        return [ndX, ndY, d]
    }

    update(time: number, mouseX : number, mouseY : number){
        if(time === 0)return;
        let direction = this.getBaseDirection(mouseX, mouseY)

        const maxD = 5 * emSize;
        const minD = .8 * emSize;
        let force = 0;
        if (minD < direction[2] && direction[2] < maxD) {
            force = Math.pow(1 - (direction[2] - minD) / (maxD - minD), 2)

            force = 1 - (direction[2] - minD) / (maxD - minD)
            force = force * force
        }

        if(direction[2] < minD){
            if(!this.hover){
                this.hover = true
                this.targetScale = 1.2
                this.element.classList.add("showGellyIconLabel");
            }
        } else {
            if(this.hover){
                this.hover = false
                this.targetScale = 1
                this.element.classList.remove("showGellyIconLabel");
            }
        }

        const forceMul = .3;
        this.targetX = direction[0] * emSize * force * forceMul;
        this.targetY = direction[1] * emSize * force * forceMul;

        this.vX = this.vX - (this.vX * time * 20) + (this.targetX - this.x) * time
        this.vY = this.vY - (this.vY * time * 20) + (this.targetY - this.y) * time

        this.x += this.vX
        this.y += this.vY

        this.scale += (this.targetScale - this.scale) * time * 20

        this.element.style.transform =`translate(${this.x}px, ${this.y}px) scale(${this.scale})`
    }
}

let width = 0
let emSize = 0
let rowSize = ref(0)

const mouseX = ref(0);
const mouseY = ref(0);

const container = ref<HTMLElement | null>(null)
let containerRect : DOMRect
let gellyIcons : Array<GellyIcon> = [];

let observer: ResizeObserver

async function updateLayout(){
    if (!container.value) return

    containerRect = container.value.getBoundingClientRect()
    width = containerRect.width

    emSize = parseFloat(getComputedStyle(container.value).fontSize)
    
    const gapSize = emSize
    rowSize.value = Math.floor(width / (emSize + gapSize))
    
    gellyIcons.forEach(item => item.element.style.transform = "")
    await nextTick()
    containerRect = container.value.getBoundingClientRect()
    gellyIcons.forEach(item => item.updateBase(containerRect))
}

onMounted(() => {
    updateLayout()
    const items = container.value!.querySelectorAll(".divGellyIcon")
    items.forEach((item) => {
        gellyIcons.push(new GellyIcon(item as HTMLElement, containerRect))
    })
    render(0)

    observer = new ResizeObserver(updateLayout)
    observer.observe(container.value!)

    window.addEventListener("resize", updateLayout, { passive: true })
    window.addEventListener("scroll", updateLayout, { passive: true });
    window.addEventListener("mousemove", onMouseMove)
});

onUnmounted(() => {
    observer.disconnect();

    window.removeEventListener("resize", updateLayout)
    window.removeEventListener("scroll", updateLayout)
    window.removeEventListener("mousemove", onMouseMove)
});

function getIconPath(filename : string) : string {
    return "/src/assets/icons/".concat(filename)
}

function getCol(index: number) : number {
    let row = getRow(index)
    if(row % 2 === 0)
        return (index % rowSize.value) * 2
    else
        return (index % rowSize.value) * 2 + 1
}

function getRow(index: number) : number {
    return Math.floor(index / (rowSize.value - .5));
}

function onMouseMove(event: MouseEvent) {
    mouseX.value = event.clientX - containerRect.left;
    mouseY.value = event.clientY - containerRect.top;
}

let lastTime = 0;
function render(time: number){
    const dt = (time - lastTime) / 1000;
    lastTime = time;

    gellyIcons.forEach(icon => {
        icon.update(dt, mouseX.value, mouseY.value)
    })

    requestAnimationFrame(render);
}

</script>

<template>
    <div class="divGellyIcons" ref="container" :style="{gridTemplateColumns: `repeat(${rowSize}, 1fr)`}">
        <template v-for="(tech, index) in techs">
            <div class="divGellyIcon">
                <img class="imgGellyIcon" v-bind:src="tech.icon" :style="{gridColumn: getCol(index), gridRow: getRow(index)}" :alt="tech.title">
                <span class="spanGellyIconLabel">{{ tech.title }}</span>
            </div>
        </template>
    </div>
</template>

<style scoped>
.divGellyIcons {
    display: grid;

    grid-template-columns: 1fr;

    min-height: 100% - 2em;
    width: 100% - 2em;
}

.divGellyIcon {
    position: relative;

    will-change: transform;

    width: 1em;
    height: 1em;

    margin: auto;
    padding: .3em;
}

.divGellyIcon > svg {
    display: block;
    width: 100%;
    height: 100%;

    z-index: 1;
}

.spanGellyIconLabel {
    position: absolute;
    top: calc(85%);
    left: 50%;

    transform: translateX(-50%);

    opacity: 0;
    pointer-events: none;

    transition:
        opacity .2s ease,
        transform .2s ease;

    font-size: min(.5em, 1rem);

    background: white;
    padding: .1em .5em;
    border-radius: 1em;

    z-index: 2; 
}

.divGellyIcon.showGellyIconLabel .spanGellyIconLabel {
    opacity: 1;
    transform: translateX(-50%) translateY(.2rem);
}
</style>