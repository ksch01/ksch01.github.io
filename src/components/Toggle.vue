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
    <div class="divToggle" role="group" aria-label="Option auswählen">
        <button type="button" class="pre" :class="{ active: !model }" :aria-pressed="!model" @click="set(false)">
            <label>
                <slot name="pre" />
            </label>
        </button>
        <button class="toggle" :class="{toggled: model}" @click="toggle" :aria-label="model ? 'Auf Option 1 wechseln' : 'Auf Option 2 wechseln'"/>
        <button type="button" class="post" :class="{ active: model }" :aria-pressed="model" @click="set(true)">
            <label>
                <slot name="post"/>
            </label>
        </button>
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

button {
    padding: 0;
    margin: 0;
    height: 100%;

    border: none;
    background-color: transparent;
}

.divToggle {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    
    gap: 0;
    align-items: center;
}

.toggle {
    font-size: .8em;

    position: relative;
    overflow: visible;

    height: 2em;
    width: 4em;

    margin: 0;

    color: var(--color-primary);
    border: solid currentColor 3px;
    border-radius: 1em;

    background: var(--color-secondary);
    transition: border-color 200ms ease-in-out;
}

.toggle:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

.toggle::before {
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

.toggle:hover {
    border-color: var(--color-secondary-highlight);
}
.toggle:hover::before {
    background-color: var(--color-secondary-highlight);
}

.toggle.toggled::before{
    transform: translateX(2em);
}

.toggle label {
    color: var(--color-font);
}
</style>