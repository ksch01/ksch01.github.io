<script setup lang="ts">
import StudProjects from "./StudProjects.vue"
import justplayingcardssample from "@/assets/videos/justplayingcards-sample-1.mp4"
import Video from "./Video.vue"

</script>

<template>
    <section id="projects">
    <h2 class="hSection">Projekte</h2>

    <h3 class="hSubsection">Just Playing Cards (Arbeitstitel)</h3>
    <Video :src="justplayingcardssample"/>
    <h4 class="hSubsubsection">Idee</h4>
    <p>
        Bei meinem aktuellen Projekt handelt es sich um ein kleines Computerspiel, das auf einer simplen Idee basiert. 
        Statt Spielern begrenzte Möglichkeiten oder Züge zur Verfügung zu stellen, lassen sich die Karten eines Kartendecks frei bewegen, drehen, stapeln und ziehen.
        Somit lassen sich, wie bei einem echten Kartendeck, eine Vielzahl von Kartenspielen spielen.
    </p>
    <p>
        Das ist alles andere als eine neue oder revolutionäre Idee. Aber genau darin liegt auch nicht der Fokus dieses Projekts. Vielmehr geht es darum,
        diese Idee sauber umzusetzen und gleichzeitig Erfahrungen mit den dabei eingesetzten Technologieen zu sammeln. Denn die Umsetzung basiert nicht auf einer
        High-Level-Game-Engine sondern lediglich auf einer eigenen Vulkan-Implementierung um das Maximum an Kontrolle und Performance zu ermöglichen.
    </p>
    <h4 class="hSubsubsection">Tech</h4>
    <p>
        Die Umsetzung basiert auf der Programmiersprache C. Für die Grafikentwicklung habe ich mich dabei für Vulkan entschieden. Weitere Abhängigkeiten
        liegen bei cglm als Mathematikbibliothek für Vektor- und Matrixoperationen die in der Computergrafik genutzt werden sowie GLFW zur Verwaltung des Fensters. 
        Im weiteren Verlauf der Entwicklung werden voraussichtlich noch weitere Abhängigkeiten hinzukommen, beispielsweise für die Kommunikation über das Netzwerk mittels TCP und UDP
        um den Mehrspielermodus umzusetzen.
    </p>
    <h4 class="hSubsubsection">Status</h4>
    <p>
        Ich plane, das Spiel zu einem bisher unbestimmten Zeitpunkt auf Steam zu veröffentlichen. Aktuell befindet es sich noch in Entwicklung. Ein großer Teil der Funktionalitäten 
        außerhalb des Mehrspielermodus ist bereits umgesetzt, sodass schon eine spielbare Version existiert, wie sie im Video oben zu sehen ist. Die nächsten Schritte umfassen die Entwicklung 
        des Mehrspielermodus sowie die Optimierung des Programms, insbesondere hinsichtlich Stabilität, Kompatibilität und Performance. Außerdem soll die Steam API angebunden werden, um Funktionen 
        wie das Erstellen und Beitreten zu Lobbys zu ermöglichen. Neben der weiteren Programmierung müssen noch eine Steam-Seite erstellt und die Grafiken für das Spiel fertiggestellt werden.
    </p>
    <p>
        Ich plane nicht den Quellcode zu veröffentlichen und stelle daher auch keinen Git-Link zur Verfügung.
    </p>

    <StudProjects/>
    </section>
</template>

<style scoped>
</style>