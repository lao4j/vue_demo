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
          <FormItem label="Hobby" prop="interest">
              <CheckboxGroup v-model="formValidate.interest">
                  <Checkbox label="Eat"></Checkbox>
                  <Checkbox label="Sleep"></Checkbox>
                  <Checkbox label="Run"></Checkbox>
                  <Checkbox label="Movie"></Checkbox>
              </CheckboxGroup>
          </FormItem>
          <FormItem label="Desc" prop="desc">
              <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
          </FormItem>
          <FormItem>
              <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
              <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
          </FormItem>
        </Col>
        <Col span="11">
          <FormItem>
            <Input v-model="contact">
              <span slot="prepend">QQ</span>
              <span slot="append">手机</span>
              <span slot="append">邮箱</span>
              <span slot="append">固定电话</span>
              <span slot="append">微信</span>
            </Input>
          </FormItem>
        </Col>
      </Row>
    </Form>
</template>
<script>
export default {
  data () {
    return {
      formValidate: {
        cname: '',
        ename: '',
        company: '',
        city: '',
        sex: '',
        address: '',
        interest: [],
        birthday: '',
        time: '',
        desc: ''
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
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        interest: [
          {
            required: true,
            type: 'array',
            min: 1,
            message: 'Choose at least one hobby',
            trigger: 'change'
          },
          {
            type: 'array',
            max: 2,
            message: 'Choose two hobbies at best',
            trigger: 'change'
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
        ],
        desc: [
          {
            required: true,
            message: 'Please enter a personal introduction',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 20,
            message: 'Introduce no less than 20 words',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
