<script setup lang="ts">
const props = defineProps<{
    urlGithub: string
    urlDescarga: string
}>();

// Idiomas
import { useI18n } from 'vue-i18n'; 
const { t } = useI18n();
</script>


<template>
    <div class="links-proyecto-div-movil">
        <a :href="props.urlGithub" target="_blank">
            <div>            
                GITHUB               
            </div>
        </a>   
        <a :href="props.urlDescarga" target="_blank">
            <div>
                {{ t('link-descarga') }} 
            </div>
        </a>            
    </div>
</template>


<style>
    .links-proyecto-div-movil {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
    }
    .links-proyecto-div-movil a {
        outline: none;
        -webkit-tap-highlight-color: transparent;
    }
    .links-proyecto-div-movil > a div {
        cursor: pointer;
        height: 50px;
        max-width: 273px;
        width: calc(100vw - 50px);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .2s ease;
        border-radius: 100px;
        color: #FFF;
    }
    .links-proyecto-div-movil > a:first-child div {
        background-color: #000000b6;
        border: 4px solid #000000af;
    }
    .links-proyecto-div-movil > a:last-child div {
        background-color: rgba(47, 128, 0, 0.664);
        border: 4px solid rgba(62, 128, 0, 0.712);
    }
    .links-proyecto-div-movil > a:first-child:active div {
        background-color: #000000e0;
    }
    .links-proyecto-div-movil > a:last-child:active div {
        background-color: rgba(27, 70, 2, 0.877);
        border-color: rgba(27, 70, 2, 0.877);
    }
</style>