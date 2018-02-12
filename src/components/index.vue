<template>
  <div>
    <ul>
      <li>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    line: {
      type: Boolean,
      default: true
    },
    control: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      msg: 'abc'
    }
  }
}
</script>

<style scoped>

</style>
