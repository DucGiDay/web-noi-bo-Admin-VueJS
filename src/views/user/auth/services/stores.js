import { defineStore } from "pinia";
import { ref, computed } from "vue"
import { API_USER } from "@/services/api";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";


export const StoreAuth = defineStore("StoreAuth", () => {
  // Các hàm khác
  const toast = useToast();
  const router = useRouter();

  // States
  const accessToken = ref("")

  // Getters
  const onGetteraccessToken = computed(() => accessToken);

  //Actions
  const onActionLogin = async(args) => {
    await API_USER.API_AUTH.onApiLogin(args)
    .then(({ data: res }) => {
      if(res.success) {
        localStorage.setItem('token', `${res.accessToken}`);
        router.push({name: "Home"})
      } else {
        toast.add({severity:'error', summary: 'Success Message', detail:`${res.message}`, life: 3000});
      }
      return accessToken.value=res.accessToken
    }).catch(err => toast.add({severity:'error', summary: 'Error Message', detail:`${err}`, life: 3000}))
  };

  return {
    //Getters
    onGetteraccessToken,

    //Actions
    onActionLogin,
  };
});
