import { Tech } from "./projects"

import cppIcon from "@/assets/icons/cpp.svg"
import cssIcon from "@/assets/icons/css.svg"
import dockerIcon from "@/assets/icons/docker.svg"
import gitIcon from "@/assets/icons/git.svg"
import javaIcon from "@/assets/icons/java.svg"
import javascriptIcon from "@/assets/icons/javascript.svg"
import mongodbIcon from "@/assets/icons/mongodb.svg"
import nodejsIcon from "@/assets/icons/node.svg"
import postgresqlIcon from "@/assets/icons/postgressql.svg"
import pythonIcon from "@/assets/icons/python.svg"
import reactIcon from "@/assets/icons/react.svg"
import springIcon from "@/assets/icons/spring.svg"
import vuejsIcon from "@/assets/icons/vuedotjs.svg"
import numpyIcon from "@/assets/icons/numpy.svg"
import pygameIcon from "@/assets/icons/pygame.svg"
import expressIcon from "@/assets/icons/express.svg"
import htmlIcon from "@/assets/icons/html.svg"
import openglIcon from "@/assets/icons/OpenGL.svg"
import androidstudioIcon from "@/assets/icons/androidstudio.svg"
import influxdbIcon from "@/assets/icons/influxdb.svg"
import grafanaIcon from "@/assets/icons/grafana.svg"

export const BASE_URL = "http://localhost:5173/"
export const START_URL = BASE_URL.concat("#")
export const PROJECTS_URL = BASE_URL.concat("#projects")
export const EXPERIENCE_URL = BASE_URL.concat("#experience")
export const CONTACT_URL = BASE_URL.concat("#contact")

export const MAILTO = "mailto:2001kevin.schmidt@gmail.com";

export const LINKEDIN_URL = "https://www.linkedin.com/in/kevin-schmidt-31z/"

export const GITHUB_URL = "https://github.com/ksch01"

export const TIME_START_PROGRAMING = 1473253200000 + 1000 * 60 * 60

export const TECHS = {
    "androidstudio": new Tech(androidstudioIcon, "Android Studio"),
    "cpp": new Tech(cppIcon, "C++"),
    "css": new Tech(cssIcon, "CSS"),
    "docker": new Tech(dockerIcon, "Docker"),
    "express": new Tech(expressIcon, "Express.js"),
    "git": new Tech(gitIcon, "Git"),
    "grafana": new Tech(grafanaIcon, "Grafana"),
    "html": new Tech(htmlIcon, "HTML"),
    "influxdb": new Tech(influxdbIcon, "InfluxDB"),
    "java": new Tech(javaIcon, "Java"),
    "javascript": new Tech(javascriptIcon, "JavaScript"),
    "mongodb": new Tech(mongodbIcon, "MongoDB"),
    "nodejs": new Tech(nodejsIcon, "Node.js"),
    "numpy": new Tech(numpyIcon, "NumPy"),
    "opengl": new Tech(openglIcon, "OpenGL"),
    "postgresql": new Tech(postgresqlIcon, "PostgreSQL"),
    "pygame": new Tech(pygameIcon, "pygame"),
    "python": new Tech(pythonIcon, "Python"),
    "react": new Tech(reactIcon, "React"),
    "spring": new Tech(springIcon, "Spring"),
    "vuejs": new Tech(vuejsIcon, "Vue.js"),
}
