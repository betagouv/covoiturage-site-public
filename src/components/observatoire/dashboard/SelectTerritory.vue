<template>
  <o-autocomplete
    v-model="search"
    placeholder="Saisir un code INSEE ou nom du territoire"
    :data="territories"
    field="l_territory"
    @select="(option:any) => (selected = option)"
    expanded
    open-on-focus
    maxHeight="250"
    menuClass="results"
  >
    <template #default="props">
      {{ props.option.l_territory }} - {{ props.option.territory }} ({{ props.option.type }})
    </template>
  </o-autocomplete>
</template>

<script setup lang="ts">
  import { useStore, useVModel } from '@nanostores/vue'
  import { territory, filteredTerritories, territorySearch } from '@/stores/dashboard'

  const territories = useStore(filteredTerritories)
  const selected = useVModel(territory)
  const search = useVModel(territorySearch)
</script>