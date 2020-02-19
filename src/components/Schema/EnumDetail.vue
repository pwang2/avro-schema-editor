<template>
  <div>
    <div class="nested-type-selector">
      <span>name: </span>
      <el-input :value="data.name"></el-input>
    </div>
    <div class="nested-type-selector">
      <span>Enum Symbols: </span>
      <editable-tags :tags="data.symbols" />
    </div>
  </div>
</template>

<script>
import EditableTags from './EditableTags';

export default {
  props: ['data'],
  components: { EditableTags }
};
</script>

<style>
.nested-type-selector {
  padding: 10px;
  align-items: center;
  display: flex;
}
</style>
