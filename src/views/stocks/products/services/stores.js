import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { API_STOCK } from "@/services/api";

export const StoreProduct = defineStore("StoreProduct", () => {
  // States
  const products = ref([]);

  const selectedDistributors = ref([]);

  const product = ref({});

  // Getters
  const onGetterProducts = computed(() => products);

  const onGetterSelectedDistributors = computed(() => selectedDistributors);

  const onGetterProduct = computed(() => product);

  //Actions
  const onActionGetProducts = async() => {
    await API_STOCK.API_PRODUCT.onApiGetProducts()
    .then((res) => {
        return products.value = res.data
    })
  };

  return {
    //Getters
    onGetterProducts,
    onGetterSelectedDistributors,
    onGetterProduct,
    //Actions
    onActionGetProducts,
  };
});
