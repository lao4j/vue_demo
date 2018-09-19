<template>
    <Layout>
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-nav">
                    <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>
                        用户管理
                    </MenuItem>
                </div>
            </Menu>
        </Header>
    </Layout>
</template>
<style>
@import 'header-bar.css';
</style>
<script>
export default {
  name: 'HeaderMenu'
}
</script>
