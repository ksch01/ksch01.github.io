<script setup lang="ts">
import Expandable from './Expandable.vue'
import NavLink from './NavLink.vue'
import { START_URL, PROJECTS_URL, EXPERIENCE_URL, CONTACT_URL, LINKEDIN_URL, GITHUB_URL } from '@/const.ts'
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const menuOpen = ref(false)

const activeSection = ref('about')

let observer: IntersectionObserver | null = null
let headerHeight = 0;

watch(
    () => route.name,
    () => createSectionObserver(),
    { immediate: true }
)

onMounted(() => {
    const header = document.querySelector('header')
    headerHeight = header?.getBoundingClientRect().height ?? 0
})

onUnmounted(() => {
    observer?.disconnect()
})

async function createSectionObserver(){
    observer?.disconnect()

    await nextTick()

    const sections = document.querySelectorAll('section[id]')

    if (!sections.length) {
        return
    }

    observer = new IntersectionObserver(
        (entries) => {
            const visibleSections = entries
                .filter(entry => entry.isIntersecting)

            if (visibleSections.length > 0) {
                if (visibleSections[0] != undefined)
                  activeSection.value = visibleSections[0].target.id
            }
        },
        {
            rootMargin: `-${headerHeight}px 0px -${window.innerHeight - headerHeight - 1}px 0px`,
            threshold: 0
        }
    )

    sections.forEach(section => observer!.observe(section))
}

function isSection(section: string) : boolean{
  return activeSection.value === section
}
</script>

<template>
  <nav class="content desktop">
    <ul id="ulNavPages" class="ulNav">
      <NavLink title="Start" :href="START_URL" :active="isSection('about')">
          <svg class="svgNav" viewBox="0 0 32 32" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path id="rect1" d="M 0,0 V 32.000114 H 16.000057 V 15.957166 A 16,16 0 0 0 0,0 Z" />
            <path id="path2" d="m 41.671022,12.156708 2e-6,17.941229 0,17.941227 -15.53756,-8.970613 -15.537559,-8.970613 15.537559,-8.970616 z" transform="matrix(0.51488136,0,0,0.89180072,10.544366,-10.841361)" />
          </svg>
      </NavLink>
      <NavLink title="Porjekte" :href="PROJECTS_URL" :active="isSection('projects')"/>
      <NavLink title="Erfahrung" :href="EXPERIENCE_URL" :active="isSection('experience')"/>
      <NavLink title="Kontakt" :href="CONTACT_URL" :active="isSection('contact')"/>
    </ul>
    <ul id="ulNavSocials" class="ulNav">
      <NavLink title="" :href="GITHUB_URL">
        <svg class="svgNav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/>
        </svg>
      </NavLink>
      <NavLink title="" :href="LINKEDIN_URL">
        <svg class="svgNav" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
        </svg>
      </NavLink>
    </ul>
  </nav>

  <div class="content mobile">
    <Expandable v-model="menuOpen">
      <template v-slot:header>
        <div class="header">
          <svg class="svgNav" viewBox="0 0 32 32" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path id="rect1" d="M 0,0 V 32.000114 H 16.000057 V 15.957166 A 16,16 0 0 0 0,0 Z" />
            <path id="path2" d="m 41.671022,12.156708 2e-6,17.941229 0,17.941227 -15.53756,-8.970613 -15.537559,-8.970613 15.537559,-8.970616 z" transform="matrix(0.51488136,0,0,0.89180072,10.544366,-10.841361)" />
          </svg>
        </div>
      </template>
      <template v-slot:icon>
        <span class="icon">
          <template v-if="menuOpen">&#10005</template>
          <template v-else>☰</template>
        </span>
      </template>
      <template v-slot:content>
        <nav class="navMobile">
          <ul id="ulNavPages" class="ulNav">
            <NavLink title="Start" :href="START_URL"/>
            <NavLink title="Porjekte" :href="PROJECTS_URL"/>
            <NavLink title="Erfahrung" :href="EXPERIENCE_URL"/>
            <NavLink title="Kontakt" :href="CONTACT_URL"/>
          </ul>
          <ul id="ulNavSocials" class="ulNav">
            <NavLink title="" :href="GITHUB_URL">
              <svg class="svgNav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/>
              </svg>
            </NavLink>
            <NavLink title="" :href="LINKEDIN_URL">
              <svg class="svgNav" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </NavLink>
          </ul>
        </nav>
      </template>
    </Expandable>
  </div>
</template>

<style scoped>
nav {
  width: 100%;

  display: none;
  color: var(--color-secondary);
  justify-content: space-between;
}

:deep(.expandableHeaderContent) {
  padding: 0;
  flex-grow: 0;
}
:deep(.expandableContentInner) {
  padding-bottom: 0;
}

:deep(.expandableHeader) {
  justify-content: center;
  padding: 1em 0;
}

.icon {
  color: var(--color-secondary);
  font-size: 1.5em;
}

.burger {
  background-color: var(--color-primary);
  font-size: 1.5em;
}

.mobile {
  width: 100%;
}

.navMobile {
  display: flex;
  flex-direction: row-reverse;
}
.navMobile .ulNav{
  flex-direction: column;
}

.header {
  display: flex;
  height: 36px;
  align-items: center;
}

.ulNav {
  width: 100%;

  font-size: 16px;

  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

#ulNavSocials {
  justify-content: flex-end;
}
.navMobile #ulNavSocials {
  flex-grow: 1;
}
.navMobile #ulNavPages {
  align-items: center;
  flex-grow: 0;
  width: auto;
}

.desktop li {
  margin-top: 0;
  
  display: flex;
  align-items: center;
}

.navMobile li {
  padding: 0;
}

.svgNav {
    width: 2em;
    height: 2em;
    flex-shrink: 0;

    color: var(--color-secondary);
}

@media (min-width: 700px) {
  .desktop {
    display: flex;
  }

  .mobile {
    display: none;
  }
}
</style>