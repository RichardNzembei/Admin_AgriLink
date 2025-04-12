<script setup>
import { ref } from 'vue';
 const currentView=ref('issues');

 const setView= (view)=>{
    currentView.value=view;
 }

 let AdminData=null;
</script>

<template>
    <div class="bg-gray-100 min-h-screen p-6">
        <!--Header-->
        <navigationBar />
        <div class="bg-white w-full rounded-lg shadow p-4 mt-4">
            <div class="flex ">
                <div class="border-r-2 border-gray-600 p-6">
                    <img src="../assets/img/WhatsApp Image 2025-04-04 at 10.42.44 PM.jpeg" alt="profile image"
                        class="w-20 h-20 rounded-full">
                    <div class="text-black p-3 space-y-4 border-b-2 border-sky-400 ">
                        <p class="font-bold font-sans text-lg">Richard Nzembei</p>
                        <p class="font-mono text-gray-800 ">CEO</p>

                        <p class="flex gap-4">
                            <span>
                                <Icon name="i-lucide-mail" class="size-5 text-blue-500" />
                            </span>
                            <span>rnzembei@agrilink.ac.ke</span>
                        </p>
                    </div>
                    <div class="text-black p-4 ">
                        <p class="font-semibold">My Work</p>

                        <div class="text-green-500 flex flex-col space-y-4 mt-4">
                            <UButton 
                            @click="setView('issues')"
                            label="Issues" 
                            icon="i-lucide-circle" 
                            variant="soft"
                            class="font-semibold" 
                            aria-label="issues" />
                            <UButton 
                            @click="setView('requests')" 
                            label="Requests" 
                            icon="i-lucide-bell"
                            variant="solid" 
                            class="font-semibold " />
                            <UButton 
                            @click="setView('endorsements')"
                            label="Endorsements" 
                            icon="i-lucide-bell"
                            variant="solid" 
                            class="font-semibold " />
                            <UButton 
                            @click="setView('discussions')"
                            label="Discussions" 
                            icon="i-lucide-bell"
                            variant="solid" 
                            class="font-semibold " />
                            <UButton 
                            @click="setView('employees')"
                            label="Employees" 
                            icon="i-lucide-users"
                            variant="solid" 
                            class="font-semibold " />
                            <UButton 
                            @click="setView('settings')"
                            label="Settings" 
                            icon="i-mdi-gear" 
                            variant="solid"
                            class="font-semibold " />
                        </div>

                    </div>

                </div>
                <div v-if="currentView==='issues'" class="text-black ">
                    <p>Issues</p>
                    <p>Issues</p>
                    <p>Issues</p>
                </div>
                <div v-if="currentView==='requests'" class="text-black">
                   <p>requests</p>
                   <p>requests</p>
                   <p>requests</p>
                </div>
                <div v-if="currentView==='endorsements'" class="text-black">
                    <p>endorsements</p>
                    <p>endorsements</p>
                    <p>endorsements</p>
                   
                </div>
                <div v-if="currentView==='discussions'" class="text-black">
                    <p>discussions</p>
                    <p>discussions</p>
                    <p>discussions</p>
                    
                </div>
                <div v-if="currentView==='employees'" class="text-black">
                    <p>employees</p>
                    <p>employees</p>
                    <p>employees</p>
                    
                </div>
                <div v-if="currentView==='settings'" class="text-black">
                    <p>settings</p>
                    <p>settings</p>
                    <p>settings</p>
                  
                </div>
            </div>
        </div>
        </div>
</template>