import { useLocation } from 'react-router-dom';
import { PieChart as Chart, Pie, Cell } from 'recharts';
import { useContentQuery } from '../../../../hooks/queries/useContentQuery';
import { Category } from '../../../../types';

export function PieChart() {
  const { pathname } = useLocation();
  const { content } = useContentQuery();

  const categoryType =
    pathname === '/entradas' ? content?.inflow : content?.outflow;

  let data: {
    name: string;
    value: number;
  }[] = [];
  let colors: string[] = [];
  const categories: Category[] = [];

  categoryType?.categories?.forEach((category) => {
    if (category.transactions.length) {
      categories.push(category);
      data.push({
        name: category.name,
        value: category.sum,
      });
      colors.push(category.iconColor);
    }
  });

  if (!data.length) {
    data = [{ name: 'data', value: 100 }];
    colors = ['#E6E6E6'];
  }

  return (
    <Chart width={240} height={240}>
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
    </Chart>
  );
}
