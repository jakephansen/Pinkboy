<template>
  <div>
    <header-component></header-component>
  </div>
</template>

<script>
import Header from './components/header/Header';


export default {
  name: 'app',
  components: {
    'header-component': Header
  }
};
</script>
