<template>
    <header class="flex justify-between py-5 px-7 border-b border-[#E4E7EC]">
        <div>
            <a href="#" class="flex items-center gap-4">
                <span
                    class="w-[40px] h-[40px] rounded-full bg-[#EDFCF2] flex justify-center items-center"
                >
                    <img src="/images/icons/users-icon.svg" alt="" />
                </span>
                <span class="font-semibold">Contact Management</span>
            </a>
        </div>
        <div class="flex items-center gap-7">
            <div class="relative">
                <img
                    src="/images/icons/search-icon.svg"
                    alt=""
                    class="absolute left-4 top-1/2 translate-y-[-50%] z-10"
                />
                <Input
                    v-model="email"
                    type="email"
                    placeholder="Enter your email"
                    :inputClasses="'pl-12 pr-10'"
                />
                <div class="absolute right-4 top-1/2 translate-y-[-50%]">
                    All
                </div>
            </div>
            <div class="flex items-center gap-6">
                <div class="flex gap-2">
                    <button type="button" class="flex gap-2 items-center">
                        <img src="/images/icons/globe-icon.svg" alt="" />
                        <span>English</span>
                    </button>
                    <Dropdown>
                        <div>Hello</div>
                    </Dropdown>
                    <!-- <ul class="hidden">
                        <li><a href="#">Bangla</a></li>
                        <li><a href="#">English</a></li>
                    </ul> -->
                </div>
                <ul class="flex items-center gap-5">
                    <li>
                        <a href="#"
                            ><img
                                src="/images/icons/envelop-icon.svg"
                                alt=""
                        /></a>
                    </li>
                    <li>
                        <a href="#"
                            ><img
                                src="/images/icons/bell-icon.svg"
                                alt=""
                        /></a>
                    </li>
                </ul>
                <button type="button" class="w-[40px] h-[40px] rounded-full">
                    <img src="/images/icons/avatar.png" alt="" />
                </button>
            </div>
        </div>
    </header>
</template>

<script>
import Dropdown from "@/Components/Dropdown.vue";
import Input from "../ui/Input.vue";

export default {
    components: {
        Input,
    },
};
</script>
