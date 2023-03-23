<template>
  <div class="fr-col fr-col-offset-md-1 fr-col-md-2">
  <div class="fr-select-group">
    <label class="fr-label" for="select">
      Mois
    </label>
    <select v-model="month" class="fr-select" id="select" name="select">
      <option value="" selected disabled hidden>Sélectionnez un mois</option>
      <option v-for="option in lists.month" :value="option.id" :key="option.id">{{option.name}}</option>
    </select>
  </div>
</div>
<div class="fr-col fr-col-offset-md-1 fr-col-md-2">
  <div class="fr-select-group">
    <label class="fr-label" for="select">
      Année
    </label>
    <select v-model="year" class="fr-select" id="select" name="select">
      <option value="" selected disabled hidden>Sélectionnez une année</option>
      <option v-for="option in lists.year" :value="option" :key="option">{{option}}</option>
    </select>
  </div>
</div>
</template>

<script setup lang="ts">
  import { useStore, useVModel } from '@nanostores/vue'
  import { period, periodList } from '@/stores/dashboard'
  const lists = useStore(periodList)
  const month = useVModel(period,'month')
  const year = useVModel(period,'year')
</script>


