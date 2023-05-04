<script setup lang="ts">
import { ref, onMounted } from "vue";

const myImage = ref<HTMLImageElement>();

onMounted(() => {
    myImage.value?.addEventListener("load", () => {
        setTimeout(() => {
            myImage.value?.classList.remove("opacity-0");
            myImage.value?.classList.add("animate-image-in");
        }, 100);
    });
});
</script>

<template>
    <div class="relative flex flex-1 items-center justify-center px-32 gap-x-8">
        <div class="flex flex-col text-white w-2/3">
            <h4
                class="text-3xl overflow-hidden animate-hello-typing whitespace-nowrap"
            >
                Hello, my name is
            </h4>
            <h1 class="font-extrabold text-6xl my-8 animate-home-text-in">
                Yakobus Iryanto Prasethio
            </h1>
            <div class="animate-home-text-in">
                I am a
                <em class="not-italic text-xl">THIRD YEAR STUDENT</em>
                studying for
                <em class="not-italic text-xl"
                    >INFORMATION TECHNOLOGY BACHELORS</em
                >
                at
                <em class="not-italic text-xl">INSTITUT TEKNOLOGI BANDUNG</em>.
                I am very keen on web development, both front-end and back-end,
                and I <em class="not-italic text-[#eb4034]">love</em> it to
                bits.
            </div>
        </div>

        <img
            loading="lazy"
            ref="myImage"
            src="Transparent Foto-min.png"
            class="w-[25rem] h-[37.5rem] opacity-0"
        />
    </div>
</template>
