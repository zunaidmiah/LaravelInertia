<template>
    <aside class="bg-white border-r border-[#E4E7EC] w-[300px] h-screen">
        <div class="h-full">
            <nav class="h-full">
                <a href="#" class="p-6 flex">
                    <img src="/images/logo-main.png" alt="TextCRM" />
                </a>
                <div class="flex flex-col justify-between h-[90%]">
                    <ul>
                        <SidebarMenuItem
                            v-for="(item, index) in menuItems"
                            :key="index"
                            :item="item"
                        />
                    </ul>

                    <!-- <ul class="flex flex-col gap-3 mt-10">
                        <li>
                            <Link href="/admin/dashboard"
                                class="flex gap-3 items-center font-semibold text-dark"
                            >
                                <img
                                    src="/images/icons/dashboard-icon.svg"
                                    alt="Dashboard Icon"
                                />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/zone"
                                class="flex gap-3 items-center font-semibold text-dark"
                            >
                                <img
                                    src="/images/icons/manage-icon.svg"
                                    alt=""
                                />
                                <span>Manage Zone</span>
                            </Link>
                        </li>
                    </ul>
                    <ul class="flex flex-col gap-3">
                        <li>
                            <router-link
                                to="/admin/dashboard"
                                class="flex gap-3 items-center font-semibold text-dark"
                            >
                                <img
                                    src="/images/icons/support-icon.svg"
                                    alt=""
                                />
                                <span>Support</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/admin/dashboard"
                                class="flex gap-3 items-center font-semibold text-dark"
                            >
                                <img
                                    src="/images/icons/setting-icon.svg"
                                    alt=""
                                />
                                <span>Setting</span>
                            </router-link>
                        </li>
                    </ul> -->
                </div>
            </nav>
        </div>
    </aside>
</template>

<script>
import { Link } from "@inertiajs/vue3";
import { ref } from "vue";
import { menuItems } from "./menuData.js";
import SidebarMenuItem from "./SidebarMenuItem.vue";

export default {
    components: {
        SidebarMenuItem,
    },
    setup() {
        return {
            menuItems: ref(menuItems),
        };
    },
};
</script>
