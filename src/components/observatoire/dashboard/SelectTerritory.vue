<template>
  <div class="fr-col fr-col-md-4">
    <label class="fr-label" for="text-input-text">Territoire</label>
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
      inputClass="fr-input"
    >
      <template #default="props">
        {{ props.option.l_territory }} - {{ props.option.territory }} ({{ props.option.type }})
      </template>
    </o-autocomplete>
  </div>
  
</template>

<script setup lang="ts">
  import { useStore, useVModel } from '@nanostores/vue'
  import { territory, filteredTerritories, territorySearch } from '@/stores/dashboard'

  const territories = useStore(filteredTerritories)
  const selected = useVModel(territory)
  const search = useVModel(territorySearch)
</script>
<style lang="scss">
  .fr-input{
    margin-top: .5rem;
  }
  .results {
    width:100% !important;
    overflow-y: auto;
    background-color: #FFFFFF;
    div {
      font-size: 0.8rem;
      padding: 0 5px;
    }
    div:hover{
      background-color: #E7E7E7;
    }
  }
</style>