<!-- components/Input.vue -->
<template>
    <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="[
            'text-sm bg- px-4 py-3 border border-gray rounded-lg drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-primary',
            inputClasses,
        ]"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script>
export default {
    name: "Input",
    props: {
        type: {
            type: String,
            default: "text",
        },
        modelValue: {
            type: [String, Number],
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        inputClasses: {
            type: String,
            default: "",
        },
    },
};
</script>

<style scoped>
/* Optional global input styles or scoped component styles */
</style>
