<template>
    <div class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-50 to-green-400">
        <div class="bg-white p-10 rounded-lg shadow-xl ">
            <h2 class="text-center font-bold text-sky-500 mb-2 max-w-full text-2xl border-b-2 p-2">Admin Auth</h2>
            <form class="p-4">
                <div class="mb-4">
                    <label for="phone" class="block text-gray-500 font-medium mb-2">Admin ID</label>
                    <input v-numeric-only type="text" placeholder="X1*******"
                        class="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required />
                </div>
                <div class="mb-4 relative">
                    <label for="password" class="block text-gray-500 font-medium mb-2">PassKey</label>
                    <input :type="isPassVisible ? 'text' : 'password'" placeholder="*******"
                        class="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required />
                    <span class="absolute right-3 top-10 cursor-pointer text-gray-500 border-l-4 p-1"
                        @click="togglePassword">
                        {{ isPassVisible ? "🙈" : "👁️" }}
                    </span>
                    <p class="text-red-400 p-2 text-center font-semibold italic underline hover:text-red-600">forgot password?</p>
                </div>
                <div>
                    <button type="submit"
                        class="bg-blue-300 rounded-lg p-3 w-full font-extrabold text-white hover:bg-slate-200 hover:text-blue-500">
                        <RouterLink to="dashboard">
                            <span>Authenticate</span>
                        </RouterLink>
                    </button>
                </div>
            </form>
        </div>
        <div class="bg-white text-black mt-4 p-6 rounded-lg shadow-lg max-w-full">
               <div class="px-12">
                <p class=" text-lg">Don't have an account?</p>
                <RouterLink to="/register">
                    <p class="text-center text-red-400 underline text-md font-bold hover:text-red-700">Register</p>
                </RouterLink>
               </div>
            </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const isPassVisible = ref(false);
const togglePassword = () => {
    isPassVisible.value = !isPassVisible.value;
}
</script>