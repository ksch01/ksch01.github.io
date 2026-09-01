<script setup lang="ts">
import { LINKEDIN_URL, MAILTO } from '@/const.ts'

</script>

<template>
    <section id="contact">
    <h1 class="hSection">Kontakt</h1>
    <p class="lastText"> 
        Für Kontaktanfragen bin ich immer offen – egal, ob Sie ein Jobangebot haben, einen Entwickler für Ihre Software oder Webseite suchen oder einfach nur eine Frage haben. Wenn Sie mich kontaktieren möchten, 
        können Sie mir eine E-Mail oder eine Nachricht auf <a :href="LINKEDIN_URL">LinkedIn</a> schreiben. Meine E-Mail-Adresse lautet <a :href="MAILTO">2001kevin.schmidt@gmail.com</a>. Ich freue mich auf Ihre Anfrage. 
    </p>
    </section>
</template>

<style scoped>
.lastText {
    margin-bottom: 0;
    padding-bottom: 2rem;
}
</style>