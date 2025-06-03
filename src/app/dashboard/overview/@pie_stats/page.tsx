import { PieGraph } from '@/components/overview/components/pie-graph';
import { delay } from '@/constants/mock-api';

export default async function Stats() {
  await delay(1000);
  return <PieGraph />;
}
