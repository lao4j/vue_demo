<template>
    <div>
        this is a page
    </div>
</template>

<style lang="css" scoped>
@import 'userManager.css';
</style>

<script>
export default {
  data () {
    return {
      testData: 'this a test'
    }
  },
  computed: {

  },
  methods: {
    submitAction: function (e) {
      debugger
      console.log(e)
    }
  }
}
</script>
