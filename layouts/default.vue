<template>
    <div>
        <div class="w-full h-16 flex items-center justify-between">
            <div class="px-8">
                <NuxtLink to="/">
                    SPHERE
                </NuxtLink>
            </div>
            <div class="px-8">
                <NuxtLink v-if="route.name !== 'login'" to="/login">
                    LOGIN / REGISTER
                </NuxtLink>
            </div>
        </div>
        <div>
            <slot />
        </div>
        <!-- <div class="w-full h-16 flex items-center justify-center">
            all rights reserved.
        </div> -->
    </div>
</template>
<script setup>
const route = useRoute()

console.log(route)
</script>