<template>
    <div class="flex">
        <Sidebar />

        <div class="w-full">
            <Header />
            <main>
                <slot/>
            </main>
        </div>
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
