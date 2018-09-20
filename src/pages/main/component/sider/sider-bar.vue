<template>
    <Layout class="left-layout">
        <Sider hide-trigger :style="{background: '#fff'}">
            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" @on-select="onSelect">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        用户管理
                    </template>
                    <MenuItem name="listPage" >列表页面</MenuItem>
                    <MenuItem name="addPage">新增页面</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
    </Layout>
</template>

<style>
@import 'sider-bar.css';
</style>

<script>
export default {
  name: 'SideMenu',
  methods: {
    onSelect (item) {
      this.$emit('on-select', item)
    }
  }
}
</script>
