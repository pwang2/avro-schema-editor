<template>
  <component :is="`${type}Detail`" :data="data" class="nested-component"/>
</template>

<script>
import RecordDetail from './RecordDetail';
import MapDetail from './MapDetail';
import EnumDetail from './EnumDetail';
import ArrayDetail from './ArrayDetail';

export default {
  components: {
    RecordDetail,
    MapDetail,
    ArrayDetail,
    EnumDetail
  },
  props: ['type', 'data'],
  beforeCreate() {
    this.$options.components.RecordDetail = RecordDetail;
  }
};
</script>

<style>
.nested-component {
  position: relative;
  left: 40px;
  width: calc(100% - 40px);
}
</style>
