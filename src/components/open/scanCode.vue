<template>
	<div class="all">
		<div class="back">
			<mt-header  class="header">
				<router-link to="/nearby" slot="right">
				    <mt-button >
				    	<img src="../../../static/img/close.png" alt="" />
				    </mt-button>
				</router-link>
			</mt-header>
			<div class="content">
				<div class="top">扫码开门</div>
				<div class="code"></div>
				<div class="switch">  
					<el-row>
						<el-col :span="12" >
							<div class="icon">
								<img src="../../../static/img/hand.png" alt="" />
							</div>
							<router-link to="/openDoor" class="txt">输入门锁编号</router-link>
						</el-col>
						<el-col :span="12">
							<div class="icon">
								<img src="../../../static/img/light.png" alt="" />
							</div>
							<router-link to="" class="txt" >打开手电筒</router-link>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
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
		background:url(../../../static/img/1dde0157736745.59e1526170523.png) 0 center no-repeat;
		background-size:100% 100%;
    }
    .back{
    	background-color:rgba(112,112,112,.4);
    }
    .mint-header{
    	background-color:transparent;
    }
    .top{
		width:100%;
		height:40px;
		color:#fff;
		padding:0 20px;
		text-align:left;
		font-size:24px;
		font-weight:500;
	}
	.switch{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 130px;
	}
	.icon{
		width:60px;
		height:60px;
		border-radius:50%;
		margin:10px auto;
		background-color:#605f5d;
		
	}
	.icon img{
		margin-top:15px;
	}
	
	a{
		color:#BBBBBB;
		font-size:16px;
		text-decoration: none;
	}
</style>