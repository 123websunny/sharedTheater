<template>
  <div class="hello">
        <div class="table">
  		    <img src="../../assets/logo.png">
		</div>
		<div class="finish">密码修改完成</div>
		<div class="return">5s后自动返回登录页</div>
		<div class="register-button">
			<mt-button  @click="login">立即返回登录</mt-button>
		</div>  

  	
  </div>
</template>

<script>
export default {
		data() {
			return {
				username: '',
				password: '',
				
			}
		},
		mounted() {
			
		},
		methods: {
			//登录验证
			login() {
				this.$router.push({ path: "/login" });
			},
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		 .hello{
		 	width:100%;
		 	height:100%;
		 	margin:0;
		 	padding:0;
		 	background-color: #fff;
		 	text-align: center;
		 }
		 .table{
		    display: table;
		    width: 100%;
		    height: 100%;
		    margin-top:150px;
		}
		.finish{
			margin-top:20px;
			font-size:20px;
			font-weight:600;
		}
		.return{
			margin-top:5px;
			font-size:16px;
			color:#8F8F8F;
		}
		
		.register-button .mint-button{
		width:80%;
		color:#fff;
		margin-top:30px;
		border-radius:5px;
		background-color:#ff931f; 
        }
		 
 
</style>
    