<template>
  <div>
    <type-choose :data="data"
                 :isNullable="isNullable(data[refkey])"
                 :selectedValue="selectedType"
                 @changeType="changeMapValueType(data,$event)"
                 @toggleNullable="toggleMapValueNullable(data,$event)"></type-choose>
    <complex-detail :data="getComplexData(data[refkey])"
                    :type="selectedType"
                    v-if="!isPrimitive(selectedType)"></complex-detail>
  </div>
</template>

<script>
import ComplexDetail from './ComplexDetail';
import { isPrimitive, isNullable, getDisplayType } from '../../services/types';
import TypeChoose from './TypeChoose';

export default {
  components: { TypeChoose, ComplexDetail },
  props: ['data', 'label', 'refkey'],
  data() {
    return {
      selectedType: ''
    };
  },
  beforeCreate() {
    this.$options.components.ComplexDetail = ComplexDetail;
  },
  created() {
    this.selectedType = this.getDisplayType(this.data[this.refkey]);
  },
  methods: {
    isPrimitive,
    isNullable,
    getDisplayType,
    changeMapValueType(data, type) {
      this.selectedType = type;
      if (isPrimitive(type)) {
        data[this.refkey] = type;
      } else if (type === 'enum') {
        data[this.refkey] = { type, symbols: [] };
      } else if (type === 'array') {
        data[this.refkey] = { type, items: 'string' };
      } else if (type === 'map') {
        data[this.refkey] = { type, values: 'string' };
      } else if (type === 'record') {
        data[this.refkey] = { type, fields: [] };
      } else {
        throw new Error('unknow type');
      }
    },
    toggleMapValueNullable(data, val) {
      if (val) {
        this.$set(data, this.refkey, ['null', data[this.refkey]]);
      } else {
        this.$set(data, this.refkey, data[this.refkey][1]);
      }
    },
    getComplexData(type) {
      if (Array.isArray(type)) {
        return type[1];
      }
      return type;
    }
  }
};
</script>
