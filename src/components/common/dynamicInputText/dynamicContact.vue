<template>
<div>
  <FormItem>
    <div class="contact-item" v-for="(item,index) in contactList" :key="item.id" v-bind:index="index">
      <Input :id="item.id+index" :name="item.name+index" >
        <Select slot="prepend" style="width: 80px" value='QQ'>
          <Option value="QQ">QQ</Option>
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
  data () {
    return {
      contactList: [
        {
          id: 'contact',
          name: 'contact'
        }
      ]
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
        id: 'contact',
        name: 'contact'
      })
      return 'null'
    }
  },
  computed: {

  }
}
</script>
