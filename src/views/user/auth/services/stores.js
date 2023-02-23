import { defineStore } from "pinia";
import { ref, computed } from "vue"
import { API_USER } from "@/services/api";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";
import { useConfirm } from "primevue/useconfirm";

export const StoreAuth = defineStore("StoreAuth", () => {
  // Các hàm khác
  const toast = useToast();
  const router = useRouter();
  const confirm = useConfirm();

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
    }).catch(err => toast.add({severity:'error', summary: 'Error Message', detail:`${err.response.data.message || err}`, life: 3000}))
  };

  const onActionRegister = async(args) => {
    await API_USER.API_AUTH.onApiRegister(args)
    .then(({ data: res }) => {
      if(res.success) {
        confirmPosition()
      } else {
        toast.add({severity:'error', summary: 'Error Message', detail:`${res.message}`, life: 3000});
      }
      return accessToken.value=res.accessToken
    }).catch(err => toast.add({severity:'error', summary: 'Error Message', detail:`${err.response.data.message || err}`, life: 3000}))
  };

  const confirmPosition = () => {
    confirm.require({
      group: 'positionDialog',
      message: 'Do you want to go to Sign In page?',
      header: 'User created successfully',
      icon: 'pi pi-info-circle',
      position: 'top',
      acceptIcon: 'pi pi-check',
      rejectIcon: 'pi pi-times',
      accept: () => {
        router.push({name: 'Login'})
      },
      reject: () => {
        toast.add({severity:'success', summary:'Success message', detail:'User created successfully', life: 3000});
      }
    });
  }

  return {
    //Getters
    onGetteraccessToken,

    //Actions
    onActionLogin,
    onActionRegister
  };
});