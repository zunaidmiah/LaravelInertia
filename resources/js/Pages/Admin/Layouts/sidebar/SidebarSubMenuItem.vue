<template>
    <li>
        <Link
            href="/admin/dashboard"
            class="flex justify-between items-center p-3 cursor-pointer hover:bg-gray-200"
        >
            <div class="flex items-center gap-2">
                <span>{{ item.name }}</span>
            </div>
            <div v-if="item.submenu && item.submenu.length > 0">
                <button
                    @click="toggleSubmenu"
                    class="w-5 h-5 bg-gray-200 rounded-sm flex justify-center items-center"
                >
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
        </Link>

        <!-- Submenu (supports third level and beyond) -->
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
import { Link } from "@inertiajs/vue3";
import { ref, nextTick, onMounted } from "vue";

export default {
    name: "SidebarSubMenuItem",
    props: {
        item: Object,
    },
    components: {
        Link,
    },
    setup() {
        const submenuOpen = ref(false);
        const submenuHeight = ref("0px");
        const submenu = ref(null);

        const toggleSubmenu = () => {
            submenuOpen.value = !submenuOpen.value;
            // Set max-height based on content
            nextTick(() => {
                submenuHeight.value = submenu.value
                    ? `${submenu.value.scrollHeight}px`
                    : "0px";
            });
        };

        // Initialize height on mounted
        onMounted(() => {
            submenuHeight.value = submenuOpen.value
                ? `${submenu.value.scrollHeight}px`
                : "0px";
        });

        return {
            submenuOpen,
            submenuHeight,
            submenu,
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
