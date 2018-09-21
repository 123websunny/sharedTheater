<template>
    <div class="all">
        <div class="content">
            <div id="map" class="map">
               <router-link to="/search">
					<div class="search">
						<mt-search placeholder="请输入地名查找影院"></mt-search>
					</div>
				</router-link>
				<div class="layer">
					
				</div>
				<div class="detail">
					<div class="current">
						<img src="../../../static/img/current.png" alt="" />
					</div>
					<div class="add">
						<mt-cell title="峰汇广场">
						  <img slot="icon" src="../../../static/img/qvyu.png" width="12" height="11">
						</mt-cell>
						<mt-cell title="1.5千米/10分钟">
						  <img slot="icon" src="../../../static/img/time.png" width="12" height="12">
						</mt-cell>
						<mt-cell title="成都市天府三街吉泰路178号">
						  <img slot="icon" src="../../../static/img/weizhi.png" width="11" height="13">
						</mt-cell>
					</div>
					<div class="register-button">
						<mt-button>开 始 导 航</mt-button>
					</div>
				</div>
            </div>
        </div>
        <views></views>
    </div>
	
</template>

<script>
	import Views from "@/components/views";
	
	export default {
		data() {
			return {
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
    body{
    	margin:0;
    }
    .all{
	    width: 100%;
	    height: 100%;
		margin: 0;
		padding: 0;
		background-color: #fff; 
		overflow: hidden;
    }
    .mint-searchbar {
		background-color: #fff !important;
		/*border: 1px solid #bbb;*/
		border-radius:2px;
		box-shadow:0 0 10px #BBB;
		padding:0;
	}
	.search {
		position: absolute;
		width: 90%;
		height: 60px;
		margin-left: 5%;
		margin-top: 10px;
	}
	.detail{
		position: fixed;
		left:5%;
		bottom:55px;
		width:90%;
		height: 200px;
		text-align:left;
	}
	.add{
		background:#fff;
		border:1px solid #ccc;
		margin-bottom:10px;
	}
	.mint-cell{
		min-height:25px;
	}
	.mint-cell-wrapper{
		font-size:12px;
		min-height:20px;
	}
	.register-button .mint-button{
		width:100%;
		color:#fff;
		border-radius:2px;
		font-size:14px;
		background-color:#4b4b4b; 
		
	}
</style>