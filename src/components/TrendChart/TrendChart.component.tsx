import { FC } from "react";
import {
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { colors } from "../../config";
import { Trend } from "../../hooks";

type TrendChartType = {
  data: Trend[];
};

export const TrendChart: FC<TrendChartType> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={50} height={20} data={data}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="horizon_name" />
        <YAxis />
        <Tooltip
          labelFormatter={(value: string, [props]) =>
            props
              ? new Date(props.payload.horizon_date).toLocaleDateString("en-US")
              : value
          }
        />
        <ReferenceLine y={0} stroke={colors.black} />
        <Bar dataKey="trend">
          {data.map((entry: Trend, index: number) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.trend > 0 ? colors.green : colors.red}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
