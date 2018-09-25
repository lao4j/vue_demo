<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" label-position='right'>
      <Row>
        <Col span="11">
          <FormItem label="中文名称" prop="cname">
              <Input v-model="formValidate.cname"></Input>
          </FormItem>
          <FormItem label="英文名称" prop="ename">
              <Input v-model="formValidate.ename"></Input>
          </FormItem>
          <FormItem label="性别" prop="sex">
              <RadioGroup v-model="formValidate.sex">
                  <Radio label="male">男</Radio>
                  <Radio label="female">女</Radio>
              </RadioGroup>
          </FormItem>
          <FormItem label="出生日期">
            <DatePicker v-model="formValidate.birthday"></DatePicker>
          </FormItem>
          <FormItem label="所属公司" prop="company">
              <Input v-model="formValidate.company"></Input>
          </FormItem>
          <FormItem label="客户等级" prop="level">
              <Select v-model="formValidate.level" placeholder="选择一个等级">
                  <Option :value=5>⭐⭐⭐⭐⭐</Option>
                  <Option :value=4>⭐⭐⭐⭐</Option>
                  <Option :value=3>⭐⭐⭐</Option>
                  <Option :value=2>⭐⭐</Option>
                  <Option :value=1>⭐</Option>
              </Select>
          </FormItem>
          <FormItem label="家庭住址" prop="address">
              <Input v-model="formValidate.address"></Input>
          </FormItem>
          <div class="button-div">
            <FormItem>
              <Button type="primary" @click="handleSubmit('formValidate')">保存</Button>
              <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </FormItem>
          </div>
        </Col>
        <Col span="11">
          <FormItem>
            <dynamic-contact :contactList='contactList'></dynamic-contact>
          </FormItem>
        </Col>
      </Row>
    </Form>
</template>
<style scoped>
@import './addPage.css';
</style>

<script>
import DynamicContact from '@/components/common/dynamicInputText'
import axios from '@/libs/api.request'
export default {
  components: {
    DynamicContact
  },
  data () {
    return {
      contactList: this.getDefaultContactList(),
      formValidate: {
        cname: '',
        ename: '',
        company: '',
        sex: '',
        address: '',
        contact: '',
        level: '',
        birthday: ''
      },
      ruleValidate: {
        cname: [
          {
            required: true,
            message: '中文名称不能为空',
            trigger: 'blur'
          }
        ],
        ename: [
          {
            required: true,
            message: '英文名称不能为空',
            trigger: 'blur'
          }
        ],
        company: [
          {
            required: true,
            message: '所属公司不能为空',
            trigger: 'blur'
          }
        ],
        address: [
          {
            required: true,
            message: '家庭住址不能为空',
            trigger: 'blur'
          }
        ],
        sex: [
          {
            required: true,
            message: '请选择性别',
            trigger: 'change',
            width: 60
          }
        ],
        birthday: [
          {
            required: true,
            type: 'date',
            message: '请选择一个出生日期',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      axios.request({
        url: 'api/addClient.action',
        params: {
          cname: this.formValidate.cname,
          ename: this.formValidate.ename,
          company: this.formValidate.company,
          level: this.formValidate.level,
          sex: this.formValidate.sex,
          address: this.formValidate.address,
          contact: this.contactList,
          birthday: this.formValidate.birthday
        },
        method: 'post'
      }).then(res => {
        if (res.data.errcode) {
          this.$Message.error(res.data.errmsg)
        } else {
          this.$Message.info('保存成功')
          this.handleReset()
        }
      }).catch(function (error) {
        this.$Message.error(error)
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
      this.contactList = this.getDefaultContactList()
      this.formValidate.birthday = ''
    },
    setParams: function () {
      if (!this.$route.params.userData) {
        this.handleReset('formValidate')
      } else {
        this.formValidate.cname = this.$route.params.userData.cname
        this.formValidate.ename = this.$route.params.userData.ename
        this.formValidate.company = this.$route.params.userData.company
        this.formValidate.sex = this.$route.params.userData.sex
        this.formValidate.address = this.$route.params.userData.address
        this.formValidate.contact = this.$route.params.userData.contact
        this.formValidate.level = this.$route.params.userData.level
        this.formValidate.birthday = this.$route.params.userData.birthday
        if (!this.$route.params.userData.contact) {
          this.contactList = this.getDefaultContactList()
        } else {
          this.contactList = this.$route.params.userData.contact
        }
      }
    },
    getDefaultContactList: function () {
      return [{
        id: 'contact-item-' + new Date().getTime(),
        type: 'QQ',
        value: ''
      }]
    }
  },
  created () {
    this.setParams()
  },
  watch: {
  // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    '$route': 'setParams'
  }
}
</script>
