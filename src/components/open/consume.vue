<template>
	<div style="width: 100%;height: 100%;margin: 0;padding: 0;background-color: #fff; overflow: hidden;">
		<div class="back">
			<mt-header  class="header">
			  <router-link to="/nearby" slot="left">
			    <mt-button  icon="back">附近</mt-button>
			  </router-link>
			</mt-header>
			<div class="content">
				<div class="top">正在消费中</div>
				<div class="time">
					<el-row>
						<el-col :span="12" >
							<p class="money">24.59</p>
							<p class="text">观影费用（元）</p>
						</el-col>
						<el-col :span="12" class="right">
							<p class="countdown">01:30:15</p>
							<p class="text">观影时长</p>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
		<div class="over">
			<div class="register-button">
				<mt-button  @click="login">结束消费</mt-button>
			</div>
			<p>请带齐个人物品，关好门后，点击结束消费。</p>
			<p>请勿在房间内滞留，可能对你造成生命危险！</p>
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
				this.$router.push({ path: "/nearby" });
			},
			
		}
	}
</script>

<style>
	body{
		margin:0;
	}
	.mint-header{
		margin:0;
		background-color:transparent !important;
	}
	.mint-header-button>a{
		color:#4b4b4b;
	}
	.back{
		width:100%;
		height:350px;
		background-color:#ffead3;
	}
	.top{
		width:100%;
		height:40px;
		padding:0 10px;
		text-align:left;
		font-size:24px;
		font-weight:600;
	}
	.time{
		margin-top:50px;
		width:100%;
	}
	.money{
		font-size:40px;
		font-weight:600;   
		color:#FF931F;
		margin:0;
	}
	.right{
		margin-top:12px;
		border-left:1px solid #ccc;
	}
	.countdown{
		font-size:24px;
		margin:0;
	}

	.text{
		font-size:14px;
		color:#8F8F8F;
		margin:0;
	}
	.right .text{
		margin-top:5px; 
	}
	
	.over{
		position: fixed;
		left: 0;
		bottom: 0;
		width:80%;
		height:150px;
		margin-left:10%;
		font-size:12px;
		color:#8F8F8F;
		
	}
	.register-button .mint-button{
		width:100%;
		color:#fff;
		border-radius:2px;
		background-color:#4b4b4b; 
		
	}
</style>