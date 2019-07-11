<template>
    <div class="head">
			<div class="head_in">
				<img src="http://localhost:8080/static/img/logo.png" />
				<span>办公系统-教务端</span>
			</div>

			<ul>
				<li><router-link to="education" class="head_a">首页</router-link></li>
				<li><router-link to="education_manage" class="head_a">用户管理</router-link></li>
				<li><router-link to="education_material" class="head_a">材料列表</router-link></li>
				<!-- <li><a href="#" class="head_a">提交材料</a></li> -->
				<li><router-link to="education_manage" class="head_a">招生信息</router-link></li>
				<li><router-link to="login" class="head_a">退出登录</router-link></li>
			</ul>
		</div>
</template>
<style lang="scss" src="../../static/css/education.css">
</style>
<script>

export default {
  name: 'MyHeader'
}
</script>
