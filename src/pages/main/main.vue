<template>
    <Layout style="height: 100%">
        <Sider hide-trigger collapsible :width="256" :collapsed-width="64" v-model="collapsed" class="left-sider" :style="{overflow: 'hidden'}">
            <side-menu accordion ref="sideMenu" :collapsed="collapsed">
            </side-menu>
        </Sider>
    </Layout>
    <Layout>
        <Header class="header-con">
            <header-bar :collapsed="collapsed" >
            </header-bar>
      </Header>
    </Layout>
</template>
<style scoped>

</style>
<script>
import Header from './component/header'
import Sider from './component/sider'
export default {
    components: {
        SideMenu,
        HeaderMenu
    }
}
</script>
