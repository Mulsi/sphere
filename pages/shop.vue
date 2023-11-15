<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap 4 justify-items-center">
        <div class="h-24 flex items-center">
            <NuxtLink to="/item/1">
                PRODUCT 1
            </NuxtLink>
        </div>
        <div class="h-24 flex items-center">
            PRODUCT 2
        </div>
        <div class="h-24 flex items-center">
            PRODUCT 3
        </div>
        <div class="h-24 flex items-center">
            PRODUCT 4
        </div>
        <div class="h-24 flex items-center">
            PRODUCT 5
        </div>
        <div class="h-24 flex items-center">
            PRODUCT 6
        </div>
    </div>
</template>

<script setup>
import { createClient } from "@supabase/supabase-js";
import supabase from "~/supabase/supabase-client";

// const supabase = createClient('https://gyjkyoichkznawbyxetx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5amt5b2ljaGt6bmF3Ynl4ZXR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4NTc1NDEsImV4cCI6MjAxNDQzMzU0MX0.V7WrBsyKNFLXuguuP60U2cje5jBVETsssaeEBByscZI');
const { data, error } = await supabase
    .from('Products')
    .select()

if (data) {
    console.log(data)
}


</script>