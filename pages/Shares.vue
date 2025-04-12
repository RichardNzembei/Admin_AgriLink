<script setup>
import { ref } from 'vue';

const currentView = ref('overview');

// Switch between share-related views
const setView = (view) => {
  currentView.value = view;
};

// Sample share data (replace with API in production)
const shareData = {
  overview: {
    totalShares: 1000000,
    issuedShares: 800000,
    sharePrice: 'KES 250',
    marketCap: 'KES 200M',
    dividendYield: '4.5%',
  },
  shareholders: [
    {
      id: 1,
      name: 'Richard Nzembei',
      shares: 200000,
      percentage: '25%',
      type: 'Individual',
      joined: '2023-01-15',
    },
    {
      id: 2,
      name: 'AgriCorp Ltd',
      shares: 150000,
      percentage: '18.75%',
      type: 'Corporate',
      joined: '2023-06-10',
    },
    {
      id: 3,
      name: 'Jane Kamau',
      shares: 100000,
      percentage: '12.5%',
      type: 'Individual',
      joined: '2024-02-20',
    },
  ],
  transactions: [
    {
      id: 1,
      type: 'Purchase',
      shareholder: 'Richard Nzembei',
      shares: 50000,
      price: 'KES 240',
      date: '2025-03-15',
    },
    {
      id: 2,
      type: 'Sale',
      shareholder: 'AgriCorp Ltd',
      shares: 20000,
      price: 'KES 260',
      date: '2025-04-01',
    },
  ],
  dividends: [
    {
      id: 1,
      year: '2024',
      amountPerShare: 'KES 10',
      totalPayout: 'KES 8M',
      datePaid: '2024-12-15',
    },
    {
      id: 2,
      year: '2023',
      amountPerShare: 'KES 8',
      totalPayout: 'KES 6.4M',
      datePaid: '2023-12-20',
    },
  ],
  performance: [
    {
      quarter: 'Q1 2025',
      sharePrice: 'KES 250',
      change: '+5%',
      volume: 100000,
      date: '2025-03-31',
    },
    {
      quarter: 'Q4 2024',
      sharePrice: 'KES 238',
      change: '+2%',
      volume: 85000,
      date: '2024-12-31',
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
        <!-- Share Tabs -->
        <div class="border-b border-gray-200 mb-6">
          <nav class="flex space-x-4" aria-label="Share Tabs">
            <button
              @click="setView('overview')"
              :class="[
                currentView === 'overview'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'px-3 py-2 font-medium text-sm border-b-2',
              ]"
            >
              Overview
            </button>
            <button
              @click="setView('shareholders')"
              :class="[
                currentView === 'shareholders'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'px-3 py-2 font-medium text-sm border-b-2',
              ]"
            >
              Shareholders
            </button>
            <button
              @click="setView('transactions')"
              :class="[
                currentView === 'transactions'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'px-3 py-2 font-medium text-sm border-b-2',
              ]"
            >
              Transactions
            </button>
            <button
              @click="setView('dividends')"
              :class="[
                currentView === 'dividends'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'px-3 py-2 font-medium text-sm border-b-2',
              ]"
            >
              Dividends
            </button>
            <button
              @click="setView('performance')"
              :class="[
                currentView === 'performance'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'px-3 py-2 font-medium text-sm border-b-2',
              ]"
            >
              Performance
            </button>
          </nav>
        </div>

        <!-- Share Content -->
        <!-- Overview -->
        <div v-if="currentView === 'overview'" class="space-y-8">
          <h2 class="text-2xl font-semibold text-gray-900">Shares Overview</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 class="text-lg font-medium text-gray-800">Total Shares</h3>
              <p class="mt-2 text-2xl font-bold text-gray-900">{{ shareData.overview.totalShares.toLocaleString() }}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 class="text-lg font-medium text-gray-800">Issued Shares</h3>
              <p class="mt-2 text-2xl font-bold text-gray-900">{{ shareData.overview.issuedShares.toLocaleString() }}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 class="text-lg font-medium text-gray-800">Share Price</h3>
              <p class="mt-2 text-2xl font-bold text-gray-900">{{ shareData.overview.sharePrice }}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 class="text-lg font-medium text-gray-800">Market Cap</h3>
              <p class="mt-2 text-2xl font-bold text-gray-900">{{ shareData.overview.marketCap }}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 class="text-lg font-medium text-gray-800">Dividend Yield</h3>
              <p class="mt-2 text-2xl font-bold text-gray-900">{{ shareData.overview.dividendYield }}</p>
            </div>
          </div>
        </div>

        <!-- Shareholders -->
        <div v-if="currentView === 'shareholders'" class="space-y-6">
          <h2 class="text-2xl font-semibold text-gray-900">Shareholders</h2>
          <div class="space-y-4">
            <div v-for="shareholder in shareData.shareholders" :key="shareholder.id" class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="font-medium text-gray-800">{{ shareholder.name }}</p>
              <p class="text-sm text-gray-600">Shares: {{ shareholder.shares.toLocaleString() }}</p>
              <p class="text-sm text-gray-600">Ownership: {{ shareholder.percentage }}</p>
              <p class="text-sm text-gray-600">Type: {{ shareholder.type }}</p>
              <p class="text-sm text-gray-600">Joined: {{ shareholder.joined }}</p>
            </div>
          </div>
        </div>

        <!-- Transactions -->
        <div v-if="currentView === 'transactions'" class="space-y-6">
          <h2 class="text-2xl font-semibold text-gray-900">Share Transactions</h2>
          <div class="space-y-4">
            <div v-for="txn in shareData.transactions" :key="txn.id" class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="font-medium text-gray-800">{{ txn.type }}</p>
              <p class="text-sm text-gray-600">Shareholder: {{ txn.shareholder }}</p>
              <p class="text-sm text-gray-600">Shares: {{ txn.shares.toLocaleString() }}</p>
              <p class="text-sm text-gray-600">Price: {{ txn.price }}</p>
              <p class="text-sm text-gray-600">Date: {{ txn.date }}</p>
            </div>
          </div>
        </div>

        <!-- Dividends -->
        <div v-if="currentView === 'dividends'" class="space-y-6">
          <h2 class="text-2xl font-semibold text-gray-900">Dividends</h2>
          <div class="space-y-4">
            <div v-for="dividend in shareData.dividends" :key="dividend.id" class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="font-medium text-gray-800">Year: {{ dividend.year }}</p>
              <p class="text-sm text-gray-600">Amount per Share: {{ dividend.amountPerShare }}</p>
              <p class="text-sm text-gray-600">Total Payout: {{ dividend.totalPayout }}</p>
              <p class="text-sm text-gray-600">Date Paid: {{ dividend.datePaid }}</p>
            </div>
          </div>
        </div>

        <!-- Performance -->
        <div v-if="currentView === 'performance'" class="space-y-6">
          <h2 class="text-2xl font-semibold text-gray-900">Share Performance</h2>
          <div class="space-y-4">
            <div v-for="perf in shareData.performance" :key="perf.quarter" class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="font-medium text-gray-800">Quarter: {{ perf.quarter }}</p>
              <p class="text-sm text-gray-600">Share Price: {{ perf.sharePrice }}</p>
              <p class="text-sm text-gray-600">Change: {{ perf.change }}</p>
              <p class="text-sm text-gray-600">Volume: {{ perf.volume.toLocaleString() }}</p>
              <p class="text-sm text-gray-600">Date: {{ perf.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.transition {
  transition: all 0.2s ease;
}
</style>