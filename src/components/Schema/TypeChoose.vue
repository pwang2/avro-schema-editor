<template>
  <div class="type-choose-wrap">
      <el-select class="type-select"
                 size="mini"
                 slot="reference"
                 :value="selectedValue"
                 @change="$emit('changeType', $event)">
        <el-option :key="item"
                   :label="item"
                   :value="item"
                   v-for="item in types"></el-option>
      </el-select>
      <el-checkbox :value="isNullable"
                   @input="$emit('toggleNullable', $event)"></el-checkbox>
  </div>
</template>

<script>
import { types } from '../../services/types';

export default {
  props: ['data', 'selectedValue', 'isNullable'],
  beforeCreate() {
    this.types = types;
  }
};
</script>

<style>
.type-choose-wrap {
  display: flex;
  width: 120px;
  align-items: center;
  padding-right: 10px;
  justify-content: space-between;
}
.type-select {
  width: 86px;
}
</style>
