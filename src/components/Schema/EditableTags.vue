<template>
  <div class="tag-wrapper">
     <el-tag :key="tag"
             size="small"
             v-for="tag in tags"
             closable
             @close="handleClose(tag)">{{tag}}</el-tag>
     <el-input class="input-new-tag"
               v-if="inputVisible"
               size="mini"
               v-model="inputValue"
               ref="saveTagInput"
               @click.prevent.stop
               @keyup.enter.native.prevent="handleInputConfirm"
               @blur.native.prevent="handleInputConfirm"></el-input>
     <el-button class="button-new-tag"
                v-else
                type="text"
                size="mini"
                @click="showInput">Add</el-button>
  </div>
</template>

<script>
export default {
  props: ['tags'],
  data() {
    return {
      inputVisible: false,
      inputValue: ''
    };
  },
  methods: {
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm(e) {
      e.preventDefault();
      const inputValue = this.inputValue;
      if (inputValue) {
        this.tags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
};
</script>

<style>
.tag-wrapper {
  padding-left: 4px;
}
.el-tag + .el-tag {
  margin-left: 4px;
}
.button-new-tag {
  margin-left: 4px;
}
.input-new-tag {
  width: 60px;
  vertical-align: bottom;
}
.button-close {
  float: right;
}
</style>
