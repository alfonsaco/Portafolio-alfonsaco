<script setup lang="ts">

</script>


<template>
    <div class="ventana-sobre-mi">
        <h1>SOBRE MI</h1>
        <p>Desarrollador FullTsack y de aplicaciones Multiplataforma</p>
        <hr>

        <h4>TECNOLOGÍAS</h4>
        <p>HTML | CSS | JavaScript</p>
        <hr>

        <h4>PROYECTOS</h4>
        <p>Todos los proyectos los puedes encontrar en las carpetas izquierdas del escritorio</p>
        <h4>EXPERIENCIA</h4>
        <p class="ventana-p-borrador">&gt;&gt; Creación de CRM completo con JavaFX durante 3 meses</p>
        <hr>

        <h4>CONTACTO</h4>
        <p class="ventana-corchete">&#123;</p>
        <ul>
            <li><span class="ventana-tag">"GitHub"</span> : <span class="ventana-valor"><a href="https://www.github.com/alfonsaco" target="_blank">"alfonsaco"</a></span>,</li>
            <li><span class="ventana-tag">"LinkedIn"</span> : <span class="ventana-valor"><a href="https://www.linkedin.com/in/alfonso-rinc%C3%B3n-cuerva-02a0a42b6/" target="_blank">"https://www.linkedin.com/in/alfonso-rinc%C3%B3n-cuerva-02a0a42b6/"</a></span>,</li>
            <li><span class="ventana-tag">"Email"</span> : <span class="ventana-valor"><a href="mailto:alfonso.rincondev@gmail.com" target="_blank">"alfonso.rincondev@gmail.com"</a></span>,</li>
        </ul>
        <p class="ventana-corchete">&#125;</p>
    </div>
</template>


<style>
    @font-face {
        font-family: 'Cascadia';
        src: url('../../../assets/fonts/cascadia.ttf');
    }

    .ventana-sobre-mi {
        padding: 15px 20px;
        font-family: 'Cascadia';
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
    }
    .ventana-sobre-mi *::selection {
        background-color: #9fb2bf7e;
        color: #F0DC55;
    }

    .ventana-sobre-mi hr {
        margin: 20px 15px;
        border-color: #f0db554f;
    }

    /* TEXTOS */
    .ventana-sobre-mi h1 {
        text-align: center;
        color: #9FB2BF;
        font-size: 2.4em;
    }
    .ventana-sobre-mi h4 {
        color: #D18D4E;
        margin-top: 20px;
    }
    .ventana-sobre-mi p {

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