
import { RecentSales } from '@/components/overview/components/recent-sales';
import { delay } from '@/constants/mock-api';

export default async function Sales() {
  await delay(3000);
  return <RecentSales />;
}
