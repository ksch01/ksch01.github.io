<script setup lang="ts">
import Hero from "./Hero.vue"
import IconLinks from "./IconLinks.vue"
import IconList from "./IconList.vue"
import Expandable from "./Expandable.vue"
import Video from "./Video.vue"
import {TECHS} from "@/const.ts"
import soundcommsample from "@/assets/videos/soundcomm-sample-1.mp4"
</script>

<template>
    <h3 class="hSubsection">Projekte im Studium</h3>
    <Expandable>
        <template v-slot:header>
            <div class="projectHeader">
                <h3>Desktopanwendung: Drahtlose Datenübertragung im Audiofrequenzbereich</h3>
                <div class="projectHeaderIcons">
                    <IconList :techs="[TECHS.numpy, TECHS.git, TECHS.python]"/>
                </div>
            </div>
        </template>
        <template v-slot:content>
            <Hero side="right">
                <template v-slot:left>
                    <Video :src="soundcommsample"/>
                </template>
                <template v-slot:right>
                    <p> 
                        Der Titel meiner Bachelorarbeit lautet „Entwicklung einer interaktiven Anwendung zur Visualisierung drahtloser Datenübertragung im Audiofrequenzbereich“. 
                        Die Arbeit erhielt die Note 1,8. Dabei ist eine Anwendung entstanden, mit der Nutzer den Audiofrequenzbereich über ein Mikrofon beobachten und Signale über Lautsprecher senden können. 
                        Die Idee entstand daraus, dass die Eigenschaften drahtloser Datenübertragung im Audiofrequenzbereich denen im elektromagnetischen Frequenzbereich ähneln. 
                    </p>
                    <p> Die Anwendung entwickelte ich in Python. Für die Benutzeroberfläche nutzte ich pygame und für die Datenverarbeitung numpy. UI-Elemente wie Eingabefelder und Slider 
                        sowie die Darstellung der Graphen entwickelte ich selbst. Der Kern der Anwendung war allerdings das Senden und Empfangen von Signalen. Dafür entwickelte ich den gesamten Prozess selbst – 
                        vom Datenmapping über Sende- und Empfangsfilter bis hin zu Modulation und Demodulation. 
                    </p>
                </template>
            </Hero>
            <IconLinks github="https://github.com/ksch01/SoundComm"/>
        </template>
    </Expandable>
    <hr style="margin: 0"/>
    <Expandable>
        <template v-slot:header>
            <div class="projectHeader">
                <h3>Webanwendung: Kartenanwendung mit Markerverwaltung</h3>
                <div class="projectHeaderIcons">
                    <IconList :techs="[TECHS.mongodb, TECHS.express, TECHS.git, TECHS.javascript]"/>
                </div>
            </div>
        </template>
        <template v-slot:content>
            <p> 
                Bei diesem Projekt handelte es sich um eine Webanwendung mit Google-Maps-Integration. Zusammen mit einem weiteren Studierenden entwickelte ich eine Anwendung, 
                bei der Nutzer im Frontend Marker auf einer Karte erstellen, beschriften und mit anderen Nutzern teilen oder als privat markieren konnten. Die Daten wurden im Backend über MongoDB gespeichert und 
                bereitgestellt. Für das Backend nutzten wir Express und für das Frontend Vanilla JavaScript, HTML und CSS. 
            </p>
            <IconLinks github="https://github.com/tuanthanh078/KeTu-WAD2021/"/>
        </template>
    </Expandable>
    <hr style="margin: 0"/>
    <Expandable>
        <template v-slot:header>
            <div class="projectHeader">
                <h3>Computerspiel: 3D-Flugzeugspiel mit prozedural generierter Landschaft</h3>
                <div class="projectHeaderIcons">
                    <IconList :techs="[TECHS.opengl, TECHS.cpp]"/>
                </div>
            </div>
        </template>
        <template v-slot:content>
            <p> 
                Ein weiteres Projekt war ein kleines Computerspiel, das in C++ implementiert wurde und OpenGL, GLM und GLFW nutzte. Der Spieler konnte dabei ein Flugzeug in einer dreidimensionalen Szene durch ein 
                Gebirge steuern. Flugzeug und Landschaft waren texturiert und nutzten einen selbst implementierten Shader mit einfachem diffusem und Phong-Shading. Das Gebirge wurde dabei inklusive Vertices, UVs und 
                Normalen auf Basis eines Perlin-Noise-Algorithmus zufällig generiert. 
            </p> 
            <p> 
                Allerdings fehlte diesem Projekt mehr, als es zu bieten hatte. Aufgrund des engen Zeitrahmens gab es beispielsweise weder Kollisionen noch eine Begrenzung des Levels oder überhaupt einen Grund, 
                aus dem es sich lohnen würde, das Spiel zu spielen. 
            </p>
        </template>
    </Expandable>
    <hr style="margin: 0"/>
    <Expandable>
        <template v-slot:header>
            <div class="projectHeader">
                <h3>Webanwendung: Preise von PC-Hardware Konfigurationen</h3>
                <div class="projectHeaderIcons">
                    <IconList :techs="[TECHS.docker, TECHS.spring, TECHS.react, TECHS.git, TECHS.java]"/>
                </div>
            </div>
        </template>
        <template v-slot:content>
            <p> 
                Im Studium entwickelte ich außerdem ein kleines Microservice-System. Dabei handelte es sich um eine Webanwendung, in der man über ein Frontend auf die Preise verschiedener PC-Komponenten wie CPUs und 
                Grafikkarten zugreifen und daraus verschiedene Konfigurationen zusammenstellen konnte. Das Backend bestand aus zwei Services. Einer lieferte die Daten der Hardware-Komponenten, also beispielsweise Name und 
                Preis, aus einer Datenbank, während ein weiterer Service die Preise in verschiedene Währungen umrechnete. 
            </p> 
            <p> 
                Das Projekt setzte ich zusammen mit zwei weiteren Studierenden um. Ich war unter anderem für das auf React basierende Frontend zuständig. Zusätzlich übernahm ich Teile des PC-Komponenten-Backends, das auf 
                Java und Spring Boot basierte. Das Projektmanagement erfolgte über Tickets auf einem Kanban-Board. 
            </p>
            <IconLinks github="https://github.com/tuanthanh078/KBE-SS2022-Microservices"/>
        </template>
    </Expandable>
    <hr style="margin: 0"/>
    <Expandable>
        <template v-slot:header>
            <div class="projectHeader">
                <h3>Mobile Anwendung: Multiplayer Kartenspiel über Bluetooth</h3>
                <div class="projectHeaderIcons">
                    <IconList :techs="[TECHS.opengl, TECHS.androidstudio, TECHS.git, TECHS.java]"/>
                </div>
            </div>
        </template>
        <template v-slot:content>
            <p> 
                Während meines Studiums entwickelte ich außerdem eine Android-App. Dabei handelte es sich um einen Proof of Concept für ein Multiplayer-Kartenspiel, bei dem Nutzer Spielkarten frei bewegen können und die 
                Kommunikation zwischen den Geräten ausschließlich über Bluetooth erfolgt. Aufgrund des engen Zeitrahmens konnten nicht alle geplanten Funktionen implementiert werden. Am Ende entstand jedoch eine Anwendung, 
                in der Nutzer von zwei Geräten einem gemeinsamen Raum beitreten und dort Karten und Kartenstapel bewegen, drehen und Karten ziehen können. 
            </p> 
            <p> 
                Im Verlauf des Projekts stellte sich heraus, dass Bluetooth für diesen Anwendungsfall nur bedingt geeignet ist, da keine Möglichkeit bestand, eine Nachricht gleichzeitig an alle verbundenen Geräte zu 
                übertragen. Bei der gleichzeitigen Nutzung durch mehrere Geräte führte dies zu erheblichen Verzögerungen. Für die Umsetzung nutzte ich Android Studio und Java. Die Darstellung der Karten und weiterer 
                grafischer Elemente erfolgte mit OpenGL ES. 
            </p> 
            <p> 
                Das Projekt war ursprünglich als Gruppenarbeit mit zwei weiteren Studierenden vorgesehen. Letztlich übernahm ich jedoch die vollständige Umsetzung des Projekts. Dabei wurde mir bewusst, wie wichtig es ist, 
                Verantwortlichkeiten innerhalb eines Teams frühzeitig zu klären und den Fortschritt regelmäßig zu überprüfen.
            </p>
            <IconLinks github="https://github.com/ksch01/VirtualCards"/>
        </template>
    </Expandable>
    <hr style="margin: 0">
    <Expandable>
        <template v-slot:header>
            <div class="projectHeader">
                <h3>IoT-Anwendung: Remote-Temperaturmessung über One-Wire</h3>
                <div class="projectHeaderIcons">
                    <IconList :techs="[TECHS.grafana, TECHS.influxdb, TECHS.python]"/>
                </div>
            </div>
        </template>
        <template v-slot:content>
            <p> 
                In einem Projekt entwickelte ich mit MicroPython ein Programm, das auf einem ESP32 lief. Diesen platzierte ich auf einem Breadboard und verband ihn über One-Wire mit drei Temperatursensoren. Der 
                Mikrocontroller übermittelte anschließend regelmäßig per WLAN über MQTT Messdaten an einen Broker. 
            </p> 
            <p> 
                Mit Node-RED implementierte ich ein Backend, das zwei Aufgaben erfüllte. Einerseits speicherte es alle Daten, die unter festgelegten Topics an den Broker gesendet wurden, in einer Time-Series-Datenbank. 
                Andererseits nahm es Anfragen entgegen, die ein Telegram-Bot sendete, und antwortete entsprechend mit den Daten aus der Datenbank. So konnte man beispielsweise über eine Nachricht an den Telegram-Bot die 
                aktuellen Messungen oder den letzten Status bestimmter Sensoren abfragen. 
            </p> 
            <p>
                Zusätzlich erstellte ich ein Grafana-Dashboard, das direkt an die InfluxDB-Instanz angebunden war und unter anderem die Visualisierung der Messwerte über festgelegte Zeiträume in Form von Graphen
                ermöglichte. 
            </p>
        </template>
    </Expandable>
</template>

<style scoped>
.projectHeader {
    display: flex;

    gap: 1em;

    align-items: center;
    justify-content: space-between;

    flex-wrap: wrap;
}

.projectHeaderIcons {
    display: flex;

    justify-content: flex-end;
    
    flex-grow: 1;
}
</style>