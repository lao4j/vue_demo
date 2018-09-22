<template>
<div>
  <div class="line" v-for="(item,index) in dataModel" :key="item">
    <input type="text" v-model="dataModel[index].value1" />
    <span>{{dataModel[index].value1}}</span>
    <button v-bind:data-index="index" v-on:click="submitClick">提交</button>

    <input type="text" v-model="dataModel[index].value2" />
    <span>{{dataModel[index].value2}}</span>
  </div>
</div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      dataModel: []
    }
  },
  created: function () {
    // 这里是动态生成v-model,这个可以放在网络请求成功里面;
    var len = 4
    for (var i = 0; i < len; i++) {
      var item = {value1: '', value2: ''}
      this.dataModel.push(item)
    }
  },
  methods: {
    // 显示v-model里面的数据
    submitClick: function (event) {
      var tag = event.target
      var index = tag.getAttribute('data-index')
      alert(this.dataModel[index].value1)
    }
  }
}
</script>
