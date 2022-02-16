import { FC } from "react";

import { Loading } from "./components";
import { TrendsPicker, AppHeader } from "./containers";
import { useApiRequests } from "./hooks";
import { ApiRequestsContext, InitApiRequests } from "./hooks";
import { Style } from "./App.style";

export const AppLayout: FC = ({ children }) => {
  return (
    <ApiRequestsContext.Provider value={InitApiRequests()}>
      {children}
    </ApiRequestsContext.Provider>
  );
};

export const App = () => {
  const { flowState } = useApiRequests();
  return (
    <Style.Container>
      {flowState ? (
        <>
          <AppHeader />
          <TrendsPicker />
        </>
      ) : (
        <Loading />
      )}
    </Style.Container>
  );
};
