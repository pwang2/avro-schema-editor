<template>
  <type-switcher label="Map values" :data="data" refkey="values"></type-switcher>
</template>

<script>
import TypeSwitcher from './TypeSwitcher';

export default {
  components: { TypeSwitcher },
  props: ['data']
};
</script>
