import Map from '@/components/observatoire/maps/Map';
import { Config } from '@/config';

export default function Observatoire() {
  const title = 'test';
  const mapStyle = Config.get<string>('observatoire.mapStyle');

  return <Map title={title} mapStyle={mapStyle} />;
}
