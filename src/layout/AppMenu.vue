<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import AppMenuItem from './AppMenuItem.vue';

const router = useRouter()

const model = ref([
  {
    label: 'Danh mục',
    items: [
      { label: 'Danh sách danh mục', icon: 'pi pi-fw pi-prime', to: '/stocks/categories' },
      { label: 'Tạo danh mục', icon: 'pi pi-fw pi-desktop', to: '/stocks/category/create'}
    ]
  },
  {
    label: 'Sản phẩm',
    items: [
      { label: 'Danh sách sản phẩm', icon: 'pi pi-fw pi-prime', to: '/stocks/products' },
      { label: 'Thêm sản phẩm', icon: 'pi pi-fw pi-desktop', to: '/stocks/products/create'}
    ]
  },
  {
    label: 'Người dùng',
    items: [
      { label: 'Danh sách người dùng', icon: 'pi pi-fw pi-prime', to: '/user/accounts' },
      { label: 'Tạo người dùng mới', icon: 'pi pi-fw pi-desktop', to: '/user/accounts/create'}
    ]
  },
    
]);

const LogOut = () => {
  localStorage.removeItem('token');
  router.push({name: "Login"})
}
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        <li class="flex justify-content-center mt-4">
          <Button class="p-button-secondary" @click="LogOut">Đăng xuất</Button>
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>
