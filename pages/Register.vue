<template>
    <div class="min-h-screen bg-gradient-to-b from-green-50 to-green-400 flex flex-col justify-center items-center ">
        <div class="bg-white p-10 rounded-xl shadow-lg">
            <h2 class="text-center font-bold text-red-400 mb-2 max-w-full text-2xl border-b-2 p-2">Admin Reg</h2>
            <form class="p-4">
                <div class="mb-4">
                    <label for="role" class="block text-gray-500 font-medium mb-2">Admin Role</label>
                    <select v-model="role" name="role"
                        class="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400">
                        >
                        <option disabled value>Choose Role</option>
                        <option value="ceo">CEO</option>
                        <option value="techsupport">Tech Support</option>
                        <option value="manager">Manager</option>
                        <option value="UserController">Users Manager</option>

                    </select>
                </div>
                <div class="mb-4">
                    <label for="admin id" class="block text-gray-500 font-medium mb-2">Admin ID</label>
                    <input v-model="adminId" type="text" placeholder="X1*******"
                        class="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                        required />
                </div>
                <div class="mb-4 relative">
                    <label for="passkey" class="block text-gray-500 font-medium mb-2">Enter PassKey</label>
                    <input v-model="passKey" :type="isPassVisible ? 'text' : 'password'" placeholder="*******"
                        class="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                        required />
                    <span class="absolute right-3 top-10 cursor-pointer text-gray-500 border-l-4 p-1"
                        @click="togglePassword">
                        {{ isPassVisible ? "🙈" : "👁️" }}
                    </span>
                </div>
                <div class="mb-4 relative">
                    <label for="passkey" class="block text-gray-500 font-medium mb-2">Confirm PassKey</label>
                    <input v-model="passKey" :type="isPassVisible ? 'text' : 'password'" placeholder="*******"
                        class="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                        required />
                    <span class="absolute right-3 top-10 cursor-pointer text-gray-500 border-l-4 p-1"
                        @click="togglePassword">
                        {{ isPassVisible ? "🙈" : "👁️" }}
                    </span>
                </div>
                <div>
                    <button type="submit"
                        class="bg-red-300 rounded-lg p-3 w-full text-white font-extrabold hover:bg-slate-200 hover:text-red-400">
                        <RouterLink to="/">
                            <span>Register</span>
                        </RouterLink>
                    </button>
                </div>
            </form>
        </div>
        <div class="bg-white text-black mt-4 p-6 rounded-lg shadow-lg max-w-full">
            <div class="px-16">
                <p class=" text-lg">I have an account,</p>
                <RouterLink to="/">
                    <p class="text-center text-blue-400 underline text-md font-bold hover:text-blue-700">Authenticate
                    </p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAdminStore } from '~/stores/adminAuth';
const router = useRouter();
const adminStore = useAdminStore();
const isPassVisible = ref(false);
const togglePassword = () => {
    isPassVisible.value = !isPassVisible.value;
}

const role = "";
const adminId = "";
const passKey = "";

async function registerAdmin() {
    try {
        const response = await adminStore.register(role.value, adminId.value, passKey.value);
        if (response) {
            router.push("/");
        }
    } catch (error) {
        console.error("registartion failed:", error);
        alert(error.message || "an error occured during regstartion");
    }
}
</script>