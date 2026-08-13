class HealthService {
  checkHealth() {
    try {
      return { success: true, message: "Pulse App is running..." };
    } catch (error) {
      console.error("Error in HealthService.checkHealth(): ", error.message);
      return { success: false, message: "Internal Server Error..." };
    }
  }
}

const healthService = new HealthService();
export default healthService;
