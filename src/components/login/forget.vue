<template>
	<div  style="width: 100%;height: 100%;margin: 0;padding: 0;background-color: #fff; overflow: hidden;">
		<mt-header  class="header">
		  <router-link to="/" slot="left">
		    <mt-button  icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div class="content">
			<div class="top">注册</div>
			<div>
				<img src="../../../static/img/logo.png" class="logo" />
			</div>
			<div class="register-panel">
			     <el-row>
					<el-col :span="4">
						<img class="licon" src="../../../static/img/phone.png" />
					</el-col>
					<el-col :span="20">
						<mt-field placeholder="手机号"></mt-field>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<img class="licon" src="../../../static/img/yanzheng.png" />
					</el-col>
					<el-col :span="20">
						<mt-field placeholder="验证码">
							<mt-button class="btn">重新获取</mt-button>
						</mt-field>	
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<img class="licon" src="../../../static/img/suo.png" />
					</el-col>
					<el-col :span="16">
						<mt-field type="password" placeholder="设置登录密码"></mt-field>
					</el-col>
					<el-col :span="4">
							<img class="closeIcon" src="../../../static/img/biyan.png" />
					</el-col>
				</el-row>
				<div class="register-button">
					<mt-button  @click="login">确  认</mt-button>
				</div>
			</div>
			<div class="footer">
				<div>客服电话：400-72102344</div>
			</div>
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
				this.$router.push({ path: "/done" });
			},
			
		}
	}
</script>

<style>
	.mint-header{
		margin:0;
		background-color:#fff !important;
	}
	.mint-header-button>a{
		color:#8f8f8f;
	}
	.top{
		width:100%;
		height:40px;
		padding:0 10px;
		text-align:left;
		font-size:24px;
		font-weight:600;
	}
	.logo{
		width:30%;
		margin-top: 20px;
	}
	.register-panel {
		width: 78%;
		height: 17.5rem;
		margin: auto;
		background-color: #fff;
		border-radius: .5rem;
		margin-top: 1.875rem;
		overflow: hidden;
		padding-top:12px ;
		padding-right: 15px;
		padding-left: 15px;
	}
	.el-row{
		border-bottom: 1px solid #dedede;
	}
	.el-row .mint-cell{
		background-position:center;
	} 
	.mint-cell-wrapper{
		padding:0;
	}
	.mint-field-core{
		font-size:14px;
	}
	.licon{
		margin-top:12px;
	}
	.closeIcon{
		margin-top:20px;
	}
	.btn{
		border:0;
		padding:0;
		margin-top:4px;
		color:#FF931F;
		font-size:16px;
		background-color:#fff;;
		
	}
	.register-button .mint-button{
		width:100%;
		color:#fff;
		margin-top:30px;
		border-radius:5px;
		background-color:#ff931f; 
		
	}
	.mint-button--default{
		box-shadow:none;
	}
	.text-left{
		width:100%;
		font-size:14px;
		margin-top:10px;
		text-align:right;
	}
	.text-left a{
		color:#FF931F;
		text-decoration:none;
	}
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 35px;
		color:#8f8f8f;
		font-size:14px;
	}
	
</style>