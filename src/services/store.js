import { defineStore } from "pinia";
import { computed, ref } from "vue";

export * as STORE_PAGES from "../views/pages/services/store";

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
