<template>
	<!-- 搜索 -->
	<view class="title">
		<view class="title_content">
			<view class="title_search">
				<view class="search">
					<image src="../../image/sousuo.svg" mode="" class="search_image"></image>
					<input type="text" placeholder="请输入您想要的商品" class="search_input">
				</view>
			</view>
		</view>
	</view>
	<!-- 一级标题 -->
	<!-- <view class="text" :scroll-x="true">
		<view class="text_view" >
			{{item}}
		</view>
	</view> -->
	<view class="try" >
		<li class="try-item" v-for="(item,index) in data">{{item}}</li>
	</view>
	<!-- 轮播图 -->
	<view class="swiper">
		<swiper :indicator-dots="true" indicator-color="rgba(0, 0, 0, .3)" :autoplay="true" interval="2000">
			<swiper-item v-for="(item,index) in img" :key="index">
				<view class="swiper-item">
					<image :src="item" mode="" />
				</view>
			</swiper-item>
		</swiper>
	</view>
	<!-- 文本 -->
	<view class="swiper_text">
		<li>大牌品质</li>
		<li>/</li>
		<li>工厂价格</li>
		<li>/</li>
		<li>分期支付</li>
		<li>/</li>
		<li>顺丰包邮</li>
		<li>/</li>
		<li>无忧退款</li>
	</view>
	<view class="logo">
		<view class="logo-item" v-for="(item,index) in imgurl">
			<image :src="item" class="logo-img" mode="aspectFit"></image>
			<view class="logo-text">{{index}}</view>
		</view>
	</view>
	<!-- 热门 -->
	<view class="hot">
		<view class="hot-box" v-for="(item,index) in hotlist" @click="todetail(item.Id)">
			  <image :src="item.imageUrl" mode="" class="hot-img"></image>
			  <text class="hot-priceStr">￥{{item.priceStr}}</text>
			  <view class="act" >
			  	   <text class="act-text" v-for="(it,index) in  label[index] ">{{it.content}}</text>
			  </view>
			<text class="hot-title">{{item.title}}</text>
				<br>
		
			
		 </view>
	</view>
</template>
<script setup>
	import {ref} from 'vue';
	import{getTypeOne,getList1}from'../apis/api.js';
	let data = ref([]);
	let hotlist =ref({});
	let label =ref([]);
	const imgurl ={
		"品质男孩":"https://bfs.biyao.com/group1/M01/87/05/rBACVF9I-oCADPIbAAAW-6wj7Nk477.png",
		"每日签到":"https://bfs.biyao.com/group1/M01/87/03/rBACVF9I-RmAHwqQAAATob9apjA195.png",
		"每日上新":"https://bfs.biyao.com/group1/M01/88/F0/rBACW19I-daAfvjvAAAXEsKWt18728.png",
		"生鲜直供":"https://bfs.biyao.com/group1/M01/88/F1/rBACW19I-hCAXKHlAAAStrCj5PY962.png",
	}
	// const a ={
	// "品质男孩":"https://bfs.biyao.com/group1/M01/87/05/rBACVF9I-oCADPIbAAAW-6wj7Nk477.png",
	// "食品饮料"::"https://bfs.biyao.com/group2/M00/7D/E0/CghkFmMV0NGAKS9iAAAYBi-yE7E858.png",
	// "每日签到":"https://bfs.biyao.com/group1/M01/87/03/rBACVF9I-RmAHwqQAAATob9apjA195.png",
	// "每日上新":"https://bfs.biyao.com/group1/M01/88/F0/rBACW19I-daAfvjvAAAXEsKWt18728.png",
	// "生鲜直供":"https://bfs.biyao.com/group1/M01/88/F1/rBACW19I-hCAXKHlAAAStrCj5PY962.png",
	// }
	const img = [
		'https://bfs.biyao.com/group2/M00/32/9D/CghjFmJ6LPiAeSO9AAA7svOszMY962.jpg',
		'https://bfs.biyao.com/group2/M00/2F/7A/CghjFmJ0s5OAS5DnAABbNoMd8m4404.jpg',
		'https://bfs.biyao.com/group2/M00/42/E9/CghkFmKWtDOAb_kBAABFbGOM4rs662.jpg',
		'https://bfs.biyao.com/group2/M00/4A/F5/CghiFmKmypKAJzJ_AABKjkLREbA635.jpg',
		'https://bfs.biyao.com/group2/M00/32/9D/CghjFmJ6LPiAeSO9AAA7svOszMY962.jpg',
		'https://bfs.biyao.com/group2/M00/2F/7A/CghjFmJ0s5OAS5DnAABbNoMd8m4404.jpg'
	];
	getTypeOne().then(res=>{
		data.value = res
	})
	getList1().then(res=>{
	  for(var i in res){
		 label.value.push(JSON.parse( res[i].labels));
	  }
     console.log(name)
		hotlist.value=res
	})
const todetail=(Id)=>{
		 uni.navigateTo({
		 	url:'/pages/detail/datail?Id='+Id,
		 })
	}
</script>

<style lang="scss">
	// 搜索
	.title {
		width: 750rpx;
		height: 1.71rem;
		background-color: antiquewhite;

		.title_search {
			width: 100%;
			background: #fff;
			padding-top: 0.2rem;
			padding-bottom: 0.12rem;

			.search {
				width: 20.1rem;
				height: 2.2rem;
				margin: 0 auto;
				background: #f4f4f4;
				border-radius: 25px;
				overflow: hidden;
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding: 0 5px 0 13px;

				.search_image {
					width: 30px;
					height: 30px;
				}

				.search_input {
					display: block;
					font-size: 13px;
					line-height: 1.4em;
					height: 1.4em;
					min-height: 1.4em;
					overflow: hidden;
					padding: 0 0 0 10px;
				}
			}
		}
	}

	// 轮播图
	.swiper {
		width: 750rpx;
		background: #f4f4f4;
		overflow: hidden;
		margin-top: 5px;

		image {
			width: 100%;
			height: 150px;
		}
	}
        .try{
			display: flex;
			flex-wrap: nowrap;
			  overflow-x:scroll ;
			  overflow-y:hidden ;
			 margin-top: 20px;
			 height: 35px;
			.try-item{
				list-style: none;				    
				    font-size: 0.28rem;
				    height: 0.72rem;
				    line-height: 0.72rem;
				    padding: 0rem 0.2rem;
			}
		}
		// 去除滚动条显示
		.try::-webkit-scrollbar{display:none}
	    .text {
		width: 750rpx;
		display: flex;
	    }
	.logo{
		display: flex;
		width: 100%;
		justify-content: space-around;
		.logo-item{
			width: 100px;
			height: 60px;
			.logo-img{
				width: 50px;
				height: 50px;
			}
			.logo-text{
				
			}
			
		}
 	}

	.swiper_text {
		width: 750rpx;
		display: flex;
		justify-content: space-around;

		li {
			list-style: none;
			height: 1.72rem;
			font-size: 0.24rem;
			color: #9687a4;
			background: #fff;
			line-height: 1.72rem;
		}
	}
	.hot{
		margin-top: 100px;
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		.hot-box{
			width: 45%;
			// height: 400px;
			margin: 0 auto;
			.hot-img{
				width: 100%;
				height: 170px;
			}
			.hot-title{
				    margin-bottom: 0.08rem;
				    color: #4a4a4a;
				    line-height: 0.28rem;
			}
			.hot-priceStr{
				    color: #f7a701;
					font-family: PingFangSC, helvetica, 'Heiti SC';
			}
		}
	}
	.act-text:nth-child(1){
    	background: rgb(171, 127, 209);
	    color: rgb(255, 255, 255);
	    border: 0.015rem solid rgb(171, 127, 209);
	    border-radius: 2px;
		font-size: 12px;
	}
	.act-text:nth-child(2){
	background: rgb(255, 255, 255);
	    color: rgb(251, 76, 129);
	    border: 0.015rem solid rgb(251, 76, 129);
	    border-radius: 2px;
		margin-left: 10px;
		font-size: 12px;
	}
</style>