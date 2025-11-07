<script setup lang="ts">

</script>


<template>
    <div class="proyecto-codezen-contenedor">
        <div class="div-codezen">

            <h4>tecnologías utilizadas</h4>
            <div class="codezen-div-tecnologias">
                <div>
                    <p class="codezen-tecnologia-p">Android Studio</p>
                    <p class="codezen-tecnologia-p">Java</p>
                    <p class="codezen-tecnologia-p">XLM</p>
                    <p class="codezen-tecnologia-p">Git</p>
                    <p class="codezen-tecnologia-p">GitHub</p>
                </div>
                <div>
                    <p class="codezen-tecnologia-p">Adobe Photoshop</p>
                    <p class="codezen-tecnologia-p">Firebase</p>
                    <p class="codezen-tecnologia-p">Firestore</p>
                    <p class="codezen-tecnologia-p">JSON</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
    .proyecto-codezen-contenedor {
        width: 100%;
        height: 100%;
        background-color: #3d3d3d;
        display: flex;
        justify-content: center;
    }
    .proyecto-codezen-contenedor * {
        margin: 0;
    }

    /* ESTILOS GENERALES */
    .proyecto-codezen-contenedor h4 {
        color: #C5562F;
        margin: 40px 0px 10px 0px;
    }

    .div-codezen {
        height: 100%;
        width: 700px;
        background-color: #eeeeee;
        padding: 25px 10px 55px 10px;
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }


     /* DIV DE TECNOLOGÍAS */
    .codezen-div-tecnologias {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 12px;
    }
    .codezen-div-tecnologias > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }
    .codezen-tecnologia-p {
        color: #ffffff;
        padding: 4px 18px;
        font-weight: 500;
        border-radius: 50px;
        background-color: #005b6381;
        border: 1px solid #005A63;
    }
</style>