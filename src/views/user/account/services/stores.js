import { defineStore } from "pinia";
import { ref, computed } from "vue"
import { API_USER } from "@/services/api";
import { useToast } from "primevue/usetoast";

export const StoreAccount = defineStore("StoreAccount", () => {
  // Các hàm khác
  const toast = useToast();

  // States
  const accounts = ref([])

  // Getters
  const onGetterAccounts = computed(() => accounts);

  //Actions
  const onActionGetAllUsers = async() => {
    await API_USER.API_ACCOUNT.onApiGetAllUsers()
    .then(({ data: res }) => {
      if(res.success) {
        return accounts.value=res.data
      } else {
        return toast.add({severity:'error', summary: 'Success Message', detail:`${res.message}`, life: 3000});
      }
    })
    .catch(err => toast.add({severity:'error', summary: 'Error Message', detail:`${err.response.data.message || err}`, life: 3000}))
  };
  return {
    //Getters
    onGetterAccounts,

    //Actions
    onActionGetAllUsers,
  };
});