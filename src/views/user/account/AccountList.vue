<script setup>
import { onMounted, ref, computed } from 'vue';
import {STORE_USER} from '../../../services/stores';
import { formatDateTime } from "@/components/helper/helper"

const STORE_ACCOUNT = STORE_USER.StoreAccount();

const accounts = STORE_ACCOUNT.onGetterAccounts
const totalRecords = computed(() => STORE_ACCOUNT.onGetterTotalRecords);
const selectedDistributors = ref([]);
onMounted(() => {
  STORE_ACCOUNT.onActionGetAllUsers()
})
const deleteUsers = async () => {
  STORE_ACCOUNT.onActionDeleteUsers(selectedDistributors.value)
}

const params = ref({
  page: 0,
  rows: 10,
  first: 0,
  paged: true,
  sort: null,
})

const onPageChange = (event) => {
  params.value.page = event.page;
  params.value.rows = event.rows;
  params.value.first = event.first;
  STORE_ACCOUNT.onActionGetAllUsers(params.value)
};
</script>
<template>
  <div>
    <DataTable
      paginatorTemplate=" FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :value="accounts"
      selectionMode="multiple"
      removableSort
      v-model:selection="selectedDistributors"
      :lazy="true"
      :paginator="true"
      :rows="params.rows"
      :totalRecords="totalRecords.value"
      :rowsPerPageOptions="[5, 10, 15, 20, 30]"
      currentPageReportTemplate="Hiển thị {first} - {last} / tổng {totalRecords} dòng"
      @page="onPageChange($event)"
    >
      <template #header>
        <div class="flex justify-content-between">
          <div class="flex gap-2">
            <Button label="Thêm mới" @click="deleteUsers" />
            <Button
              label="Xóa"
              class="p-button-danger"
              @click="deleteUsers"
            />
          </div>
        </div>
      </template>

      <!-- Checkbox -->
      <Column selectionMode="multiple"></Column>

      <!-- Type of reason -->
      <Column field="username" header="Username" :sortable="true">
        <template #body="slotProps">
          {{ slotProps.data.username }}
        </template>
      </Column>

      <!-- Code of reason -->
      <Column field="phone" header="Phone" :sortable="true">
        <template #body="slotProps">
          {{ slotProps.data.phoneNumber }}
        </template>
      </Column>

      <!-- Reason -->
      <Column
        field="email"
        header="Email"
        :sortable="true"
      >
        <template #body="slotProps">
          {{ slotProps.data.email }}
        </template>
      </Column>

      <!--  -->
      <Column field="createdAt" header="Created At" :sortable="true">
        <template #body="slotProps">
          {{ formatDateTime(slotProps.data.createdAt) }}
        </template>
      </Column>

      <!--  -->
      <Column field="status" header="Status" :sortable="true">
        <template #body="slotProps">
          <!-- {{ slotProps.data.status }} -->
          <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
        </template>
      </Column>
    </DataTable>
	</div>
</template>
