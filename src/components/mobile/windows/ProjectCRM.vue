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
                </div>
                <div>
                    <p class="crm-tecnologia-p">SQL</p>
                    <p class="crm-tecnologia-p">Maven</p>
                </div>
            </div>

            <h4>ENLACES</h4>
            <div class="crm-enlace crm-enlace-movil">
                <a href="https://github.com/alfonsaco/ConsultoriaCRM" target="_blank">
                    <div>                    
                        GITHUB                    
                    </div>
                </a>            
            </div>
        </div>
    </div>
</template>


<style>
    .crm-enlace-movil a div {
        max-width: 330px;
        width: calc(100vw - 70px);
    }
</style>