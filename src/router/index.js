import Vue from 'vue';
import Router from 'vue-router';
import SchemaEditor from '@/components/Schema/Editor';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SchemaEditor',
      component: SchemaEditor
    }
  ]
});
