<script setup lang="ts">
import CapturaCRM from '../../../assets/images/crm_cap.webp';
</script>


<template>
    <div class="proyecto-crm-contenedor">
        <div class="div-crm">
            <div class="crm-forma"></div>
            <img :src="CapturaCRM" alt="" class="crm-captura">
            <h1>CRM</h1>
            <p>CRM desarrollado en Java con JavaFX y MySQL, realizado junto con un compañero 
                durante las prácticas de DAM. Permite gestionar usuarios, clientes y tareas 
                con una interfaz sencilla y funcional. El proyecto es educativo y demostrativo,
                 sin referencias a empresas reales, y muestra las habilidades adquiridas en 
                 programación y bases de datos.</p>

            <h4>TECNOLOGÍAS UTILIZADAS</h4>
            <div class="crm-div-tecnologias">
                <div>
                    <p class="crm-tecnologia-p">Java</p>
                    <p class="crm-tecnologia-p">IntelliJ IDEA</p>
                    <p class="crm-tecnologia-p">JavaFX</p>
                    <p class="crm-tecnologia-p">SQL</p>
                    <p class="crm-tecnologia-p">Maven</p>
                </div>
            </div>

            <h4>ENLACES</h4>
            <div class="crm-enlace">
                <div>
                    <a href="https://github.com/alfonsaco/ConsultoriaCRM" target="_blank">
                        GITHUB
                    </a>            
                </div>
            </div>
        </div>
    </div>
</template>


<style>
    @font-face {
        font-family: 'Poppins';
        src: url('../../../assets/fonts/poppins.woff2') format('woff2');
    }
    @font-face {
       font-family: 'Poppins Bold';
        src: url('../../../assets/fonts/poppins_bold.woff2') format('woff2');
    }


    .proyecto-crm-contenedor {
        width: 100%;
        height: 100%;
        background-color: #3d3d3d;
        display: flex;
        justify-content: center;
        color: #13243C;
    }
    .div-crm {
        height: 100%;
        width: 700px;
        background-color: #ffffff;
        padding: 160px 30px 55px 30px;
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        position: relative;
    }

    /* ESTILOS GENERALES */
    .proyecto-crm-contenedor * {
        margin: 0;
        font-family: 'Poppins';
    }
    .proyecto-crm-contenedor p {
        text-align: justify;
        font-size: .9em;
    }
    .proyecto-crm-contenedor h1 {
        font-family: 'Poppins Bold';
        font-size: 3.3em;
    }
    .proyecto-crm-contenedor h4 {
        margin: 40px 0px 10px 0px;
        font-family: 'Poppins Bold';
        font-size: 1.2em;
    }


    /* SECCIÓN TÍTULO */
    .crm-forma {
        background-color: #13243C;
        width: 750px;
        height: 120px;
        border-radius: 100%;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        position: absolute;
        top: 0px;
        left: -25px;
    }
    .crm-captura {
        width: 300px;
        position: absolute;
        border-radius: 10px;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        filter: drop-shadow(0px 0px 10px #13243C);
        transition: .2s ease;
    }
    .crm-captura:hover {
        transform: translateX(-50%) translateY(20px);
    }


     /* DIV DE TECNOLOGÍAS */
    .crm-div-tecnologias {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 12px;
    }
    .crm-div-tecnologias > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }
    .crm-tecnologia-p {
        color: #474747;
        padding: 4px 18px;
        font-weight: 500;
        border-radius: 50px;
        background-color: #b5c9364b;
        border: 1px solid #b0c430;
        cursor: pointer;
        transition: .2s ease;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .crm-tecnologia-p:hover {
        background-color: #6270084b;
    }


    /* ENLACE GITHUB */
    .crm-enlace {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .crm-enlace > div {
        background-color: #000000b6;
        border: 4px solid #000000af;
        border-radius: 100px;
        height: 50px;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .crm-enlace > div a {
        color: #FFF;
    }
    .crm-enlace > div:hover {
        background-color: #383838b6;
    }
    .crm-enlace > div:active {
        background-color: #000000e0;
    }
</style>