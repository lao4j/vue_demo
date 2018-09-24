<template>
<div class="list-root">
  <div class="button-new" >
    <Button type="primary" @click="newContact">新增</Button>
  </div>
  <div>
    <Table :columns="columns" :data="gridData"></Table>
  </div>
  <detail-modal v-on:hide="hide" v-bind:showDetail='showDetail'
    v-bind:detailData='detailData'></detail-modal>
</div>
</template>

<style lang="css" scoped>
@import 'listPage.css';
</style>

<script>
import DetailModal from './detailModal'
import {getLevelStar, sexEn2Cn} from '@/utils/StringUtils.js'
import axios from '@/libs/api.request'
export default {
  components: {
    DetailModal
  },
  data () {
    return {
      showDetail: false,
      detailData: {},
      columns: [
        {
          title: '中文名',
          key: 'cname',
          render: (h, params) => {
            return h('a', {
              props: {
              },
              style: {
                cursor: 'pointer'
              },
              on: {
                click: () => {
                  this.show(params)
                }
              }
            }, params.row.cname)
          }
        },
        {
          title: '英文名',
          key: 'ename'
        },
        {
          title: '性别',
          key: 'sex',
          render: (h, params) => {
            var sex = params.row.sex
            return h('div', {}, sexEn2Cn(sex))
          }
        },
        {
          title: '出生日期',
          key: 'birthday'
        },
        {
          title: '所属公司',
          key: 'company'
        },
        {
          title: '客户等级',
          key: 'level',
          render: (h, params) => {
            var level = params.row.level
            return h('div', {}, getLevelStar(level))
          }
        },
        {
          title: '家庭住址',
          key: 'address'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('icon', {
                props: {
                  type: 'md-trash',
                  size: 20
                },
                style: {
                  marginRight: '10px',
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    this.deleteRecord(params)
                  }
                }
              }, 'View'),
              h('icon', {
                props: {
                  type: 'md-eye',
                  size: 20
                },
                style: {
                  marginRight: '10px',
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    this.show(params)
                  }
                }
              }, 'Delete'),
              h('icon', {
                props: {
                  type: 'ios-create',
                  size: 20
                },
                style: {
                  marginRight: '10px',
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    this.editor(params)
                  }
                }
              }, 'Edit')
            ])
          }
        }
      ],
      gridData: [
        {
          id: '0001',
          cname: '王思聪',
          ename: 'rich man',
          sex: 'male',
          company: '万达集团',
          level: '5',
          address: '这个我也不知道啊，可能四海为家吧。。',
          birthday: '2016-10-03',
          contact: [
            {
              type: 'qq',
              value: '234'
            }
          ]
        },
        {
          id: '0002',
          cname: '刘强东',
          ename: 'east man',
          sex: 'female',
          company: '京东集团',
          level: '4',
          address: '这个我也不知道啊，不知道回来了没',
          birthday: '1950-10-03'
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    submitAction: function (e) {
      console.log(e)
    },
    newContact: function () {
      this.$router.push({name: 'addPage'})
    },
    deleteRecord: function (params) {
      this.$Message.info('假装删除了id：' + params.row.id + '的记录')
    },
    show: function (params) {
      this.detailData = params.row
      this.showDetail = true
    },
    hide: function (showDetail) {
      this.showDetail = false
    },
    editor: function (params) {
      this.$router.push({name: 'addPage', params: {userData: params.row}})
    }
  },
  beforeCreate (e) {
    var me = this
    axios.request({
      url: 'api/queryClientList.action',
      params: {
        keyword: '1',
        start: 0,
        limit: 10
      },
      method: 'get'
    }).then(res => {
      me.gridData = res.data.data.rows
    }).catch(function (error) {
      me.$Message.error(error.message)
    })
  }
}
</script>
