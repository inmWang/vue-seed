<template lang='pug'>
  div
    GlobalComponent
    PageComponent
</template>

<script>
import PageComponent from './components/PageComponent';
export default {
  name: 'Index',
  components: {
    PageComponent
  }
}
</script>

<style lang='scss' scoped>

</style>
