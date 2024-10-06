<template>
    <Header />
    <Sidebar />
    <div class="w-full">
        <main class="py-5 px-7">
            <div>
                <p>I'm from a dashboard content!</p>
            </div>
        </main>
    </div>
</template>

<script>
    import Sidebar from "../Layouts/Sidebar.vue";
    import Header from "../Layouts/Header.vue";

    export default {
        name: "App",
        components: {
            Sidebar,
            Header,
        },
    };
</script>
