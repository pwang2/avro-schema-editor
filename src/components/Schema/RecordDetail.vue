<template>
  <div class="record-wrap">
    <div style="padding: 10px; background:#fff">
      <el-button
        plain
        type="primary"
        size="mini"
        @click="append">Add Field</el-button>
    </div>
    <el-collapse
      accordion
      v-model="activeField">
      <el-collapse-item
        v-for="(data, index) in data.fields"
        :key="index"
        :name="index">
        <template slot="title">
          <div class="record-field-summary">
            <type-choose
              :data="data"
              :is-nullable="isNullable(data.type)"
              :selected-value="getDisplayType(data.type)"
              @changeType="changeType(data, index, $event)"
              @toggleNullable="toggleNullable(data,$event)"/>
            <editable-input
              v-if="data.name"
              :value="data.name"
              @change="changeName(data, $event)"/>
            <span class="field-action-wrap">
              <el-button
                class="action-button adjust-margin"
                icon="el-icon-remove"
                type="text"
                @click="remove(index)"/>
            </span>
          </div>
        </template>
        <el-form
          class="record-field-detail"
          label-width="100px"
          label-position="right"
          size="mini">
          <el-form-item label="Aliases">
            <editable-tags :tags="data.aliases" />
          </el-form-item>
          <el-form-item label="Doc">
            <el-input
              type="textarea"
              autosize
              :value="data.doc"
              @change="data.doc=$event" />
          </el-form-item>
          <complex-detail
            v-if="!isPrimitive(getDisplayType(data.type))"
            :type="getDisplayType(data.type)"
            :data="getComplexData(data.type)"/>
        </el-form>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import ComplexDetail from './ComplexDetail';
import {
  isPrimitive,
  getDisplayType,
  isNullable,
  isObject
} from '../../services/types';
import TypeChoose from './TypeChoose';
import EditableInput from './EditableInput';
import EditableTags from './EditableTags';

export default {
  components: {
    ComplexDetail,
    TypeChoose,
    EditableInput,
    EditableTags
  },
  props: ['data'],
  data() {
    return { activeField: '' };
  },
  methods: {
    getDisplayType,
    isObject,
    isNullable,
    isPrimitive,
    changeName(data, newName) {
      data.name = newName;
    },
    append() {
      const newChild = { name: 'testtest', type: 'string' };
      this.data.fields.unshift(newChild);
      this.activeField = 0;
    },
    remove(index) {
      const children = this.data.fields;
      children.splice(index, 1);
    },
    changeType(data, index, type) {
      if (isPrimitive(type)) {
        data.type = type;
      } else if (type === 'enum') {
        data.type = { type, symbols: [] };
      } else if (type === 'array') {
        data.type = { type, items: 'string' };
      } else if (type === 'map') {
        data.type = { type, values: 'string' };
      } else if (type === 'record') {
        data.type = { type, fields: [] };
      } else {
        throw new Error('unknow type');
      }
      this.activeField = index;
    },
    toggleNullable(data, val) {
      if (val) {
        this.$set(data, 'type', ['null', data.type]);
      } else {
        this.$set(data, 'type', data.type[1]);
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

<style>
.record-wrap {
  left: 0;
}
.record-field-summary {
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
}
.record-field-detail {
  padding: 0 10px;
}
.field-action-wrap {
  margin-left: auto;
  width: 120px;
  display: flex;
  justify-content: flex-end;
}
.action-button {
  font-weight: 500;
  padding: 0;
}
.action-button .adjust-margin {
  margin-left: 0;
  margin-right: 5px;
}
</style>
