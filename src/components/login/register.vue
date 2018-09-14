<template>
	<div>
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
					<el-col :span="12">
						<mt-field placeholder="验证码"></mt-field>	
					</el-col>
					<el-col :span="8">
						<mt-button class="btn">获取验证码</mt-button>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4">
						<img class="licon" src="../../../static/img/suo.png" />
					</el-col>
					<el-col :span="16">
						<mt-field placeholder="请输入密码"></mt-field>
					</el-col>
					<el-col :span="4">
							<img class="closeIcon" src="../../../static/img/biyan.png" />
					</el-col>
				</el-row>
				<div class="register-button">
					<mt-button  @click="login">注  册</mt-button>
				</div>
				<div class="text-left">
					<p>已有账号，<router-link to="/login">立即登录</router-link></p>
				</div>
			</div>
			<div class="footer">
				<p>注册即视为同意<router-link to="">用户产权协议</router-link></p>
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
				this.$router.push({ path: "/" });
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
	.text-left{
		width:100%;
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
		height: 80px;
		color:#8f8f8f;
	}
	.footer p{
		font-size:12px;
	}
	.footer p a{
		color:#57bc59;
		text-decoration:none;
	}
	
</style>