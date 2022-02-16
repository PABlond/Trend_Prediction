class Routes {
  flowId = "1";

  auth() {
    return `auth/`;
  }

  flow(flowId: number = 1) {
    return `flows/${flowId}`;
  }

  flowRuns(flowId: number = 1) {
    return `flows/${flowId}/runs`;
  }

  runOutputs(runId: number, flowId: number = 1) {
    return `flows/${flowId}/runs/${runId}/outputs`;
  }

  trends(ouputId: number, runId: number, flowId: number = 1) {
    return `flows/${flowId}/runs/${runId}/outputs/${ouputId}/trends`;
  }
}

export const routes = new Routes();
