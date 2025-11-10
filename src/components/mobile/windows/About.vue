<script setup lang="ts">

</script>


<template>
    <div class="ventana-sobre-mi">
        <h1>SOBRE MÍ</h1>
        <p class="texto-about">Desarrollador Full-Stack y de aplicaciones Multiplataforma</p>
        <hr>

        <h4>CONOCIMIENTOS Y HABILIDADES</h4>
        <h5>LENGUAJES</h5>
        <p>Java • HTML • CSS • JavaScript • TypeScript • SQL • NoSQL</p>
        <h5>FRAMEWORKS</h5>
        <p>Vue • React Native • JavaFX • NodeJS</p>
        <h5>ENTORNOS Y HERRAMIENTAS</h5>
        <p>Visual Studio • Android Studio • IntelliJ IDEA • GitHub • Firebase</p>

        <h4>IDIOMAS</h4>
        <p>Español <span>(Nativo)</span> — Inglés <span>(B1)</span></p>

        <hr>

        <h4>PROYECTOS</h4>
        <p>Todos los proyectos los podrás encontrar dentro de la carpeta situada en la parte izquierda del escritorio.</p>
        <h4>EXPERIENCIA</h4>
        <p>Marzo 2025 - Junio 2025</p>
        <p class="ventana-p-borrador">&gt;&gt; Creación de CRM completo con JavaFX durante 3 meses</p>

        <hr>

        <h4>CONTACTO</h4>
        <p class="ventana-corchete">&#123;</p>
        <ul>
            <li><span class="ventana-tag">"GitHub"</span> : <span class="ventana-valor"><a href="https://www.github.com/alfonsaco" target="_blank">"alfonsaco"</a></span>,</li>
            <li><span class="ventana-tag">"LinkedIn"</span> : <span class="ventana-valor"><a href="https://www.linkedin.com/in/alfonsorinconc/" target="_blank">"https://www.linkedin.com/in/alfonsorinconc/"</a></span>,</li>
            <li><span class="ventana-tag">"Email"</span> : <span class="ventana-valor"><a href="mailto:alfonso.rincondev@gmail.com" target="_blank">"alfonso.rincondev@gmail.com"</a></span>,</li>
        </ul>
        <p class="ventana-corchete">&#125;</p>
    </div>
</template>


<style>
    @font-face {
        font-family: 'Cascadia';
        src: url('../../../assets/fonts/cascadia.woff2') format('woff2'),
             url('../../../assets/fonts/cascadia.woff') format('woff');
        font-display: swap;
    }

    .ventana-sobre-mi {
        padding: 15px 20px;
        width: 100%;
        height: 100%;
        background-color: #282C34;
        text-align: left;
        user-select: text;
        color: #d1d0d0;
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        padding-bottom: 25px;
    }
    .ventana-sobre-mi * {
        margin: 0;
        font-family: 'Cascadia', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .ventana-sobre-mi *::selection {
        background-color: #9fb2bf7e;
        color: #F0DC55;
    }

    .ventana-sobre-mi hr {
        margin: 30px 15px 20px 15px;
        border-color: #f0db554f;
    }

    /* TEXTOS */
    .ventana-sobre-mi h1 {
        text-align: center;
        color: #9FB2BF;
        font-size: 2.4em;
        margin-bottom: 6px;
    }
    .texto-about {
        text-align: center;
    }
    .ventana-sobre-mi h4 {
        color: #D18D4E;
        margin-top: 30px;
    }
    .ventana-sobre-mi h5 {
        color: #f0cc55;
        margin-top: 8px;
        font-size: .95em;
    }
    .ventana-sobre-mi span {
        color: #69bbab;
    }
    .ventana-p-borrador {
        color: #a1a1a1;
    }
    .ventana-sobre-mi ul {
        list-style: none;
    }
    .ventana-sobre-mi ul a, .ventana-valor {
        color: #73b758;
    }
    .ventana-tag {
        color: #DE6B74;
    }
    .ventana-corchete {
        color: #B870D6;
    }
</style>