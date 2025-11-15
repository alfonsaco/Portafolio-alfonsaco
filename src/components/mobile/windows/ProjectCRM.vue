<script setup lang="ts">
import CapturaCRM from '../../../assets/images/crm_cap.webp';

// idiomas
import { useI18n } from 'vue-i18n'; 
const { t } = useI18n();
</script>


<template>
    <div class="proyecto-crm-contenedor">
        <div class="div-crm">
            <div class="crm-forma"></div>
            <img :src="CapturaCRM" alt="" class="crm-captura">
            <h1>CRM</h1>
            <p>{{ t('crm-descripcion') }}</p>

            <h4>{{ t('tecnologias-h4') }}</h4>
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

            <h4>{{ t('enlaces-h4') }}</h4>
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