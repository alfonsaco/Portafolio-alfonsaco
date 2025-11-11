<script setup lang="ts">
const props = defineProps<{
    urlGithub: string
    urlDescarga: string
}>();
</script>


<template>
    <div class="links-proyecto-div-movil">
        <div>
            <a :href="props.urlGithub" target="_blank">
                GITHUB
            </a>            
        </div>
        <div>
            <a :href="props.urlDescarga" target="_blank">
                DESCARGAR
            </a>            
        </div>
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
    .links-proyecto-div-movil > div {
        cursor: pointer;
        height: 50px;
        width: 273px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .2s ease;
        border-radius: 100px;
    }
    .links-proyecto-div-movil a {
        color: #FFF;
    }
    .links-proyecto-div-movil > div:first-child {
        background-color: #000000b6;
        border: 4px solid #000000af;
    }
    .links-proyecto-div-movil > div:last-child {
        background-color: rgba(47, 128, 0, 0.664);
        border: 4px solid rgba(62, 128, 0, 0.712);
    }
    .links-proyecto-div-movil > div:first-child:active {
        background-color: #000000e0;
    }
    .links-proyecto-div-movil > div:last-child:active {
        background-color: rgba(27, 70, 2, 0.877);
        border-color: rgba(27, 70, 2, 0.877);
    }
</style>