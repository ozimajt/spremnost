import RackShell from '@/components/rack/RackShell';
import HeaderModule from '@/components/rack/HeaderModule';
import Kondukter from '@/components/modules/Kondukter';
import Chronometer from '@/components/modules/Chronometer';
import Inventory from '@/components/modules/Inventory';
import Readiness from '@/components/modules/Readiness';
import Operator from '@/components/modules/Operator';
import Feed from '@/components/modules/Feed';
import MapModule from '@/components/modules/MapModule';
import Ticker from '@/components/rack/Ticker';
import BottomPlate from '@/components/rack/BottomPlate';

export default function Home() {
  return (
    <RackShell>
      <HeaderModule />
      <Kondukter />
      <Chronometer />
      <Inventory />
      <Readiness />
      <Operator />
      <Feed />
      <MapModule />
      <Ticker />
      <BottomPlate />
    </RackShell>
  );
}
