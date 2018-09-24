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
                  <Option value="5">⭐⭐⭐⭐⭐</Option>
                  <Option value="4">⭐⭐⭐⭐</Option>
                  <Option value="3">⭐⭐⭐</Option>
                  <Option value="2">⭐⭐</Option>
                  <Option value="1">⭐</Option>
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
.button-div {
  text-align: left;
  margin-top: 10px;
  margin-left: 10px;
}
</style>

<script>
import DynamicContact from '@/components/common/dynamicInputText'
export default {
  components: {
    DynamicContact
  },
  data () {
    return {
      contactList: [
        {
          id: 'contact-item-' + new Date().getTime(),
          contactType: 'QQ',
          contact: ''
        }
      ],
      formValidate: {
        cname: '',
        ename: '',
        company: '',
        city: '',
        sex: '',
        address: '',
        contact: '',
        contactSelect: 'QQ',
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
        city: [
          {
            required: true,
            message: 'Please select the city',
            trigger: 'change'
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
        ],
        time: [
          {
            required: true,
            type: 'string',
            message: 'Please select time',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      let contacts = this.$refs.DynamicContact.getSubmitValues()
      console.log(contacts)
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
