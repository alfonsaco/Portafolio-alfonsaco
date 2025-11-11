<script setup lang="ts">
const props = defineProps<{
    urlGithub: string
    urlDescarga: string
}>();
</script>


<template>
    <div class="links-proyecto-div">
        <a :href="props.urlGithub" target="_blank">
            <div>            
                GITHUB            
            </div>
        </a>            
        <a :href="props.urlDescarga" target="_blank">
            <div>            
                DESCARGAR            
            </div>
        </a>            
    </div>
</template>


<style>
    .links-proyecto-div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
    .links-proyecto-div > a div {
        cursor: pointer;
        height: 50px;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .2s ease;
        color: #FFF;
    }
    .links-proyecto-div > a:first-child div {
        background-color: #000000b6;
        border: 4px solid #000000af;
        border-top-left-radius: 100px;
        border-bottom-left-radius: 100px;
    }
    .links-proyecto-div > a:last-child div {
        background-color: rgba(47, 128, 0, 0.664);
        border: 4px solid rgba(62, 128, 0, 0.712);
        border-top-right-radius: 100px;
        border-bottom-right-radius: 100px;
    }
    .links-proyecto-div > a:first-child:hover div {
        background-color: #383838b6;
    }
    .links-proyecto-div > a:last-child:hover div {
        background-color: rgba(74, 189, 7, 0.664);
    }
    .links-proyecto-div > a:first-child:active div {
        background-color: #000000e0;
    }
    .links-proyecto-div > a:last-child:active div {
        background-color: rgba(27, 70, 2, 0.877);
        border-color: rgba(27, 70, 2, 0.877);
    }
</style>