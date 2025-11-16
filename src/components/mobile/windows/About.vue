<script setup lang="ts">
// idiomas
import { useI18n } from 'vue-i18n'; 
const { t } = useI18n();
</script>


<template>
    <div class="ventana-sobre-mi">
        <h1>{{ t('sobremi') }}</h1>
        <p class="texto-about">{{ t('descripcion-sobremi') }}</p>
        <hr>

        <h4>{{ t('conocimientos') }}</h4>
        <h5>{{ t('lenguajes') }}</h5>
        <p>Java • HTML • CSS • JavaScript • TypeScript • SQL • NoSQL</p>
        <h5>{{ t('frameworks') }}</h5>
        <p>Vue • React Native • JavaFX • NodeJS</p>
        <h5>{{ t('entornos') }}</h5>
        <p>Visual Studio • Android Studio • IntelliJ IDEA • GitHub • Firebase</p>

        <h4>{{ t('idiomas') }}</h4>
        <p>{{ t('idioma-1') }} <span>({{ t('idioma-1-1') }})</span> — {{ t('idioma-2') }} <span>(B1)</span></p>

        <hr>

        <h4>{{ t('proyectos-sobremi') }}</h4>
        <p>{{ t('proyectos-p') }}</p>
        <h4>{{ t('experiencia') }}</h4>
        <p>{{ t('experiencia-1') }}</p>
        <p class="ventana-p-borrador">{{ t('experiencia-1-1') }}</p>

        <hr>

        <h4>{{ t('contacto') }}</h4>
        <p class="ventana-corchete">&#123;</p>
        <ul>
            <li><span class="ventana-tag">"GitHub"</span> : <span class="ventana-valor"><a href="https://www.github.com/alfonsaco" target="_blank">"alfonsaco"</a></span>,</li>
            <li><span class="ventana-tag">"LinkedIn"</span> : <span class="ventana-valor"><a href="https://www.linkedin.com/in/alfonsorinconc/" target="_blank">"in/alfonsorinconc/"</a></span>,</li>
            <li><span class="ventana-tag">"Email"</span> : <span class="ventana-valor"><a href="mailto:alfonso.rincondev@gmail.com" target="_blank">"alfonso.rincondev@gmail.com"</a></span>,</li>
        </ul>
        <p class="ventana-corchete">&#125;</p>
    </div>
</template>


<style>

</style>