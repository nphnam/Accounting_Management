import { AreaGraph } from '@/components/overview/components/area-graph';
import { delay } from '@/constants/mock-api';

export default async function AreaStats() {
  await await delay(2000);
  return <AreaGraph />;
}
