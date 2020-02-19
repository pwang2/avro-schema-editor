<template>
  <div>
    <h3 class="page-title">Schema Registry</h3>
    <div class="main-wrap">
      <div class="root-record">
        <record-detail :data="schema" :level="1"></record-detail>
      </div>
      <div class="json-view">
        <codemirror :value="schema"></codemirror>
      </div>
    </div>
  </div>
</template>

<script>
import Codemirror from './Codemirror';
import RecordDetail from './RecordDetail';
import schema from '../../data/schema';

export default {
  components: { Codemirror, RecordDetail },
  data() {
    return { schema };
  }
};
</script>

<style>
.main-wrap {
  display: flex;
  align-items: flex-start;
  padding-top: 20px;
}
.root-record {
  flex: 1 1 300px;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
  margin-right: 20px;
}
.json-view {
  flex: 1 1 500px;
  height: calc(100vh - 64px);
  overflow: auto;
}
.json-view .CodeMirror {
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 11px;
  height: auto;
}
</style>
