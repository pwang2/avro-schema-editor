<template>
  <div class="editable-input-wrap">
    <el-input class="edit-input"
              v-if="isEditing"
              ref="editInput"
              size="mini"
              :value="value"
              @keyup.enter.native="update"
              @blur="update"></el-input>
    <span class="static-label" v-else @click.prevent.stop="switchToEdit">{{value}}</span>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return { isEditing: false };
  },
  props: ['value'],
  methods: {
    switchToEdit() {
      this.isEditing = true;
      Vue.nextTick(() => {
        this.$refs.editInput.focus();
      });
    },
    update(e) {
      if (e.target.value.trim() === '') {
        this.isEditing = true;
      } else {
        this.isEditing = false;
        this.$emit('change', e.target.value);
      }
    }
  }
};
</script>

<style>
.editable-input-wrap {
  display: inline;
  font-size: 13px;
}
.edit-input {
  font-weight: 500;
}
.static-label {
  margin-left: 14px;
}
</style>
