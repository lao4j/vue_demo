<template>
  <Modal title="客户详情" :value="showDetail" :footer-hide=true @on-visible-change='statusChange'>
    <table>
      <tr>
        <td>中文名：</td>
        <td>{{detailData.cname}}</td>
      </tr>
      <tr>
        <td>英文名：</td>
        <td>{{detailData.ename}}</td>
      </tr>
      <tr>
        <td>性别：</td>
        <td>{{detailData.sex}}</td>
      </tr>
      <tr>
        <td>出生日期：</td>
        <td>{{detailData.birthday}}</td>
      </tr>
      <tr>
        <td>所属公司：</td>
        <td>{{detailData.company}}</td>
      </tr>
      <tr>
        <td>客户等级：</td>
        <td>{{level}}</td>
      </tr>
      <tr>
        <td>家庭住址：</td>
        <td>{{detailData.address}}</td>
      </tr>
      <tr>
        <td>联系方式：</td>
        <td>{{detailData.cncontact}}</td>
      </tr>
    </table>
    <div>
      <Button @click="hide">关闭</Button>
    </div>
  </Modal>
</template>
<style>

</style>
<script>
import {getLevelStar} from '@/utils/StringUtils.js'
export default {
  name: 'DetailModal',
  props: ['showDetail', 'detailData'],
  data () {
    return {
    }
  },
  methods: {
    hide: function () {
      this.$emit('hide', false)
    },
    statusChange: function (e) {
      if (!e) {
        // 点击空白或者按键关闭modal
        this.hide()
      }
    }
  },
  computed: {
    level: function () {
      return getLevelStar(this.detailData.level)
    }
  }
}
</script>
