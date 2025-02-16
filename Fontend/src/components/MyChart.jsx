import { Bar, BarChart } from "recharts";

import { ChartContainer, ChartTooltipContent } from "@/components/ui/charts";

export function MyChart() {
  return (
    <ChartContainer>
      <BarChart data={data}>
        <Bar dataKey="value" />
        <ChartTooltip content={<ChartTooltipContent />} />
      </BarChart>
    </ChartContainer>
  );
}
