<template>
  <div class="hello">
  	<router-link to="/register">
  		  <div class="table">
  		      <img src="../assets/logo.png">
			  </div>
			  <div class="text">
			    	<span class="lf">共享影院 </span>
			    	<span>乐享非凡</span>
			  </div>
  	</router-link>
  	
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    }
  },
  methods:{
  	  
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
		 }
		 .table{
		    display: table;
		    width: 100%;
		    height: 100%;
		    margin-top:200px;
		}
		 .text{
		 	width:50%;
		 	height:40px;
		 	line-height:40px;
		 	margin:0 auto;
		 	text-align: center;
		 
		 	color:#999;
		 	font-size:16px;
		 }
		 .lf{
		 	margin-right:15px;
		 }
		 a{
		 		text-decoration:none;
		 }
 
</style>
