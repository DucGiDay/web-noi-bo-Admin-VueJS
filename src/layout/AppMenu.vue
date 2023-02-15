<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
  {
    label: 'Danh mục',
    items: [
      { label: 'Danh sách danh mục', icon: 'pi pi-fw pi-prime', to: '/categories' },
      { label: 'Tạo danh mục', icon: 'pi pi-fw pi-desktop', to: '/category/create'}
    ]
  },
  {
    label: 'Sản phẩm',
    items: [
      { label: 'Danh sách sản phẩm', icon: 'pi pi-fw pi-prime', to: '/products' },
      { label: 'Thêm sản phẩm', icon: 'pi pi-fw pi-desktop', to: '/products/create'}
    ]
  },
    
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
