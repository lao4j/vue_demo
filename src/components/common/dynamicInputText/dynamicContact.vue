<template>
<div>
  <FormItem>
    <div class="contact-item" v-for="(item,index) in contactList" :key="item.id" v-bind:index="index">
      <Input v-model="contactList[index].value" icon='md-trash' @on-click='delContact(contactList[index].id)' id="contactList[index].id">
        <Select v-model="contactList[index].type" slot="prepend" style="width: 80px">
          <Option value="qq">QQ</Option>
          <Option value="mobile">手机</Option>
          <Option value="mail">邮箱</Option>
          <Option value="tel">固定电话</Option>
          <Option value="wechat">微信</Option>
        </Select>
      </Input>
    </div>
  </FormItem>
  <div class="button-add" >
    <FormItem>
      <Button type="primary" @click="addContact">添加</Button>
    </FormItem>
  </div>
</div>
</template>

<style scoped>
.contact-item {
  margin-bottom: 25px;
}
.button-add {
  text-align: left;
  margin-top: 10px;
  margin-left: 10px;
}
</style>

<script>
var maxContact = 5
var currentNum = 1
export default {
  name: 'DynamicContact',
  props: ['contactList'],
  data () {
    return {
      test: ''
    }
  },
  methods: {
    addContact: function () {
      console.log('addContact')
      if (currentNum >= maxContact) {
        this.$Message.error('最多添加' + maxContact + '个')
        return
      }
      currentNum++
      this.contactList.push({
        id: 'contact-item-' + new Date().getTime(),
        type: 'QQ',
        value: ''
      })
    },
    delContact: function (id) {
      if (currentNum <= 1) {
        this.$Message.error('最少保留' + currentNum + '个')
        return
      }
      for (var i = 0; i < this.contactList.length; i++) {
        if (this.contactList[i].id === id) {
          this.contactList.splice(i, 1)
          currentNum--
          break
        }
      }
      console.log('delContact')
    }
  },
  computed: {

  }
}
</script>
