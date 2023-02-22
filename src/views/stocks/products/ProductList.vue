<script setup>
import { onMounted } from 'vue';
import {STORE_STOCK} from '../../../services/stores';

const STORE_PRODUCT = STORE_STOCK.StoreProduct();

const products = STORE_PRODUCT.onGetterProducts
onMounted(() => {
    STORE_PRODUCT.onActionGetProducts()
})
const testFunc = async () => {
    console.log("test: ", products.value)
}
</script>
<template>
    <div class="card">
        <button @click="testFunc">Click here</button>
    </div>
</template>