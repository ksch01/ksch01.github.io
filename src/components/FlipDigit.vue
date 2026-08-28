<script setup lang="ts">
import { ref, watch } from "vue"

const props = defineProps<{
  value: string
}>()

let value = ref(props.value.length == 0 ? ' ' : props.value.charAt(0))
let oldValue = ref<string>(value.value)

let flipping = ref<boolean>(false)

watch(() => props.value, () => {
    value.value = props.value
    flipping.value = true
})

function onAnimationEnd(){
    flipping.value = false
    oldValue.value = value.value;
}

</script>

<template>
    <div class="divFlipDigit">
        <div class="divFlipDigitTop" :class="{flipping: flipping}">
            <span>{{ oldValue }}</span>
        </div>
        <div class="divFlipDigitBottom">
            <span>{{ oldValue }}</span>
        </div>

        <div class="divFlipDigitTopNew">
            <span>{{ value }}</span>
        </div>
        <div class="divFlipDigitBottomNew" :class="{flipping: flipping}" @animationend="onAnimationEnd">
            <span>{{ value }}</span>
        </div>
    </div>
</template>

<style scoped>

.divFlipDigit {
    display: inline-block;
    vertical-align: baseline;

    position: relative; 
    
    width: 1ch;
    height: 1.15625em;

    font-family: "Geist Mono", monospace;

    perspective: 800px;

    background-color: #ffffffff;
}

@keyframes flip-digit-top {
    from {
        transform: rotateX(0deg);
    }

    to {
        transform: rotateX(-90deg);
    }
}
@keyframes flip-digit-bottom {
    from {
        transform: rotateX(90deg);
    }

    to {
        transform: rotateX(0deg);
    }
}

.divFlipDigit div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;

    background: inherit;
}

.divFlipDigitTop {
    height: 50%;
    z-index: 4;
}
.divFlipDigitTop.flipping {
    animation: flip-digit-top 250ms ease-in forwards;
    transform-origin: bottom;
    backface-visibility: hidden;
}

.divFlipDigitBottom {
    height: 100%;
    z-index: 1;
}

.divFlipDigitTopNew {
    height: 50%;
    z-index: 3;
}

.divFlipDigitBottomNew {
    height: 100%;
    z-index: 2; 

    transform: rotateX(90deg);
}
.divFlipDigitBottomNew.flipping {
    animation: flip-digit-bottom 100ms linear forwards;
    animation-delay: 250ms;
    transform-origin: center;
    backface-visibility: hidden;
}

.divFlipDigit::after {
    content: "";

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;

    min-height: 1px;
    height: 5%;
    transform: translateY(-50%);

    background: inherit;

    z-index: 100;
    pointer-events: none;
}

</style>