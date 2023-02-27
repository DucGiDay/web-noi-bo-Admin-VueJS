<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ref, computed } from 'vue';
import AppConfig from '@/layout/AppConfig.vue';
import { STORE_USER } from "@/services/stores"
import { useToast } from "primevue/usetoast";

const { layoutConfig, contextPath } = useLayout();
const toast = useToast()

const username = ref('');
const password = ref('');
const repairPassword = ref('');
const STORE_AUTH = STORE_USER.StoreAuth()

const logoUrl = computed(() => {
    return `${contextPath}layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});

const Register = () => {
  if(password.value!==repairPassword.value) {
    return toast.add({severity:'error', summary: 'Passwords do not match', detail:"Please retype your passwords", life: 3000});
  }
  STORE_AUTH.onActionRegister({
    username: username.value,
    password: password.value
  })
}
</script>

<template>
  <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
    <div class="flex flex-column align-items-center justify-content-center">
      <img :src="logoUrl" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0" />
      <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
        <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
          <div class="text-center mb-5">

            <span class="text-600 font-bold text-2xl">Register</span>
          </div>

          <div>
            <label for="username1" class="block text-900 text-xl font-medium mb-2">Username</label>
            <InputText id="username1" type="text" placeholder="Username" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="username" />

            <label for="password1" class="block text-900 font-medium text-xl mb-2">Password</label>
            <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" class="w-full mb-3" inputClass="w-full" inputStyle="padding:1rem"></Password>

            <label for="password2" class="block text-900 font-medium text-xl mb-2">Repair password</label>
            <Password id="password2" v-model="repairPassword" placeholder="Repair password" :toggleMask="true" class="w-full mb-3" inputClass="w-full" inputStyle="padding:1rem"></Password>

            <div class="flex align-items-center justify-content-end mb-5 gap-5">
              <a href="/auth/login" class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Sign In</a>
            </div>
            <Button label="Register" class="w-full p-3 text-xl" @click="Register()"></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppConfig simple />
  <ConfirmDialog group="positionDialog"></ConfirmDialog>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
