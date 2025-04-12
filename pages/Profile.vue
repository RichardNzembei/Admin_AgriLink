<script setup>
import { ref } from 'vue';

const currentView = ref('issues');

const setView = (view) => {
    currentView.value = view;
};

let AdminData = null;
</script>

<template>
    <div class="bg-gray-50 min-h-screen p-4 md:p-8">
        <!-- Header -->
        <navigationBar />
        <div class="bg-white max-w-7xl mx-auto rounded-xl shadow-lg p-6 mt-6">
            <div class="flex flex-col md:flex-row gap-6">
                <!-- Sidebar -->
                <div class="w-full md:w-80 border-r-2 border-gray-200 p-6">
                    <div class="flex flex-col items-center">
                        <img src="../assets/img/WhatsApp Image 2025-04-04 at 10.42.44 PM.jpeg" alt="profile image"
                            class="w-24 h-24 rounded-full object-cover shadow-md" />
                        <div class="text-center mt-4 space-y-2 border-b border-sky-300 pb-4">
                            <p class="font-bold text-xl text-gray-900">Richard Nzembei</p>
                            <p class="text-sm text-gray-600 font-medium">CEO</p>
                            <p class="flex items-center justify-center gap-2 text-gray-700">
                                <Icon name="i-lucide-mail" class="size-5 text-blue-500" />
                                <span class="text-sm">rnzembei@agrilink.ac.ke</span>
                            </p>
                        </div>
                    </div>
                    <div class="mt-6">
                        <p class="font-semibold text-gray-800 text-lg">My Work</p>
                        <div class="flex flex-col space-y-2 mt-4">
                            <UButton @click="setView('issues')" label="Issues" icon="i-lucide-circle"
                                :variant="currentView === 'issues' ? 'solid' : 'soft'" color="blue"
                                class="font-medium justify-start" aria-label="Issues" />
                            <UButton @click="setView('requests')" label="Requests" icon="i-lucide-bell"
                                :variant="currentView === 'requests' ? 'solid' : 'soft'" color="blue"
                                class="font-medium justify-start" aria-label="Requests" />
                            <UButton @click="setView('endorsements')" label="Endorsements" icon="i-lucide-thumbs-up"
                                :variant="currentView === 'endorsements' ? 'solid' : 'soft'" color="blue"
                                class="font-medium justify-start" aria-label="Endorsements" />
                            <UButton @click="setView('discussions')" label="Discussions" icon="i-lucide-message-square"
                                :variant="currentView === 'discussions' ? 'solid' : 'soft'" color="blue"
                                class="font-medium justify-start" aria-label="Discussions" />
                            <UButton @click="setView('employees')" label="Employees" icon="i-lucide-users"
                                :variant="currentView === 'employees' ? 'solid' : 'soft'" color="blue"
                                class="font-medium justify-start" aria-label="Employees" />
                            <UButton @click="setView('settings')" label="Settings" icon="i-mdi-gear"
                                :variant="currentView === 'settings' ? 'solid' : 'soft'" color="blue"
                                class="font-medium justify-start" aria-label="Settings" />
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="flex-1 p-6">
                    <!-- Issues View -->
                    <div v-if="currentView === 'issues'" class="space-y-6">
                        <h2 class="text-2xl font-semibold text-gray-900">Issues</h2>
                        <div class="space-y-4">
                            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p class="font-medium text-gray-800">Server Downtime</p>
                                <p class="text-sm text-gray-600">Reported: 2025-04-10</p>
                                <p class="text-sm text-gray-600">Status: In Progress</p>
                                <p class="mt-2 text-gray-700">
                                    The main server experienced downtime affecting user access. Team is investigating.
                                </p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p class="font-medium text-gray-800">Payment Gateway Bug</p>
                                <p class="text-sm text-gray-600">Reported: 2025-04-09</p>
                                <p class="text-sm text-gray-600">Status: Open</p>
                                <p class="mt-2 text-gray-700">
                                    Users reported errors during checkout. Awaiting developer review.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Requests View -->
                    <div v-if="currentView === 'requests'" class="space-y-6">
                        <h2 class="text-2xl font-semibold text-gray-900">Requests</h2>
                        <div class="space-y-4">
                            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p class="font-medium text-gray-800">Leave Request</p>
                                <p class="text-sm text-gray-600">Employee: Jane Doe</p>
                                <p class="text-sm text-gray-600">Date: 2025-04-15 to 2025-04-20</p>
                                <p class="mt-2 text-gray-700">Status: Pending Approval</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p class="font-medium text-gray-800">Budget Increase</p>
                                <p class="text-sm text-gray-600">Department: Marketing</p>
                                <p class="text-sm text-gray-600">Amount: $10,000</p>
                                <p class="mt-2 text-gray-700">Status: Under Review</p>
                            </div>
                        </div>
                    </div>

                    <!-- Endorsements View -->
                    <div v-if="currentView === 'endorsements'" class="space-y-6">
                        <h2 class="text-2xl font-semibold text-gray-900">Endorsements</h2>
                        <div class="space-y-4">
                            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p class="font-medium text-gray-800">Employee Recognition</p>
                                <p class="text-sm text-gray-600">Employee: Mark Smith</p>
                                <p class="text-sm text-gray-600">Date: 2025-04-08</p>
                                <p class="mt-2 text-gray-700">
                                    Recognized for outstanding leadership in the Q1 project.
                                </p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p class="font-medium text-gray-800">Team Achievement</p>
                                <p class="text-sm text-gray-600">Team: DevOps</p>
                                <p class="text-sm text-gray-600">Date: 2025-04-05</p>
                                <p class="mt-2 text-gray-700">
                                    Successfully deployed new platform ahead of schedule.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Discussions View -->
                    <div v-if="currentView === 'discussions'" class="space-y-6">
                        <h2 class="text-2xl font-semibold text-gray-900">Discussions</h2>
                        <div class="space-y-4">
                            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p class="font-medium text-gray-800">Q2 Strategy Planning</p>
                                <p class="text-sm text-gray-600">Participants: 12</p>
                                <p class="text-sm text-gray-600">Last Update: 2025-04-11</p>
                                <p class="mt-2 text-gray-700">
                                    Discussion on new market expansion strategies.
                                </p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p class="font-medium text-gray-800">Product Feedback</p>
                                <p class="text-sm text-gray-600">Participants: 8</p>
                                <p class="text-sm text-gray-600">Last Update: 2025-04-10</p>
                                <p class="mt-2 text-gray-700">
                                    Collecting user feedback for version 2.0 release.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Employees View -->
                    <div v-if="currentView === 'employees'" class="space-y-6">
                        <h2 class="text-2xl font-semibold text-gray-900">Employees</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p class="font-medium text-gray-800">Jane Doe</p>
                                <p class="text-sm text-gray-600">Role: HR Manager</p>
                                <p class="text-sm text-gray-600">Email: jane.doe@agrilink.ac.ke</p>
                                <p class="mt-2 text-gray-700">Status: Active</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p class="font-medium text-gray-800">Mark Smith</p>
                                <p class="text-sm text-gray-600">Role: Lead Developer</p>
                                <p class="text-sm text-gray-600">Email: mark.smith@agrilink.ac.ke</p>
                                <p class="mt-2 text-gray-700">Status: Active</p>
                            </div>
                        </div>
                    </div>

                    <!-- Settings View -->
                    <div v-if="currentView === 'settings'" class="space-y-6">
                        <h2 class="text-2xl font-semibold text-gray-900">Settings</h2>
                        <div class="space-y-4">
                            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p class="font-medium text-gray-800">Profile Settings</p>
                                <p class="text-sm text-gray-600">Update your personal information.</p>
                                <button class="mt-2 text-blue-600 hover:underline text-sm">Edit Profile</button>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <p class="font-medium text-gray-800">Notification Preferences</p>
                                <p class="text-sm text-gray-600">Manage how you receive alerts.</p>
                                <button class="mt-2 text-blue-600 hover:underline text-sm">Configure
                                    Notifications</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>