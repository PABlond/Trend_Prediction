import { ChangeEventHandler, FC } from "react";

import { useApiRequests } from "../../hooks";

type DatePickerType = {
  date: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

export const DatePicker: FC<DatePickerType> = ({ date, onChange }) => {
  const {
    flowState: { start_date: startDate },
  } = useApiRequests();

  return (
    <input
      type="date"
      name="date"
      min={startDate.split("T")[0]}
      onChange={onChange}
      value={date}
    />
  );
};
