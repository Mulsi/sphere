<template>
    <div class="flex items-center justify-center flex-col">
        <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
            <UFormGroup label="Email" name="email">
                <UInput v-model="state.email" />
            </UFormGroup>

            <UFormGroup label="Password" name="password">
                <UInput v-model="state.password" type="password" />
            </UFormGroup>

            <UButton type="submit" color="gray">
                Register
            </UButton>
        </UForm>
    </div>
</template>
<script setup lang="ts">
import supabase from "~/supabase/supabase-client";
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = reactive({
    email: undefined,
    password: undefined
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {


    if (event.data) {
        const { data, error } = await supabase.auth.signUp({
            email: state.email,
            password: state.password,
        })

    }

}
</script>