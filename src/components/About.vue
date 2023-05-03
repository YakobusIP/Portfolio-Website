<script setup lang="ts">
import StackCard from "./StackCard.vue";

const techStack = [
    {
        imgSrc: "../../public/react.png",
        position: "row-start-1 col-start-1",
        message:
            "I've used ReactJS in several website projects and has since become one of my favorite front-end libraries to develop with.",
    },
];
</script>

<template>
    <div
        class="relative flex flex-col flex-1 items-center justify-center gap-y-16 px-32"
    >
        <div class="flex text-white justify-center items-center mt-16 animate-home-text-in">
            <div class="rounded-full w-80 h-80 overflow-hidden bg-white">
                <img
                    class="h-[22.5rem] w-60 m-auto"
                    src="../../public/Foto Diri Ukuran Kecil.jpg"
                />
            </div>
            <div class="w-2/3 px-12">
                <h1 class="text-3xl">Hello</h1>
                <p>Pleasure to meet you</p>
                <p>
                    My name is Yakobus Iryanto Prasethio and I'm very interested
                    in web development, both front-end and back-end. I'm
                    currently in my penultimate year at Institut Teknologi
                    Bandung. I'm actively looking for new opportunities to learn
                    new things and improve.
                </p>
            </div>
        </div>
        <div class="flex text-white text-center justify-center mt-16">
            <div class="w-2/3 px-12">
                <p>
                    I have created a few projects for my semester assignments at
                    the university (most of which are team projects), the most
                    recent one being PustakaApp, a website used for libraries.
                    I've also done a solo project, which is BNMO Banking, a
                    pseudo-banking website.
                </p>
            </div>
            <div class="rounded-full w-80 h-80 overflow-hidden bg-white">
                <img
                    class="h-[22.5rem] w-60 m-auto"
                    src="../../public/Foto Diri Ukuran Kecil.jpg"
                />
            </div>
        </div>
        <div
            class="flex flex-col w-full text-white text-center justify-center mt-16 gap-y-8"
        >
            <h1 class="text-3xl">Tech stack I've used before</h1>
            <div
                v-for="stack in techStack"
                class="grid grid-cols-2 grid-rows-6"
            >
                <StackCard
                    :class="stack.position"
                    :img-src="stack.imgSrc"
                    :text="stack.message"
                ></StackCard>
            </div>
        </div>
    </div>
</template>
