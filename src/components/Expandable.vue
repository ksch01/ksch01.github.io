<script setup lang="ts">
import { ref, useSlots } from 'vue';

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
        <div class="expandableHeader" @click="onClick">
            <div class="expandableHeaderContent">
                <slot name="header"/>
            </div>
            <div class="expandableIcon">
                <template v-if="slots.icon">
                    <slot name="icon"/>
                </template>
                <svg v-else :class="{expandedIcon: expanded}" fill="currentColor" viewBox="0 0 17.688196 32" xmlns="http://www.w3.org/2000/svg">
                  <rect width="23.613272" height="3.3733244" x="-21.926609" y="20.940754" rx="1.6866622" transform="rotate(-45)" />
                  <rect width="23.613272" height="3.3733244" x="0.7008087" y="-1.6866628" rx="1.6866622" transform="rotate(45)" />
                </svg>
            </div>
        </div>
        <Transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" :css="false">
            <div v-show="expanded" class="expandableContent" ref="content">
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

    color: var(--color-font);

    transition: color 250ms;
}
.expandableHeader:hover {
    color: var(--color-font-highlight);
    cursor: pointer;
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