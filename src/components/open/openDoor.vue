<template>
	<div class="all">
		<mt-header  class="header">
				<router-link to="/scanCode" slot="right">
				    <mt-button >
				    	<img src="../../../static/img/close.png" alt="" />
				    </mt-button>
				</router-link>
			</mt-header>
		<div class="content">
			<div class="top">输入门锁编号</div>
			<div class="hint">温馨提示：输入编号前请确认在影院门口并开始消费</div>
			<el-row class="number">
				<el-col :span="4">6</el-col>
				<el-col :span="4">7</el-col>
				<el-col :span="4">4</el-col>
				<el-col :span="4"></el-col>
				<el-col :span="4"></el-col>
				<el-col :span="4" class="last"></el-col>
			</el-row>
			<div class="register-button">
				<mt-button  @click="login">结束消费</mt-button>
			</div>
			<el-row class="btn">
				<el-col :span="12">
					<div class="icon">
						<img src="../../../static/img/saoma.png" alt="" />
					</div>
					<router-link to="/scanCode" class="txt">扫码开门</router-link>
				</el-col>
				<el-col :span="12">
					<div class="icon">
						<img src="../../../static/img/dian.png" alt="" />
					</div>
						<router-link to="" class="txt" >开灯光</router-link>
				</el-col>
			</el-row>
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
				this.$router.push({ path: "/consume" });
			},
			
		}
	}
</script>

<style>
	body{
    	margin:0;
    }
    .all{
	    width: 100%;
	    height: 100%;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background:#fff;
		background-size:100% 100%;
    }
    .mint-header{
    	background-color:transparent;
    }
    .content{
    	width:90%;
    	padding:0 20px;
    	
    }
    .top{
		width:100%;
		height:40px;
		text-align:left;
		font-size:24px;
		font-weight:600;
	}
	.hint{
		width:100%;
		height:20px;
		font-size:14px;
		color:#8F8F8F;
		text-align:left;
	}
	.number{
		width:100%;
		height:55px;
		font-size:28px;
		margin-top:30px;
	}
	.el-col-4{
		width:16.666%;
		height:55px;
		line-height:55px;
		font-weight:500;
		text-align: center;
		border:1px solid #8F8F8F;
	}
	.el-col-4:not(.last){
		border-right:0;
	}
	.register-button .mint-button{
		width:100%;
		color:#fff;
		margin-top:30px;
		border-radius:5px;
		background-color:#FF931F; 
		
	}
	.btn{
		width:100%;
		height:60px;
		margin-top:100px;
		padding-top:10px;
	}
	
	a{
		color:#BBBBBB;
		font-size:16px;
		text-decoration: none;
	}
</style>