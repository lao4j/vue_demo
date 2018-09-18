<template>
<div class="layout">
    <Layout style="height: 100%">
        <Sider hide-trigger :width="256" v-model="collapsed" class="left-sider" :style="{overflow: 'hidden'}">
            <side-menu accordion ref="sideMenu">
            </side-menu>
        </Sider>
        <Layout>
            <Header>
                <header-menu  >
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
}
</style>
<script>
import HeaderMenu from './component/header'
import SideMenu from './component/sider'
export default {
  components: {
    SideMenu,
    HeaderMenu
  }
}
</script>
