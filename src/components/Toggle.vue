<script setup lang="ts">
const model = defineModel<boolean>({default: false})

function toggle(){
    model.value = !model.value
}

function set(value: boolean){
    model.value = value
}

</script>

<template>
    <div class="divToggle">
        <div class="pre" @click="set(false)">
            <slot name="pre"/>
        </div>
        <button :class="{toggled: model}" @click="toggle"/>
        <div class="post" @click="set(true)">
            <slot name="post"/>
        </div>
    </div>
</template>

<style scoped>
.pre {
    padding: 0;
    padding-right: 1em;
    justify-self: right;
}

.post {
    padding: 0;
    padding-left: 1em;
    justify-self: left;
}

button, .pre:hover, .pre:hover *, .post:hover, .post:hover *{
    cursor: pointer;
}

.divToggle {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    
    gap: 0;
    align-items: center;
}

button {
    position: relative;
    overflow: visible;

    height: 2em;
    width: 4em;

    margin: 0;

    border: solid var(--color-font) 3px;
    border-radius: 1em;

    background: var(--color-secondary);
    transition: border-color 200ms ease-in-out;
}

button::before {
    position: absolute;

    content: "";
    display: block;

    top: -3px;
    left: -3px;

    width: 2em;
    height: 2em;
    background: currentColor;

    border-radius: inherit;

    z-index: 1;

    transition: transform 200ms ease-in-out,
        background-color 200ms ease-in-out;
}

button:hover {
    border-color: var(--color-font-highlight);
}
button:hover::before {
    background-color: var(--color-font-highlight);
}

button.toggled::before{
    transform: translateX(2em);
}
</style>