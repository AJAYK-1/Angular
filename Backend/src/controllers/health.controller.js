import healthService from "../services/health.service.js";

class HealthController {
  constructor(healthService) {
    this.healthService = healthService;
  }

  healthCheck(req, res) {
    try {
      const result = this.healthService.checkHealth();
      return res.status(200).json(result);
    } catch (error) {
      console.log("Error in HealthController.healthCheck(): ", error.message);
      return res.status(500).json({ message: error.message });
    }
  }
}

const healthController = new HealthController(healthService);
export default healthController;
