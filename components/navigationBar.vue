<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

let AdminData = null;
if (typeof window !== 'undefined') {
  try {
    const adminDataRaw = localStorage.getItem('adminData');
    AdminData = adminDataRaw ? JSON.parse(adminDataRaw) : null;
  } catch (e) {
    console.error('Invalid adminData in localStorage', e);
    localStorage.removeItem('adminData');
  }
}
const adminRole = ref(AdminData?.role?.toLowerCase() || 'guest');
const navItems = computed(() => {
  const items = [
    { to: '/dashboard', label: 'Overview', icon: 'i-lucide-home', roles: ['superadmin', 'admin', 'editor'] },
    { to: '/reports', label: 'Reports', icon: 'i-lucide-bar-chart', roles: ['superadmin', 'admin'] },
    { to: '/management', label: 'Management', icon: 'i-lucide-users', roles: ['superadmin'] },
    { to: '/shares', label: 'Shares', icon: 'i-lucide-pie-chart', roles: ['superadmin', 'admin'] },
    { to: '/profile', label: 'Profile', icon: 'i-lucide-user', roles: ['superadmin', 'admin', 'editor'] },
  ];

  return adminRole.value && adminRole.value !== 'guest'
    ? items.filter(item => item.roles.includes(adminRole.value))
    : [];
});

const isMenuOpen = ref(false);
</script>

<template>
  <header class="bg-white p-4 rounded-lg shadow mb-6">
    <!-- Title -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900">Admins Dashboard</h1>
      <!-- Hamburger Button (Mobile) -->
      <button class="md:hidden text-gray-600 hover:text-blue-600" @click="isMenuOpen = !isMenuOpen">
        <Icon :name="isMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="h-6 w-6" />
      </button>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex justify-center gap-6 mt-4">
      <RouterLink v-for="item in navItems" :key="item.to" :to="item.to"
        class="flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors duration-200" :class="{
          'text-blue-600 bg-blue-50': route.path === item.to,
          'text-gray-600 hover:text-blue-600 hover:bg-blue-50': route.path !== item.to,
        }" :aria-current="route.path === item.to ? 'page' : undefined">
        <Icon :name="item.icon" class="h-5 w-5" />
        {{ item.label }}
      </RouterLink>
    </nav>

    <!-- Mobile Navigation -->
    <nav v-if="isMenuOpen" class="md:hidden mt-4 flex flex-col gap-2 bg-white p-4 rounded-lg shadow">
      <RouterLink v-for="item in navItems" :key="item.to" :to="item.to"
        class="flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors duration-200" :class="{
          'text-blue-600 bg-blue-50': route.path === item.to,
          'text-gray-600 hover:text-blue-600 hover:bg-blue-50': route.path !== item.to,
        }" :aria-current="route.path === item.to ? 'page' : undefined" @click="isMenuOpen = false">
        <Icon :name="item.icon" class="h-5 w-5" />
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>