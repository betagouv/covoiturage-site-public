import { shallowRef, markRaw, onMounted, onUnmounted } from 'vue'
import type { IControl, Map } from 'maplibre-gl'
import maplibregl from 'maplibre-gl'
import type { MapInterface } from '@/interfaces/observatoire/helpersInterfaces'

export function useMap(options:MapInterface) {
  const map = shallowRef<Map>()
  onMounted(() => {
    map.value = markRaw(new maplibregl.Map(options.map)) 
    options.scrollZoom ? '' : map.value.scrollZoom.disable()
    options.controls.position ?  map.value.addControl(new maplibregl.NavigationControl({}), options.controls.position) : ''
    options.controls.attribution ?  map.value.addControl(new maplibregl.AttributionControl(options.controls.attribution)) : ''
    options.deckOverlay ? map.value.addControl( options.deckOverlay as unknown as IControl) : ''
  })
  onUnmounted(() => {
    map.value?.remove()
  })
  return map
}
