<script setup lang="ts">
import Hero from "./Hero.vue"
import FlipDigit from "./FlipDigit.vue";
import IconGelly from "./IconGelly.vue";
import Toggle from "./Toggle.vue";

import Timeline from "./Timeline.vue";
import TimelineSegment from "./TimelineSegment.vue";
import TimelineBreak from "./TimelineBreak.vue";

import { TIME_START_PROGRAMING, TECHS } from "@/const.ts";
import { Tech } from "@/projects.ts";

import { ref, onMounted, onUnmounted } from "vue";

let collapsed = ref<boolean>(true);

const date = ref(new Date(Date.now() - TIME_START_PROGRAMING));

const studTechs : Array<Tech> = [
    TECHS.cpp,
    TECHS.docker,
    TECHS.git,
    TECHS.java,
    TECHS.javascript,
    TECHS.mongodb,
    TECHS.nodejs,
    TECHS.postgresql,
    TECHS.python,
    TECHS.react,
    TECHS.spring,
    TECHS.vuejs
];

let interval: number;

onMounted(() => {
    interval = window.setInterval(() => {
        date.value = new Date(Date.now() - TIME_START_PROGRAMING);
    }, 1000);
});

onUnmounted(() => {
    clearInterval(interval);
});

function numberToStringTwoDigits(value: number) : string {
    let s : string = value.toString()
    if(s.length == 1)
        s = "0".concat(s)
    return s;
}

function getFirstDigit(value: number) : string {
    let s : string = value.toString()
    if(s.length < 2) return '0'
    else return s.charAt(0)
}
function getSecondDigit(value: number) : string {
    let s : string = value.toString()
    if(s.length < 2) return s.charAt(0)
    else return s.charAt(1)
}

</script>

<template>
    <section id="experience">
    <h1 class="hSection">Erfahrung</h1>
    
    <Toggle v-model="collapsed">
        <template v-slot:pre>
            <label>Ausführlich</label>
        </template>
        <template v-slot:post>
            <label>Kurz</label>
        </template>
    </Toggle>

    <template v-if="collapsed">
        <Timeline>
            <TimelineBreak>
                <h2>Leonardo da Vinci Gymnasium Berlin</h2>
            </TimelineBreak>
            <TimelineSegment start="09/2016" end="07/2017">
                <h3 class="timelineContent">Zusatzkurs Informatik außerhalb der regulären Schulzeit</h3>
            </TimelineSegment>
            <TimelineSegment start="09/2017" end="06/2019">
                <h3 class="timelineContent">Abitur (Note: 2,5) und Grundkurs Informatik</h3>
            </TimelineSegment>
            <TimelineBreak>
                <h2 style="margin-top: 2em">Hochschule für Technik und Wirtschaft Berlin</h2>
            </TimelineBreak>
            <TimelineSegment start="10/2019" end="03/2025">
                <h3 class="timelineContent">Bachelor of Science in Angewandter Informatik (Note: 1,8)</h3>
            </TimelineSegment>
            <TimelineSegment start="10/2025" end="05/2026">
                <h3 class="timelineContent">Master of Science in Angewandter Informatik (Studium nicht fortgeführt)</h3>
            </TimelineSegment>
            <TimelineBreak>
                <h2 style="margin-top: 2em">SkyGate Internetworking GmbH</h2>
                <ul class="dashed">
                    <li>Entwurf, Konzeption und Umsetzung von internetorientierten Anwendungen mit TYPO3, PHP, SQL-Datenbanken etc.</li>
                    <li>Schätzen und Implementieren von Backend-Features im Austausch mit Kunden und Senior-Entwicklern</li>
                    <li>Manuelles Testen von Umsetzungen, Beheben von Fehlern und Feedback an die Projektleitung</li>
                </ul>
            </TimelineBreak>
            <TimelineSegment start="02/2023" end="05/2023">
                <h3 class="timelineContent">Pflichtpraktikum im Rahmen des Bachelorstudiums</h3>
            </TimelineSegment>
            <TimelineSegment start="06/2023" end="03/2025">
                <h3 class="timelineContent">Werkstudent Softwareentwicklung (12h - 20h / Woche)</h3>
            </TimelineSegment>
            <TimelineSegment start="04/2025" end="09/2025">
                <h3 class="timelineContent">Softwareentwickler (32h / Woche)</h3>
            </TimelineSegment>
            <TimelineSegment start="10/2025" end="05/2026">
                <h3 class="timelineContent">Werkstudent Softwareentwicklung (12h / Woche)</h3>
            </TimelineSegment>
        </Timeline>
    </template>
    <template v-else>
        <h2 class="hSubsection">Schulbildung</h2>
        <Hero side="left">
            <template v-slot:left>
                <p>
                    Das erste Mal, dass ich mit Programmieren in Berührung kam, war bereits im Alter von 13 Jahren. Ich interessierte mich für Videospiele 
                    und hatte den Traum, einmal selbst eines zu entwickeln. Ich merkte allerdings schnell, dass dies deutlich mehr Aufwand war als erwartet und 
                    brachte deswegen kein Projekt zu Ende.
                </p>
                <p>
                    Wirklich regelmäßig programmierte ich allerdings erst im Rahmen des Zusatzkurses Informatik am Leonardo da Vinci Gymnasium Berlin in der 
                    10. Klasse also im Schuljahr 2016/2017. Der Kurs fand zusätzlich zu den regulären Schulfächern statt.
                </p>
            </template>
            <template v-slot:right>
                <div class="divClock">
                    <p>programming since</p>
                    <div class="divClockElement divClockDate">
                        <div>
                            <FlipDigit :value="getFirstDigit(date.getFullYear() - 1970)"/>
                            <FlipDigit :value="getSecondDigit(date.getFullYear() - 1970)"/>
                            y&nbsp;
                        </div>
                        <div>
                            <FlipDigit :value="getFirstDigit(date.getMonth())"/>
                            <FlipDigit :value="getSecondDigit(date.getMonth())"/>
                            mo
                        </div>
                        <div>
                            <FlipDigit :value="getFirstDigit(date.getDate())"/>
                            <FlipDigit :value="getSecondDigit(date.getDate())"/>
                            d
                        </div>
                    </div>
                    <div class="divClockElement divClockTime">
                        <div>
                            <FlipDigit :value="getFirstDigit(date.getHours())"/>
                            <FlipDigit :value="getSecondDigit(date.getHours())"/>
                            h&nbsp;
                        </div>
                        <div>
                            <FlipDigit :value="getFirstDigit(date.getMinutes())"/>
                            <FlipDigit :value="getSecondDigit(date.getMinutes())"/>
                            m&nbsp;
                        </div>
                        <div>
                            <FlipDigit :value="getFirstDigit(date.getSeconds())"/>
                            <FlipDigit :value="getSecondDigit(date.getSeconds())"/>
                            s
                        </div>
                    </div>
                </div>
            </template>
        </Hero>
        <p>
            Mein Abitur absolvierte ich 2019 an derselben Schule mit der Note 2,5. Ich belegte den Grundkurs Informatik, den ich mit durchschnittlich 10,5 Punkten, also einer 2-, abschloss. 
            Zu dieser Zeit programmierte ich ausschließlich mit Java und lernte hauptsächlich das Programmieren selbst kennen. Von Software Engineering konnte hier noch nicht die Rede sein.
        </p>
        <h2 class="hSubsection">Studium</h2>
        <Hero side="right">
            <template v-slot:left>
                <IconGelly :techs="studTechs" style="font-size: 3rem"/>
            </template>
            <template v-slot:right>
                <p> 
                    Anschließend studierte ich Angewandte Informatik an der Hochschule für Technik und Wirtschaft Berlin. Das Studium war sehr praxisorientiert. Ich lernte zahlreiche Technologien kennen und setzte viele Projekte um. Dabei lernte ich nicht 
                    mehr, wie man programmiert, sondern wie man Libraries, Frameworks und APIs nutzt, wie man die Zusammenarbeit im Team mit agilen Methoden produktiv gestaltet, wie man Anforderungen korrekt erfasst, Softwareentwürfe erstellt und diese 
                    anschließend implementiert – und vieles mehr. 2025 schloss ich mein Bachelorstudium mit der Abschlussnote 1,8 ab. 
                </p> 
                <p> 
                    Einige der Technologien und Methoden, mit denen ich gearbeitet habe, sind Git, Spring Boot, PostgreSQL, MongoDB, HTML, CSS, React, Vue.js, Docker, Node.js, Redis, CUDA, OpenGL, MQTT und Scrum. Dabei programmierte ich in den Sprachen 
                    Java, Python, C++, PHP und JavaScript beziehungsweise TypeScript. 
                </p> 
                <p> 
                    Im Rahmen des Studiums absolvierte ich außerdem ein dreimonatiges Pflichtpraktikum in Vollzeit bei der SkyGate Internetworking GmbH. Dort blieb ich anschließend über den gesamten Rest meines Studiums als Werkstudent tätig. 
                </p>
            </template>
        </Hero>

        <h2 class="hSubsection">SkyGate Internetworking GmbH</h2>
        <p> 
            Ich absolvierte mein Pflichtpraktikum bei der Internetagentur SkyGate Internetworking GmbH über drei Monate in Vollzeit. Anschließend arbeitete ich insgesamt zwei Jahre und sechs Monate als Werkstudent während meines Studiums sowie weitere 
            sechs Monate zwischen meinem Bachelor- und Masterstudium mit einer Arbeitszeit von 32 Stunden pro Woche. Insgesamt war ich von Februar 2023 bis Mai 2026 bei SkyGate tätig und damit über drei Jahre im Unternehmen. 
        </p>
        <p> 
            Dabei arbeitete ich hauptsächlich als TYPO3-Backend-Entwickler im produktiven Umfeld. TYPO3 ist ein Open-Source-Content-Management-System, das PHP als Programmiersprache nutzt und intern auf Symfony aufbaut. Ich implementierte Backend-Features, 
            die von Redakteuren angefragt wurden, aktualisierte TYPO3-Versionen bestehender Projekte und war am Relaunch mehrerer Webseiten beteiligt. Dabei kommunizierte ich direkt mit Kunden, schätzte Aufwände für die Umsetzung von Features und arbeitete 
            im Team an der Umsetzung der Projekte. Von der Entwicklung von Extensions über Middleware, Plugins und DataHandler bis hin zu Backend-Modulen kam ich dabei mit so ziemlich allem in Berührung, was TYPO3 zu bieten hat. Am meisten arbeitete ich 
            mit den Versionen TYPO3 12 und TYPO3 13. 
        </p>
    </template>
    </section>
</template>

<style scoped>
.divClock {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.divClock div {
    display: flex;
    flex-direction: row;
}

@media (max-width: 999px) {
    .divClock p {
        margin-top: 0;
    }
}

.divClockElement {
    font-size: 2em;

    gap: .5em;

    font-family: "Geist Mono", monospace;
}

.timelineContent {
    margin: .2em 0;
}
</style>