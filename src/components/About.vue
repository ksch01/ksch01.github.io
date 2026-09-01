<script setup lang="ts">
</script>

<template>
    <div class="content">
        <section id="about" class="about">
            <h1 class="heroHeader">Hallo, ich bin Kevin.</h1>
            <p class="firstText">
                Softwareentwickler mit einer Leidenschaft für interaktive Echtzeitanwendungen und durchdachte Nutzererfahrungen.
            </p>
            <p class="secondText">
                Besonders gerne entwickle ich Anwendungen, die unmittelbar auf die Interaktion ihrer Nutzer reagieren – 
                von Videospielen bis hin zu komplexen interaktiven Systemen. Dabei beschäftige ich mich genauso gerne mit der technischen Umsetzung 
                wie mit der Frage, wie sich eine Anwendung intuitiv und angenehm bedienen lässt.
            </p>
        </section>
    </div>
</template>

<style scoped>

.heroHeader {
    padding-left: 0;
}

.heroHeader, .firstText, .secondText {
    animation: fadeIn 600ms ease-in-out 100ms both;
}

.firstText {
    animation-delay: 250ms;
}

.secondText {
    animation-delay: 400ms;
}

@media (prefers-reduced-motion: reduce) {
    .heroHeader, .firstText, .secondText {
        animation: none;
    }
}

@media (min-width: 600px) {
    .heroHeader {
        padding-left: 1em;
    }

    .about {
        padding: 8rem 4rem;
    }
}

</style>