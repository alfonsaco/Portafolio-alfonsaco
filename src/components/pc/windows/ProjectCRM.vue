<script setup lang="ts">

</script>


<template>
    <div class="proyecto-crm-contenedor">
        <div class="div-crm">

            <h4>tecnologías utilizadas</h4>
            <div class="crm-div-tecnologias">
                <div>
                    <p class="crm-tecnologia-p">Java</p>
                    <p class="crm-tecnologia-p">IntelliJ IDEA</p>
                    <p class="crm-tecnologia-p">JavaFX</p>
                    <p class="crm-tecnologia-p">SQL</p>
                    <p class="crm-tecnologia-p">Maven</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
    .proyecto-crm-contenedor {
        width: 100%;
        height: 100%;
        background-color: #3d3d3d;
        display: flex;
        justify-content: center;
    }
    .proyecto-crm-contenedor * {
        margin: 0;
    }

    
    .div-crm {
        height: 100%;
        width: 700px;
        background-color: #eeeeee;
        padding: 25px 10px 55px 10px;
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
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
    }
</style>