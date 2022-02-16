class Routes {
  apiUrl = "";
  flowId = "1";

  constructor() {
    if (process.env.NODE_ENV !== "development") {
      const { REACT_APP_API_URL: apiUrl = "" } = process.env;
      this.apiUrl = apiUrl;
    }
  }

  auth() {
    return `${this.apiUrl}auth/`;
  }

  flow(flowId: number = 1) {
    return `${this.apiUrl}flows/${flowId}`;
  }

  flowRuns(flowId: number = 1) {
    return `${this.apiUrl}flows/${flowId}/runs`;
  }

  runOutputs(runId: number, flowId: number = 1) {
    return `${this.apiUrl}flows/${flowId}/runs/${runId}/outputs`;
  }

  trends(ouputId: number, runId: number, flowId: number = 1) {
    return `${this.apiUrl}flows/${flowId}/runs/${runId}/outputs/${ouputId}/trends`;
  }
}

export const routes = new Routes();
