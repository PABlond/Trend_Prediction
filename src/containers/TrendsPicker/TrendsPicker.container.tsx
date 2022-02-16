import { FC, useState } from "react";

import { DatePicker, ErrorMessage, TrendChart } from "../../components";
import { useApiRequests, Trend } from "../../hooks";
import { Style } from "./TrendsPicker.style";

interface TrendsPickerState {
  errorMessage: string | undefined;
  trendsData: Trend[];
}

export const TrendsPicker: FC = () => {
  const {
    func: { flowRuns, runOutputs, outputTrends },
    flowState: { start_date: startDate },
  } = useApiRequests();
  const initialState: TrendsPickerState = {
    errorMessage: undefined,
    trendsData: [],
  };
  const [state, setState] = useState(initialState);
  const [selectedDate, setSelectedDate] = useState<string>(
    startDate.split("T")[0]
  );
  const setErrorMessage = (errorMessage: string) => {
    setState({ ...state, errorMessage, trendsData: initialState.trendsData });
  };

  const onDateSelected = async ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setState({ ...initialState });
    setSelectedDate(value);

    const productionDate = new Date(value)
      .toISOString()
      .replace(/.\d+Z$/g, "Z");

    const { status, data: runsData } = await flowRuns(productionDate);
    if (status === 404) {
      setErrorMessage("no run available for this date");
      return;
    }

    const {
      results: [{ complete, id: runId }],
    } = runsData;
    if (!complete) {
      setErrorMessage("no complete run for this date");
      return;
    }

    const {
      data: {
        results: [{ id: outputId }],
      },
    } = await runOutputs(runId);

    const {
      data: { results: trendsData },
    } = await outputTrends(outputId, runId);

    setState({ ...state, trendsData, errorMessage: undefined });
  };

  return (
    <Style.Container>
      <Style.DatePickerContainer>
        <label>Please fill in a date to display trend prediction :</label>
        <DatePicker date={selectedDate} onChange={onDateSelected} />
      </Style.DatePickerContainer>
      <ErrorMessage message={state.errorMessage} />
      <div style={{ width: "100%", height: 500 }}>
        <Style.ChartContainer>
          {state.trendsData.length > 0 && (
            <TrendChart data={state.trendsData} />
          )}
        </Style.ChartContainer>
      </div>
    </Style.Container>
  );
};
