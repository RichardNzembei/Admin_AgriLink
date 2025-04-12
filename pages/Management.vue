<script setup>
import { ref } from 'vue';

const currentView = ref('management');

// Switch between views
const setView = (view) => {
  currentView.value = view;
};

// Sample data (replace with API in production)
const companyData = {
  management: [
    {
      id: 1,
      name: 'Richard Nzembei',
      role: 'Chief Executive Officer',
      bio: 'Over 15 years of experience in agribusiness, leading AgriLink to connect farmers and buyers efficiently.',
      email: 'rnzembei@agrilink.ac.ke',
      joined: '2020-01-10',
    },
    {
      id: 2,
      name: 'Jane Kamau',
      role: 'Chief Operating Officer',
      bio: 'Expert in supply chain management, ensuring seamless operations across AgriLink’s network.',
      email: 'jkamau@agrilink.ac.ke',
      joined: '2021-03-15',
    },
    {
      id: 3,
      name: 'Mark Otieno',
      role: 'Chief Financial Officer',
      bio: 'Specialist in financial strategy, driving AgriLink’s growth and sustainability.',
      email: 'motieno@agrilink.ac.ke',
      joined: '2022-06-01',
    },
  ],
  faqs: [
    {
      id: 1,
      question: 'What is AgriLink’s mission?',
      answer: 'AgriLink aims to empower farmers and buyers by creating a transparent, efficient marketplace for agricultural products.',
    },
    {
      id: 2,
      question: 'How does AgriLink verify product quality?',
      answer: 'We partner with certified inspectors to ensure all products meet industry standards before transactions.',
    },
    {
      id: 3,
      question: 'Can farmers join AgriLink directly?',
      answer: 'Yes, farmers can register through our platform or contact our support team for assistance.',
    },
  ],
  rules: [
    {
      id: 1,
      title: 'Farmer Registration',
      description: 'All farmers must provide valid identification and land ownership documents to join the platform.',
    },
    {
      id: 2,
      title: 'Payment Terms',
      description: 'Payments to farmers are processed within 7 business days after delivery confirmation.',
    },
    {
      id: 3,
      title: 'Compliance',
      description: 'All transactions must comply with Kenyan agricultural regulations and AgriLink’s code of conduct.',
    },
  ],
  certifications: [
    {
      id: 1,
      name: 'ISO 22000:2018',
      issuer: 'International Organization for Standardization',
      description: 'Certified for food safety management across our supply chain.',
      date: '2024-05-10',
    },
    {
      id: 2,
      name: 'KEBS Quality Mark',
      issuer: 'Kenya Bureau of Standards',
      description: 'Recognized for maintaining high-quality agricultural products.',
      date: '2023-11-15',
    },
    {
      id: 3,
      name: 'Fair Trade Certification',
      issuer: 'Fair Trade International',
      description: 'Committed to fair pricing and support for farmers.',
      date: '2024-02-20',
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
        <!-- Tabs -->
        <div class="border-b border-gray-200 mb-6">
          <nav class="flex space-x-4" aria-label="Company Tabs">
            <button
              @click="setView('management')"
              :class="[
                currentView === 'management'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'px-3 py-2 font-medium text-sm border-b-2',
              ]"
            >
              Management
            </button>
            <button
              @click="setView('faqs')"
              :class="[
                currentView === 'faqs'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'px-3 py-2 font-medium text-sm border-b-2',
              ]"
            >
              FAQs
            </button>
            <button
              @click="setView('rules')"
              :class="[
                currentView === 'rules'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'px-3 py-2 font-medium text-sm border-b-2',
              ]"
            >
              Rules & Regulations
            </button>
            <button
              @click="setView('certifications')"
              :class="[
                currentView === 'certifications'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'px-3 py-2 font-medium text-sm border-b-2',
              ]"
            >
              Certifications
            </button>
          </nav>
        </div>

        <!-- Content -->
        <!-- Management -->
        <div v-if="currentView === 'management'" class="space-y-8">
          <h2 class="text-2xl font-semibold text-gray-900">Our Management Team</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="member in companyData.management" :key="member.id" class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="font-medium text-gray-800 text-lg">{{ member.name }}</p>
              <p class="text-sm text-gray-600 font-semibold">{{ member.role }}</p>
              <p class="mt-2 text-sm text-gray-600">{{ member.bio }}</p>
              <p class="mt-2 text-sm text-gray-600">Email: {{ member.email }}</p>
              <p class="text-sm text-gray-600">Joined: {{ member.joined }}</p>
            </div>
          </div>
        </div>

        <!-- FAQs -->
        <div v-if="currentView === 'faqs'" class="space-y-6">
          <h2 class="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
          <div class="space-y-4">
            <div v-for="faq in companyData.faqs" :key="faq.id" class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="font-medium text-gray-800">{{ faq.question }}</p>
              <p class="mt-2 text-sm text-gray-600">{{ faq.answer }}</p>
            </div>
          </div>
        </div>

        <!-- Rules & Regulations -->
        <div v-if="currentView === 'rules'" class="space-y-6">
          <h2 class="text-2xl font-semibold text-gray-900">Rules & Regulations</h2>
          <div class="space-y-4">
            <div v-for="rule in companyData.rules" :key="rule.id" class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="font-medium text-gray-800">{{ rule.title }}</p>
              <p class="mt-2 text-sm text-gray-600">{{ rule.description }}</p>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div v-if="currentView === 'certifications'" class="space-y-6">
          <h2 class="text-2xl font-semibold text-gray-900">Certifications</h2>
          <div class="space-y-4">
            <div v-for="cert in companyData.certifications" :key="cert.id" class="bg-gray-50 p-4 rounded-lg shadow-sm">
              <p class="font-medium text-gray-800">{{ cert.name }}</p>
              <p class="text-sm text-gray-600">Issuer: {{ cert.issuer }}</p>
              <p class="mt-2 text-sm text-gray-600">{{ cert.description }}</p>
              <p class="text-sm text-gray-600">Date Awarded: {{ cert.date }}</p>
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