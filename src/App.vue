<script setup lang="ts">
import { count } from 'vcir-package-a'
import { CounterComponent } from 'vcir-package-b'
count()
count()
</script>

<template>
  <CounterComponent />
  <CounterComponent />
  <CounterComponent />
</template>

<style>
</style>
