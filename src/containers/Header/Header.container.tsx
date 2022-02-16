import { useApiRequests } from "../../hooks";
import { Style } from "./Header.style";

export const AppHeader = () => {
  const { flowState } = useApiRequests();

  return (
    <Style.Container>
      <Style.H1>{flowState.flow_name}</Style.H1>
    </Style.Container>
  );
};
