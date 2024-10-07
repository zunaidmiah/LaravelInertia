<template>
    <li>
        <div
            class="w-full flex justify-between items-center px-6 py-3 cursor-pointer"
        >
            <Link
                v-if="!item.submenu || item.submenu.length === 0"
                :href="item.href"
                class="flex items-center gap-2"
            >
                <span
                    class="text-sm w-7 h-7 flex justify-center items-center border rounded-md border-gray-200"
                >
                    <i :class="item.icon" class="text-gray-500"></i>
                </span>
                <span>{{ item.name }}</span>
            </Link>

            <div
                v-else
                @click="toggleSubmenu"
                class="flex items-center gap-2 cursor-pointer w-full"
            >
                <span
                    class="text-sm w-7 h-7 flex justify-center items-center border rounded-md border-gray-200"
                >
                    <i :class="item.icon" class="text-gray-500"></i>
                </span>
                <span>{{ item.name }}</span>
                <span>{{ item.name }}</span>
                <button class="ml-auto">
                    <i
                        class="text-xs"
                        :class="
                            submenuOpen
                                ? 'fa fa-chevron-down'
                                : 'fa fa-chevron-right'
                        "
                    ></i>
                </button>
            </div>
        </div>

        <ul
            v-if="item.submenu && item.submenu.length > 0"
            ref="submenu"
            class="pl-6 overflow-hidden transition-max-height duration-300 ease-in-out"
            :style="{ maxHeight: submenuOpen ? submenuHeight : '0px' }"
        >
            <SidebarSubMenuItem
                v-for="(subItem, subIndex) in item.submenu"
                :key="subIndex"
                :item="subItem"
            />
        </ul>
    </li>
</template>

<script>
import { ref, nextTick, onMounted } from "vue";
import SidebarSubMenuItem from "./SidebarSubMenuItem.vue";
import { Link } from "@inertiajs/vue3";

export default {
    name: "SidebarMenuItem",
    props: {
        item: Object,
    },
    components: {
        SidebarSubMenuItem,
        Link,
    },
    setup() {
        const submenuOpen = ref(false);
        const submenu = ref(null);
        const submenuHeight = ref("0px");

        const toggleSubmenu = () => {
            submenuOpen.value = !submenuOpen.value;
            nextTick(() => {
                submenuHeight.value = submenu.value
                    ? `${submenu.value.scrollHeight}px`
                    : "0px";
            });
        };

        onMounted(() => {
            submenuHeight.value = submenuOpen.value
                ? `${submenu.value.scrollHeight}px`
                : "0px";
        });

        return {
            submenuOpen,
            submenu,
            submenuHeight,
            toggleSubmenu,
        };
    },
};
</script>

<style scoped>
.transition-max-height {
    transition: max-height 0.3s ease-in-out;
}
</style>
