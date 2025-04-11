import { defineStore } from "pinia";

const apiBaseUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:5000";
export const useAdminStore = defineStore("admin", {
  state: () => ({
    admin: null,
  }),

  actions: {
    async register(role, adminId, passKey) {
      const response = await fetch(`${apiBaseUrl}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application//json" },
        body: JSON.stringify({ role, adminId, passKey }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "registration failed");
      }

      return response.json();
    },
    async authenticate(adminId, passKey) {
      try {
        const response = await fetch(`${apiBaseUrl}/api/authenticate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ adminId, passKey }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "authentication failed");
        }
        const data = await response.json();
        this.admin = data.admin;
        localStorage.setItem("adminId", data.admin.id);
        localStorage.setItem("amin", JSON.stringify(data.admin));

        return true;
      } catch (error) {
        console.error("authentication error:", error.message || error);
        return false;
      }
    },

    initializeAdmin() {
      const admin = localStorage("admin");
      if (admin) {
        this.admin = JSON.parse(admin);
      }
    },
    logout() {
      this.admin = null;
      localStorage.removeItem("admin");
      localStorage.removeItem("adminId");
    },
  },
});
