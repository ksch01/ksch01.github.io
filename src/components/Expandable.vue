<script setup lang="ts">
import { ref, useSlots, useId, onMounted } from 'vue';

const props = defineProps<{contentId?: string, ariaLabel?:string}>()
let contentId : string

onMounted(() => {
    if (props.contentId)
        contentId = props.contentId
    else 
        contentId = useId()
})

const slots = useSlots()

const expanded = defineModel<boolean>();

function onClick() {
    expanded.value = !expanded.value
}

const content = ref<HTMLElement | null>(null); 

function beforeEnter(el: Element) {
    const element = el as HTMLElement;

    element.style.height = "0px";
    element.style.overflow = "hidden";
}

function enter(el: Element, done: () => void) {
    const element = el as HTMLElement;

    void element.offsetHeight;

    const height = element.scrollHeight;

    element.style.height = `${height}px`;

    element.addEventListener("transitionend", done, {
        once: true
    });
}

function afterEnter(el: Element) {
    const element = el as HTMLElement;

    element.style.height = "auto";
    element.style.overflow = "";
}

function beforeLeave(el: Element) {
    const element = el as HTMLElement;

    element.style.height = `${element.offsetHeight}px`;
    element.style.overflow = "hidden";

    // Wichtig: Reflow erzwingen.
    void element.offsetHeight;
}

function leave(el: Element, done: () => void) {
    const element = el as HTMLElement;

    element.style.height = "0px";

    element.addEventListener("transitionend", done, {
        once: true
    });
}

function afterLeave(el: Element) {
    const element = el as HTMLElement;

    element.style.height = "";
    element.style.overflow = "";
}
</script>

<template>
    <div class="expandable">
        <button class="expandableHeader" :aria-expanded="expanded" :aria-label="ariaLabel" :aria-controls="contentId" @click="onClick">
            <label class="expandableHeaderContent">
                <slot name="header"/>
            </label>
            <span class="expandableIcon" aria-hidden="true">
                <template v-if="slots.icon">
                    <slot name="icon"/>
                </template>
                <svg v-else :class="{expandedIcon: expanded}" fill="currentColor" viewBox="0 0 17.688196 32" xmlns="http://www.w3.org/2000/svg">
                  <rect width="23.613272" height="3.3733244" x="-21.926609" y="20.940754" rx="1.6866622" transform="rotate(-45)" />
                  <rect width="23.613272" height="3.3733244" x="0.7008087" y="-1.6866628" rx="1.6866622" transform="rotate(45)" />
                </svg>
            </span>
        </button>
        <Transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" :css="false">
            <div v-show="expanded" :id="contentId" class="expandableContent" ref="content">
                <div class="expandableContentInner">
                    <slot name="content"/>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.expandable {
    width: 100%;
}

.expandableHeader {
    display: flex;
    justify-content: space-between;
    gap: 1em;

    width: 100%;

    background-color: transparent;
    border: none;

    transition: color 250ms;
}

.expandableHeaderContent {
    flex-grow: 1;
}

.expandableIcon {
    display: flex;
    align-items: center;
}

.expandableIcon svg{
    width: 1em;
    height: 1em;

    transition: transform 200ms ease;
}

.expandedIcon {
    transform: rotate(-90deg)
}

.expandableContent { 
    overflow: hidden; 
    height: 0;

    transition: height 200ms ease;
}

.expandableContentInner {
    padding: .5em 0 1.5em 0;
    margin: 0;
}
</style>