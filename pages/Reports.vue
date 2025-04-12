<script setup>
import { ref } from 'vue';

const currentReport = ref('overview');

// Switch between report views
const setReport = (report) => {
  currentReport.value = report;
};

// Sample report data (replace with API in production)
const reports = {
  overview: {
    farmers: { total: 150, activeCrops: 12, yield: '25,000 kg' },
    buyers: { total: 50, orders: 200, revenue: 'KES 5M' },
    transactions: { total: 300, value: 'KES 7.5M' },
    inventory: { totalItems: 20, totalQuantity: '50,000 kg' },
  },
  farmers: [
    {
      id: 1,
      name: 'John Mwangi',
      crop: 'Maize',
      quantity: '500 kg',
      region: 'Kiambu',
      date: '2025-04-10',
      status: 'Verified',
    },
    {
      id: 2,
      name: 'Grace Achieng',
      crop: 'Coffee',
      quantity: '200 kg',
      region: 'Kisii',
      date: '2025-04-09',
      status: 'Pending',
    },
  ],
  buyers: [
    {
      id: 1,
      name: 'AgriCorp Ltd',
      order: 'Tomatoes - 1000 kg',
      amount: 'KES 150,000',
      date: '2025-04-08',
      status: 'Completed',
    },
    {
      id: 2,
      name: 'FreshMart',
      order: 'Avocados - 300 kg',
      amount: 'KES 90,000',
      date: '2025-04-07',
      status: 'Processing',
    },
  ],
  transactions: [
    {
      id: 1,
      type: 'Sale',
      parties: 'John Mwangi to AgriCorp Ltd',
      amount: 'KES 50,000',
      date: '2025-04-10',
    },
    {
      id: 2,
      type: 'Purchase',
      parties: 'FreshMart from Grace Achieng',
      amount: 'KES 30,000',
      date: '2025-04-09',
    },
  ],
  inventory: [
    {
      id: 1,
      crop: 'Maize',
      quantity: '10,000 kg',
      warehouse: 'Nairobi Hub',
      lastUpdated: '2025-04-11',
    },
    {
      id: 2,
      crop: 'Wheat',
      quantity: '5,000 kg',
      warehouse: 'Eldoret Hub',
      lastUpdated: '2025-04-10',
    },
  ],
};
</script>

<template>
  <div class="bg-gray-50 min-h-screen p-4 md:p-8">
    <!-- Navigation Bar -->
  <NavigationBar/>
    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white rounded-xl shadow-md p-6">
        <!-- Report Tabs -->
        <div class="border-b border-gray-200 mb-6">
          <nav class="flex space-x-4" aria-label="Report Tabs">
            <button
              @click="setReport('overview')"
              :class="[
                currentReport === 'overview'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'px-3 py-2 font-medium text-sm border-b-2',
              ]"
            >
              Overview
            </button>
            <button
              @click="setReport('farmers')"
              :class="[
                currentReport === 'farmers'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'px-3 py-2 font-medium text-sm border-b-2',
              ]"
            >
              Farmers
            </button>
            <button
              @click="setReport('buyers')"
              :class="[
                currentReport === 'buyers'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'px-3 py-2 font-medium text-sm border-b-2',
              ]"
            >
              Buyers
            </button>
            <button
              @click="setReport('transactions')"
              :class="[
                currentReport === 'transactions'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'px-3 py-2 font-medium text-sm border-b-2',
              ]"
            >
              Transactions
            </button>
            <button
              @click="setReport('inventory')"
              :class="[
                currentReport === 'inventory'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'px-3 py-2 font-medium text-sm border-b-2',
              ]"
            >
              Inventory
            </button>
          </nav>
        </div>

        <!-- Report Content -->
        <!-- Overview -->
        <div v-if="currentReport === 'overview'" class="space-y-8">
          <h2 class="text-2xl font-semibold text-gray-900">Reports Overview</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Farmers Summary -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 class="text-lg font-medium text-gray-800">Farmers</h3>
              <p class="mt-2 text-sm text-gray-600">Total: {{ reports.overview.farmers.total }}</p>
              <p class="text-sm text-gray-600">Active Crops: {{ reports.overview.farmers.activeCrops }}</p>
              <p class="text-sm text-gray-600">Total Yield: {{ reports.overview.farmers.yield }}</p>
            </div>
            <!-- Buyers Summary -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 class="text-lg font-medium text-gray-800">Buyers</h3>
              <p class="mt-2 text-sm text-gray-600">Total: {{ reports.overview.buyers.total }}</p>
              <p class="text-sm text-gray-600">Orders: {{ reports.overview.buyers.orders }}</p>
              <p class="text-sm text-gray-600">Revenue: {{ reports.overview.buyers.revenue }}</p>
            </div>
            <!-- Transactions Summary -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 class="text-lg font-medium text-gray-800">Transactions</h3>
              <p class="mt-2 text-sm text-gray-600">Total: {{ reports.overview.transactions.total }}</p>
              <p class="text-sm text-gray-600">Value: {{ reports.overview.transactions.value }}</p>
            </div>
            <!-- Inventory Summary -->
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 class="text-lg font-medium text-gray-800">Inventory</h3>
              <p class="mt-2 text-sm text-gray-600">Items: {{ reports.overview.inventory.totalItems }}</p>
              <p class="text-sm text-gray-600">Quantity: {{ reports.overview.inventory.totalQuantity }}</p>
            </div>
          </div>
        </div>

        <!-- Farmers Reports -->
        <div v-if="currentReport === 'farmers'" class="space-y-6">
          <h2 class="text-2xl font-semibold text-gray-900">Farmers Reports</h2>
          <div class="space-y-4">
            <div v-for="farmer in reports.farmers" :key="farmer.id" class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="font-medium text-gray-800">{{ farmer.name }}</p>
              <p class="text-sm text-gray-600">Crop: {{ farmer.crop }}</p>
              <p class="text-sm text-gray-600">Quantity: {{ farmer.quantity }}</p>
              <p class="text-sm text-gray-600">Region: {{ farmer.region }}</p>
              <p class="text-sm text-gray-600">Date: {{ farmer.date }}</p>
              <p class="text-sm text-gray-600">Status: {{ farmer.status }}</p>
            </div>
          </div>
        </div>

        <!-- Buyers Reports -->
        <div v-if="currentReport === 'buyers'" class="space-y-6">
          <h2 class="text-2xl font-semibold text-gray-900">Buyers Reports</h2>
          <div class="space-y-4">
            <div v-for="buyer in reports.buyers" :key="buyer.id" class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="font-medium text-gray-800">{{ buyer.name }}</p>
              <p class="text-sm text-gray-600">Order: {{ buyer.order }}</p>
              <p class="text-sm text-gray-600">Amount: {{ buyer.amount }}</p>
              <p class="text-sm text-gray-600">Date: {{ buyer.date }}</p>
              <p class="text-sm text-gray-600">Status: {{ buyer.status }}</p>
            </div>
          </div>
        </div>

        <!-- Transactions Reports -->
        <div v-if="currentReport === 'transactions'" class="space-y-6">
          <h2 class="text-2xl font-semibold text-gray-900">Transaction Reports</h2>
          <div class="space-y-4">
            <div v-for="txn in reports.transactions" :key="txn.id" class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="font-medium text-gray-800">{{ txn.type }}</p>
              <p class="text-sm text-gray-600">Parties: {{ txn.parties }}</p>
              <p class="text-sm text-gray-600">Amount: {{ txn.amount }}</p>
              <p class="text-sm text-gray-600">Date: {{ txn.date }}</p>
            </div>
          </div>
        </div>

        <!-- Inventory Reports -->
        <div v-if="currentReport === 'inventory'" class="space-y-6">
          <h2 class="text-2xl font-semibold text-gray-900">Inventory Reports</h2>
          <div class="space-y-4">
            <div v-for="item in reports.inventory" :key="item.id" class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="font-medium text-gray-800">{{ item.crop }}</p>
              <p class="text-sm text-gray-600">Quantity: {{ item.quantity }}</p>
              <p class="text-sm text-gray-600">Warehouse: {{ item.warehouse }}</p>
              <p class="text-sm text-gray-600">Last Updated: {{ item.lastUpdated }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles for subtle enhancements */
.transition {
  transition: all 0.2s ease;
}
</style>