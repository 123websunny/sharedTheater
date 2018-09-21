<template>
	<div class="all">
		<mt-header  class="header">
			<router-link to="/nearby" slot="left">
			    <mt-button >
			    	<img src="../../../static/img/close.png" alt="" />
			    </mt-button>
			</router-link>
			<mt-button slot="right" class="clear">清除 </mt-button>
		</mt-header>
		<div class="content">
			<div class="top">建设北路</div>
			<div class="panel">
			    <el-row class="add">
			    	<el-col :span="2">
			    		<img src="../../../static/img/time.png" class="licon"/>
			    	</el-col>
			    	<el-col :span="22">
			    		<mt-field type="text" placeholder="环球中心">
							<img src="../../../static/img/close.png" width="14px" height="14px" />
						</mt-field>
			    	</el-col>
			    </el-row>
				<el-row>
			    	<el-col :span="2">
			    		<img src="../../../static/img/time.png" class="licon"/>
			    	</el-col>
			    	<el-col :span="22">
			    		<mt-field type="text" placeholder="建设路">
							<img src="../../../static/img/close.png" width="14px" height="14px" />
						</mt-field>
			    	</el-col>
			    </el-row>
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
	.rt{
		float:right;
	}
	.all{
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: #fff; 
		overflow: hidden;
	}
	.mint-header{
		margin:0 10px;
		background-color:transparent !important;
	}
	.mint-header-button>a{
		color:#4b4b4b;
	}
	.clear{
		color:#8F8F8F !important;
	}
	.top{
		width:100%;
		height:40px;
		margin-top:20px;
		padding:0 20px;
		text-align:left;
		font-size:22px;
		font-weight:600;
		border-bottom:1px solid #CCCCCC;
	}
	.panel{
		width:90%;
		margin:10px auto;
	}
	.add{
		border-bottom:1px solid #ccc;
	}
	.licon{
		margin-top:18px;
	}
	.mint-cell:last-child{
	   background-size:0;
	}
	.mint-cell-wrapper{
		padding:0;
	}
	
</style>