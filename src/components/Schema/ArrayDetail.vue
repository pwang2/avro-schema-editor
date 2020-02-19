<template>
  <type-switcher label="Array items" :data="data" refkey="items"></type-switcher>
</template>

<script>
import TypeSwitcher from './TypeSwitcher';

export default {
  components: { TypeSwitcher },
  props: ['data']
};
</script>
