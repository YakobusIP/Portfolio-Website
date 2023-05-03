<script setup lang="ts">
defineProps({
    imgSrc: String,
    text: String,
});
</script>

<template>
    <div
        class="flex flex-col bg-navbar drop-shadow-xl p-8 rounded-xl justify-center items-center w-full h-full"
    >
        <div class="w-32 h-32">
            <img :src="imgSrc" />
        </div>
        <p>{{ text }}</p>
    </div>
</template>
