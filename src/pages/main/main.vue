<template>
<div class="layout">
    <Layout>
        <Header>
            <header-menu>
            </header-menu>
        </Header>
        <Layout>
            <Sider hide-trigger width="auto" class="left-sider" :style="{overflow: 'hidden'}">
                <side-menu @on-select="turnToPage">
                </side-menu>
            </Sider>
             <Content class="main-content-con">
                <Layout class="main-layout-con">
                    <Content class="content-wrapper">
                        <keep-alive>
                        <router-view/>
                        </keep-alive>
                    </Content>
                </Layout>
            </Content>
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
.main-content-con{
    height: "calc(100% - 60px)";
    overflow: hidden;
}
.tag-nav-wrapper{
    padding: 0;
    height: 40px;
    background:#F0F0F0;
}
.content-wrapper{
    padding: 18px;
    height: "calc(100% - 80px)";
    overflow: auto;
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
    turnToPage (pageName) {
      console.log('trunToPage')
      this.$router.push({name: pageName})
    }
  }
}
</script>
