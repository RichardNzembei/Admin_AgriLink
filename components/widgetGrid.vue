<script setup>
import { ref } from 'vue';

// Mock dynamic data (replace with API calls)
const dashboardData = ref({
  farmers: { count: 2000, updated: '1 day ago' },
  buyers: { count: 2000, updated: '1 day ago' },
  subscriptions: {
    premium: 300,
    regular: 567,
  },
  regulations: {
    banned: 2,
    suspended: 2,
    reports: 2,
    notifications: 5,
  },
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <!-- Farmers Overview -->
    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-lg font-semibold text-gray-800">Farmers Overview</p>
          <p class="text-sm text-gray-500">{{ dashboardData.farmers.updated }}</p>
        </div>
        <Icon name="i-mdi-account-cowboy-hat" class="h-8 w-8 text-green-500" />
      </div>
      <div class="flex justify-center mt-6">
        <div
          class="bg-green-500 text-white rounded-full h-16 w-16 flex items-center justify-center shadow-md hover:bg-green-600 transition-colors duration-200"
        >
          <p class="text-xl font-bold">{{ dashboardData.farmers.count }}+</p>
        </div>
      </div>
      <div class="flex justify-center mt-6">
        <NuxtLink
          to="/farmers"
          class="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200"
          aria-label="View Details"
        >
          View Details
          <Icon name="i-lucide-arrow-right" class="h-5 w-5" />
        </NuxtLink>
      </div>
    </div>

    <!-- Buyers Overview -->
    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-lg font-semibold text-gray-800">Buyers Overview</p>
          <p class="text-sm text-gray-500">{{ dashboardData.buyers.updated }}</p>
        </div>
        <Icon name="i-mdi-account-cash" class="h-8 w-8 text-blue-500" />
      </div>
      <div class="flex justify-center mt-6">
        <div
          class="bg-blue-500 text-white rounded-full h-16 w-16 flex items-center justify-center shadow-md hover:bg-blue-600 transition-colors duration-200"
        >
          <p class="text-xl font-bold">{{ dashboardData.buyers.count }}+</p>
        </div>
      </div>
      <div class="flex justify-center mt-6">
        <NuxtLink
          to="/buyers"
          class="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200"
          aria-label="View Details"
        >
          View Details
          <Icon name="i-lucide-arrow-right" class="h-5 w-5" />
        </NuxtLink>
      </div>
    </div>

    <!-- Subscriptions -->
    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <Icon name="i-lucide-credit-card" class="h-8 w-8 text-blue-600" />
          <div>
            <p class="text-lg font-semibold text-gray-800">Subscriptions</p>
            <p class="text-sm text-gray-500">All Plans</p>
          </div>
        </div>
        <NuxtLink
          to="/subscriptions"
          class="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200"
          aria-label="View Plans"
        >
          View Plans
          <Icon name="i-lucide-arrow-right" class="h-5 w-5" />
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div class="bg-blue-50 p-4 rounded-lg">
          <p class="text-sm font-semibold text-gray-800 border-b-2 border-blue-200 pb-1">Premium</p>
          <div class="flex justify-center mt-4">
            <div
              class="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-sm"
            >
              <p class="text-lg font-bold text-blue-600">{{ dashboardData.subscriptions.premium }}</p>
            </div>
          </div>
          <p class="text-center text-xs text-gray-500 mt-2">Users</p>
        </div>
        <div class="bg-yellow-50 p-4 rounded-lg">
          <p class="text-sm font-semibold text-gray-800 border-b-2 border-yellow-200 pb-1">Regular</p>
          <div class="flex justify-center mt-4">
            <div
              class="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-sm"
            >
              <p class="text-lg font-bold text-yellow-600">{{ dashboardData.subscriptions.regular }}</p>
            </div>
          </div>
          <p class="text-center text-xs text-gray-500 mt-2">Users</p>
        </div>
      </div>
    </div>

    <!-- Community Regulations -->
    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-lg font-semibold text-gray-800">Community Regulations</p>
          <p class="text-sm text-gray-500">System Integrity</p>
        </div>
        <Icon name="i-lucide-users" class="h-8 w-8 text-red-400" />
      </div>
      <div class="mt-6 bg-gray-50 p-4 rounded-lg">
        <ul class="space-y-3">
          <li class="flex justify-between text-sm font-medium text-gray-700">
            Banned Accounts
            <span class="text-red-500 font-bold">{{ dashboardData.regulations.banned }}</span>
          </li>
          <li class="flex justify-between text-sm font-medium text-gray-700">
            Suspended Accounts
            <span class="text-red-500 font-bold">{{ dashboardData.regulations.suspended }}</span>
          </li>
          <li class="flex justify-between text-sm font-medium text-gray-700">
            New Reports
            <span class="text-red-500 font-bold">{{ dashboardData.regulations.reports }}</span>
          </li>
        </ul>
      </div>
      <div class="flex items-center justify-between mt-6">
        <NuxtLink
          to="/regulations"
          class="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200"
          aria-label="View Details"
        >
          View Details
          <Icon name="i-lucide-arrow-right" class="h-5 w-5" />
        </NuxtLink>
        <UBadge
          :text="dashboardData.regulations.notifications"
          color="red"
          size="lg"
          class="font-semibold"
        >
          <template #prefix>
            <Icon name="i-lucide-bell" class="h-4 w-4 text-red-500" />
          </template>
        </UBadge>
      </div>
    </div>
  </div>
</template>