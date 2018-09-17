<template>
    <div style="width: 100%;height: 100%;margin: 0;padding: 0;background-color: #fff; overflow: hidden;">
    	<div class="top">
    		<el-row>
    			<el-col :span="12">
    				<p class="name">登录 / 注册</p>
    			</el-col>
    			<el-col :span="12">
    				<div class="rt">
    					<img src="../../../static/img/nophoto.png" alt="" />
    				</div>
    			</el-col>
    		</el-row>
    	</div>
    	<div class="panel">
    		<mt-cell title="我的钱包" is-link>
			  <img slot="icon" src="../../../static/img/wallet.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="我的积分" is-link>
			  <img slot="icon" src="../../../static/img/jifen.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="结束消费" is-link>
			  <img slot="icon" src="../../../static/img/over.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="消费清单" is-link>
			  <img slot="icon" src="../../../static/img/list.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="我的消息" is-link>
			  <img slot="icon" src="../../../static/img/info.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="帮助/保障" is-link>
			  <img slot="icon" src="../../../static/img/help.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="设置" is-link>
			  <img slot="icon" src="../../../static/img/set.png" width="24" height="24">
			</mt-cell>
    	</div>
        <Views></Views>
    </div>
	
</template>

<script>
	import Views from "@/components/views";
	
	export default {
		data() {
			return {
				//				shows:1,
			}

		},
		mounted() {

		},
		components: {
			Views
		},
		methods: {
			

		}
	}
</script>

<style>
	.top{
		margin:40px 10px 20px 10px;
		
	}
	.name{
		margin:0;
		font-size:18px;
		font-weight:bold;
		text-align:left;
	}
	.edit{
		margin:10px 0;
		font-size:14px;
		text-align:left;
		color:#8F8F8F;
	}
	.rt{
		text-align:right;
	}
	.rt img{
		border-radius:50%;
	}
	.mint-cell-title{
		text-align:left;
	}
	.mint-cell-text{
		margin-left:10px;
	}
	.mint-cell{
		min-height:60px;
		border-bottom:1px solid #ddd;
	}
	.mint-cell:last-child{
	   border: 0;
	   background-size:0;
	}
</style>