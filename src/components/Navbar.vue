<script setup lang="ts">
const pages = [
    { name: "Home", link: "#" },
    { name: "About Me", link: "#" },
    { name: "Projects", link: "#" },
    { name: "Gallery", link: "#" },
    { name: "Contact", link: "#" },
];
</script>

<template>
    <nav
        class="sticky flex top-0 w-full h-fit py-6 items-center z-[1] drop-shadow-xl bg-navbar"
    >
        <ul class="flex justify-evenly w-full font-bold gap-y-8 text-white">
            <li v-for="page in pages">
                <a
                    class="transition duration-250 border-b-[3px] border-transparent hover:border-white"
                    :href="page.link"
                    >{{ page.name }}</a
                >
            </li>
        </ul>
    </nav>
</template>
