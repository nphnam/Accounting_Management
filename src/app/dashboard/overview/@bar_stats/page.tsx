import { BarGraph } from '@/components/overview/components/bar-graph';
import { delay } from '@/constants/mock-api';

export default async function BarStats() {
  await await delay(1000);

  return <BarGraph />;
}
