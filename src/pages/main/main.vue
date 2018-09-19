<template>
<div class="layout">
    <Layout>
        <Sider hide-trigger width="auto" class="left-sider" :style="{overflow: 'hidden'}">
            <side-menu @on-select="turnToPage">
            </side-menu>
        </Sider>
        <Layout>
            <Header>
                <header-menu>
                </header-menu>
            </Header>
        </Layout>
    </Layout>
    </div>
</template>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 800px;
}
.left-sider {
    height: 100%;
}
</style>
<script>
import HeaderMenu from './component/header'
import SideMenu from './component/sider'
export default {
  components: {
    SideMenu,
    HeaderMenu
  },
  methods: {
    turnToPage (route) {
      debugger
      this.$router.push({name: 'userManager', params: {}})
    }
  }
}
</script>
