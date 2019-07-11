<template>
<div>
    <MyHeader/>
    <div class="main">
		<div class="school_massage">
			<table border="1">
				<tr>
					<th class="school_massage_name">学院名称</th>
					<th class="school_massage_m">{{nickname}}</th>
				</tr>
				<tr>
					<th class="school_massage_name">用户名</th>
					<th class="school_massage_m">{{name}}</th>
				</tr>
				<tr>
					<td class="school_massage_name">密码</td>
					<td class="school_massage_m">{{password}}</td>
				</tr>
			</table>
				
			<div class="do_school">
				<button @click="freeze">冻结账户</button>
				<button>删除账户</button>
			</div>
		</div>
	</div>
    <MyFooter/>
</div>
</template>

<script>
import MyFooter from './Footer.vue'
import MyHeader from './Header.vue'
import school_single from './School_Single'

export default {
  name: 'school_single',
  components: {
    MyHeader,
    MyFooter
  },
  data(){
	  return{
		 name:'',
		 nickname:'',
		 password:'', 
	  }
  },
  methods:{
	  getData(){
		 var _this = this;
		 let param = new URLSearchParams();
		 param.append('id',this.$route.params.id)
         this.axios.post('/api/TeachSystem/TeachSystem/GetAcademicUser',param)
        .then(function (response) {

		  _this.name = response.data.AcademicUser.name;
		  _this.nickname = response.data.AcademicUser.nickname;
		  _this.password = response.data.AcademicUser.password;
        })
        .catch(function (error) {
          alert(error)
	    }) 
	  },
	  freeze(){
		 var _this = this;
		 let param = new URLSearchParams();
		 param.append('id',this.$route.params.id)
		 param.append('freeze','true')
         this.axios.post('/api/TeachSystem/TeachSystem/GetAcademicUser',param)
        .then(function (response) {

		  
        })
        .catch(function (error) {
          alert(error)
	    }) 
	  }
  },
  created(){
	this.getData();
	this.go();
      
   },
}
</script>