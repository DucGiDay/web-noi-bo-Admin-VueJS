import { defineStore } from "pinia";
import { computed, ref } from "vue";

export * as STORE_STOCK from "../views/stocks/services/stores";
export * as STORE_USER from "../views/user/services/stores";

export const StoreApp = defineStore("StoreApp", () => {
  // Các hàm khác

  // States - Không trả về states
  const displayLoading = ref(false);

  // Getters - Không trả về .value
  const onGetterDisplayLoading = computed(() => displayLoading);

  // Actions
  const onActionDisplayLoading = async (isDisplay = false) => {
    return (displayLoading.value = isDisplay);
  };

  return {
    // Display loading
    onGetterDisplayLoading,
    onActionDisplayLoading,
  };
});
