import { PieChart, Pie, Cell } from 'recharts';

type Data = {
  name: string;
  value: number;
};

type Colors = string[];

type PieChartProps = {
  data: Data[];
  colors: Colors;
};

export function Chart({ data, colors }: PieChartProps) {
  if (!data.length) {
    data = [{ name: 'data', value: 100 }];
    colors = ['#E6E6E6'];
  }

  return (
    <PieChart width={240} height={240}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={100}
        innerRadius={70}
        dataKey="value"
      >
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
