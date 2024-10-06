<template>
    <Header />
    <Sidebar />
    <div class="w-full">
        <main class="py-5 px-7">
            <slot/>
        </main>
    </div>
</template>

<script>
    import Sidebar from "../Pages/Admin/Layouts/Sidebar.vue";
    import Header from "../Pages/Admin/Layouts/Header.vue";

    export default {
        name: "App",
        components: {
            Sidebar,
            Header,
        },
    };
</script>
