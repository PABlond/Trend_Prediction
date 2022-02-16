import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { routes } from "../../config";

interface Flow {
  flow_name: string;
  id: number;
  run_frequency: string;
  start_date: string;
  status: string;
}

export interface Trend {
  horizon_date: string;
  horizon_name: string;
  trend: number;
}

export const ApiRequestsContext = createContext<any>({});

export const useApiRequests = () => {
  return useContext(ApiRequestsContext);
};

export const InitApiRequests = () => {
  const [token, setToken] = useState<string>();
  const [flowState, setFlowState] = useState<Flow>();

  const flowRuns = async (productionDate: string) => {
    if (flowState) {
      const data = await axios
        .get(routes.flowRuns(flowState.id), {
          params: { production_date: productionDate },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch(({ response: { status } }) => ({ status }));

      return data;
    }
  };

  const runOutputs = async (runId: number) => {
    if (flowState) {
      const data = await axios.get(routes.runOutputs(runId, flowState.id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    }
  };

  const outputTrends = async (ouputId: number, runId: number) => {
    if (flowState) {
      const data = await axios.get(
        routes.trends(ouputId, runId, flowState.id),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data;
    }
  };

  useEffect(() => {
    const auth = async () => {
      const {
        REACT_APP_USERNAME: username = "",
        REACT_APP_PASSWORD: password = "",
      } = process.env;

      const { data } = await axios.get(routes.auth(), {
        auth: { username, password },
      });
      setToken(data);
    };

    auth();
  }, []);

  useEffect(() => {
    const getFlow = async () => {
      const { data } = await axios.get(routes.flow(1), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFlowState(data);
    };

    if (token) getFlow();
  }, [token]);

  return { func: { flowRuns, runOutputs, outputTrends }, flowState };
};
