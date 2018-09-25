<template>
<div class="modal-root">
  <Modal title="客户详情" :value="showDetail" :footer-hide=true @on-visible-change='statusChange'>
    <table>
      <tr>
        <td>中文名：</td>
        <td class="display-value">{{detailData.cname}}</td>
      </tr>
      <tr>
        <td>英文名：</td>
        <td class="display-value">{{detailData.ename}}</td>
      </tr>
      <tr>
        <td>性别：</td>
        <td class="display-value">{{sex}}</td>
      </tr>
      <tr>
        <td>出生日期：</td>
        <td class="display-value">{{detailData.birthday}}</td>
      </tr>
      <tr>
        <td>所属公司：</td>
        <td class="display-value">{{detailData.company}}</td>
      </tr>
      <tr>
        <td>客户等级：</td>
        <td class="display-value">{{level}}</td>
      </tr>
      <tr>
        <td>家庭住址：</td>
        <td class="display-value">{{detailData.address}}</td>
      </tr>
      <tr>
        <td>联系方式：</td>
        <td class="display-value">
          <div v-for="contact in detailData.contact" :key="contact.type">
            <span>{{typeConverter(contact.type)}}：{{contact.value}}</span>
          </div>
        </td>
      </tr>
    </table>
    <div class="bottom-btn">
      <Button @click="hide">关闭</Button>
    </div>
  </Modal>
</div>
</template>
<style scoped>
@import './detailModal.css';
</style>
<script>
import {getLevelStar, sexEn2Cn, contactTypeEn2Cn} from '@/utils/StringUtils.js'
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
    },
    typeConverter: function (type) {
      return contactTypeEn2Cn(type)
    }
  },
  computed: {
    level: function () {
      return getLevelStar(this.detailData.level)
    },
    sex: function () {
      return sexEn2Cn(this.detailData.sex)
    }
  }
}
</script>
