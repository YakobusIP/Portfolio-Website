<script setup lang="ts">
import StackCard from "./StackCard.vue";

const techStack = [
    {
        id: 1,
        imgSrc: "/react.png",
        position: "row-start-1 col-start-1",
        message:
            "I've used ReactJS in several website projects and has since become one of my favorite front-end libraries to develop with.",
    },
    {
        id: 2,
        imgSrc: "/tailwind.png",
        position: "row-start-1 col-start-2",
        message:
            "Using TailwindCSS has made styling a lot easier and faster, and has become my top CSS framework to use.",
    },
    {
        id: 3,
        imgSrc: "/vue.png",
        position: "row-start-2 col-start-1",
        message:
            "A new front-end framework that I'm trying to learn. In fact, this website is created using Vue TS.",
    },
    {
        id: 4,
        imgSrc: "/nodejs.png",
        position: "row-start-2 col-start-2",
        message:
            "A very versatile server-side runtime environment. I've used NodeJS to develop most of my backend services, with the help of ExpressJS framework.",
    },
    {
        id: 5,
        imgSrc: "/go.png",
        position: "row-start-3 col-start-1",
        message:
            "A unique programming language that I've used to develop a backend service with (using Go Gin framework).",
    },
    {
        id: 6,
        imgSrc: "/nodejs.png",
        position: "row-start-2 col-start-2",
        message:
            "A very versatile server-side runtime environment. I've used NodeJS to develop most of my backend services, with the help of ExpressJS framework.",
    },
];
</script>

<template>
    <div
        class="relative flex flex-col flex-1 items-center justify-center gap-y-16 px-32 overflow-x-hidden"
    >
        <div
            class="flex text-white justify-center items-center mt-16 animate-about-left-in"
        >
            <div class="rounded-full w-80 h-80 overflow-hidden bg-white">
                <img
                    class="h-[22.5rem] w-60 m-auto"
                    src="/Foto Diri Ukuran Kecil.jpg"
                />
            </div>
            <div class="w-2/3 px-12">
                <h1 class="text-4xl mb-4">Hello</h1>
                <p class="leading-loose">
                    My name is Yakobus Iryanto Prasethio and I'm very interested
                    in web development, both front-end and back-end. I'm
                    currently in my penultimate year at Institut Teknologi
                    Bandung. I'm actively looking for new opportunities to learn
                    new things and improve.
                </p>
            </div>
        </div>
        <div
            class="flex text-white text-center justify-center items-center animate-about-right-in"
        >
            <div class="w-2/3 px-12">
                <p class="leading-loose text-right">
                    I have created a few projects for my semester assignments at
                    the university (most of which are team projects), the most
                    recent one being PustakaApp, a website used for libraries.
                    I've also done a solo project, which is BNMO Banking, a
                    pseudo-banking website.
                </p>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-48 h-48"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        </div>
        <div
            class="flex flex-col w-full text-white text-center justify-center mt-16 gap-y-8"
        >
            <h1 class="text-3xl">Tech stack I've used before</h1>
            <div class="grid grid-cols-2 grid-rows-6 gap-8">
                <StackCard
                    v-for="stack in techStack"
                    :class="stack.position"
                    :img-src="stack.imgSrc"
                    :text="stack.message"
                ></StackCard>
            </div>
        </div>
    </div>
</template>
