<template>
  <div ref="wrapper" style="position:relative">
    <span style="position:absolute; right:0; top :0;z-index:100; font-size:20px; padding: 0 10px">
      <el-button type="text" icon="el-icon-rank" @click="toggleFullscreen"></el-button>
    </span>
  </div>
</template>

<script>
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/display/fullscreen.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/addon/display/fullscreen';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';

export default {
  props: {
    value: [Object, Array, String],
    options: {
      type: Object,
      default() {
        return {
          mode: 'application/javascript',
          json: true,
          theme: 'mdn-like',
          foldGutter: true,
          lineNumbers: true,
          lineWrapping: false,
          gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
        };
      }
    }
  },
  data() {
    return {
      editor: null
    };
  },
  computed: {
    normalized() {
      return typeof this.value === 'string'
        ? this.value
        : JSON.stringify(this.value, null, 2);
    }
  },
  mounted() {
    this.editor = CodeMirror(this.$el, this.options);
    this.editor.getDoc().setValue(this.normalized);
    this.$watch('normalized', val => this.editor.getDoc().setValue(val), {
      deep: true
    });
    this.editor.on('change', cm => {
      this.$emit('change', cm.getValue());
      this.$emit('input', cm.getValue());
    });
  },
  beforeDestroy() {
    this.editor.doc.cm.getWrapperElement().remove();
  },
  methods: {
    toggleFullscreen() {
      const cm = this.editor.doc.cm;
      cm.setOption('fullScreen', !cm.getOption('fullScreen'));
    }
  }
};
</script>

<style>
.CodeMirror {
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 11px;
  height: auto;
}
</style>
