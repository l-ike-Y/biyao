<template>
	<view>
		<!-- 轮播 -->
		<swiper class="swiper" circular>
			<swiper-item v-for="(item,index) in imgArr" key="index">
				<image class="banner" :src="item" mode="scaleToFill"></image>
			</swiper-item>
		</swiper>
		<!-- 详情 -->
		<section class="gl-base-detial-wrap">
			<view class="price-collec-info">
				<view class="price">￥<span>{{list.priceStr*1}}</span>
				</view>

				<view class="al-pay-hb">
					<span>
						<image class="im0" src="../../static/huabei.png"></image>
					</span> 支持花呗分期付款
				</view>
				<view id="collectSign" class="collect">
					<!-- <i class="sprites-icon"></i> -->
					<view class="collectText">收藏</view>
				</view>
			</view>
			<view class="makers-info">
				<view class="markers-text">
					<view class="sprites-icon img"></view>{{list.supplier}}
				</view>
				<view class="generate-time">生产周期: <span class="duration-days">2</span>天
				</view>
			</view>
			<view class="product-h1-title">{{list.title}}</view>
			<view class="product-h3-desc">{{list.salePoint}}</view>
		</section>
		<!-- 服务协议 -->
		<section class="gl-service-content">
			<ul class="gl-service-list">
				<li>
					<image class="im1" src="../../static/wancheng.png" mode=""></image>7天无忧退货
				</li>
				<li>
					<image class="im1" src="../../static/wancheng.png" mode=""></image>先行赔付
				</li>
				<li>
					<image class="im1" src="../../static/wancheng.png" mode=""></image>超时赔偿
				</li>
				<li>
					<image class="im1" src="../../static/wancheng.png" mode=""></image>顺丰包邮
				</li>
				<li class="gl-more">
					<image class="im1" src="../../static/gengduo.png" mode=""></image>
				</li>
			</ul>
		</section>
		<!-- 拼团玩法 -->
		<view class="pt">
			<view class="top">
				<text>拼团玩法</text>
				<text>详细规则<image class="im3" src="../../static/xiangyoujiantou.png" mode=""></image></text>
			</view>
			<view class="bottom">

			</view>
		</view>
		<!-- 评价详情 -->
		<view class="evaluate">
			<view class="c2">
				<span>商品评价</span>
				<span>好评率</span>
			</view>
			<view class="eval-list">
				<view class="li1" v-for="v in comment">
					<view class="eval-user">
						<image class="im2" :src="v.userPic"></image>
						<view class="dd">{{ v.userName }}</view>
					</view>
					<!-- 评论 -->
					<view class="eval-content">
						<view class="eval-time">
							<span>{{ v.time }}&nbsp;&nbsp;</span>
							<span>{{ v.product }}</span>
						</view>
						<view class="eval-artical">{{ v.text }}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="view-main clearfix">
			<view class="view-detail">
				<view class="txq_container">
					<view class="txq_header">
						<view class="txq_item" v-for="v in description">
							<span class="s1">{{ v.title }}</span>
							<span class="s2">{{ v.text }}</span>
						</view>
					</view>

					<view class="txq_details">
						<view v-for="v in descriptionImage">
							<image class="im4" :src="v" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
    import {getDetail} from '../apis/api.js'
	let list = ref([])
	let id = ref("")
	let imgArr = ref([])
	let descriptionImage = ref([]);
	let description = ref([]);
	let comment = ref([]);
	let flag = ref(true);
	onLoad((option) => {
		console.log(option.Id);
		id.value = option.Id
		getDetail(id.value).then(res => {
			console.log(res);
			list.value = res[0]
			imgArr.value = JSON.parse(list.value.imgs);
			descriptionImage.value = JSON.parse(list.value.descriptionImage);
			description.value = JSON.parse(list.value.description);
			comment.value = JSON.parse(list.value.comment);
		})
	})
</script>

<style scoped>
	.swiper {
		width: 375px;
		height: 375px;
	}

	.banner {
		width: 375px;
		height: 375px;
	}

	.gl-base-detial-wrap {
		padding: 10px;
		width: 355px;
		height: 181px;
	}

	.price-collec-info {
		width: 351px;
		height: 31px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.price {
		width: 60px;
		height: 29px;
		font-size: 24px;
		color: red;
	}

	.al-pay-hb {
		width: 113px;
		height: 18px;
		font-size: 12px;
		line-height: 18px;
		padding: 0px 6px;
		margin-left: -130px;
		color: #666;
		border: .1px solid #ebebeb;
		border-radius: 2px;
	}

	.collectText {
		width: 24px;
		height: 16px;
		font-size: 12px;
	}

	.makers-info {
		width: 351px;
		height: 27px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.markers-text {
		/* max-width: 4.78rem; */
		line-height: 27px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 12px;
		color: #bf9e6b;
	}

	.generate-time {
		flex-wrap: nowrap;
		height: 15px;
		align-items: center;
		color: #bbbbbb;
		font-size: 12px
	}

	.product-h1-title {
		width: 351px;
		margin-top: 16px;
		height: 48px;
		font-size: 18px;
		color: black;
	}

	.product-h3-desc {
		font-size: 14px;
		margin-top: 6px;
		height: 36px;
		color: #999;
	}

	.gl-service-list {
		width: 375px;
		padding: 0 4px;
		height: 36px;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		justify-content: space-between;
	}

	.gl-service-list li {
		list-style: none;
		line-height: 36px;
		font-size: 12px;
		color: #bf9e6b;
		margin-left: 5px;
	}

	.im1 {
		width: 10px;
		height: 10px;
		vertical-align: middle;
		margin-right: 2px;
	}

	.gl-more {
		margin-right: 10px;
	}

	.im0 {
		vertical-align: middle;
		width: 14px;
		height: 14px;
	}

	.li1 {
		width: 355px;
		margin: 0 auto;
		list-style: none;
		/* margin-right: 20px; */
	}

	.eval-list {
		margin: 0 auto;
	}

	.evaluate {
		margin-top: 10px;
		height: 259px;
		overflow: hidden;
	}

	.im2 {
		width: 28px;
		height: 28px;
		border-radius: 50%;
	}

	.eval-user {
		margin-top: 0 auto;
		width: 351px;
		height: 28px;
		display: flex;
		text-align: left;
	}

	.dd {
		line-height: 28px;
		margin-left: 10px;
	}

	.eval-time {
		margin: 0 6px;
		width: 351px;
		font-size: 12px;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.eval-artical {
		margin-top: 12px;
		width: 351px;
		font-size: 16px;
	}

	.eval-artical {
		margin-bottom: 6px;
	}

	.top {
		margin: 0 auto;
		width: 351px;
		height: 32px;
		line-height: 32px;
		font-size: 22px;
		display: flex;
		justify-content: space-between;
	}

	.im3 {
		width: 22px;
		height: 22px;
		vertical-align: middle;
		margin-bottom: 6px;
	}

	.c2 {
		width: 351px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		margin-top: 6px;
		margin-bottom: 15px;
	}

	.txq_header {
		margin-top: 30px;
		height: 362px;
		text-align: center;
		/* background-color: #9ba5a4; */
		background: #EEE;
	}

	.txq_item {
		display: flex;
		height: 60px;
		justify-content: space-around;
		text-align: left;
	}

	.s1 {
		width: 120px;
		font-size: 16px;
		color: #999;
	}

	.s2 {
		font-size: 14px;
		color: black;
	}
	.txq_details{
		width: 320px;
		margin: 0 auto;
	}
	.im4{
		margin-top: 50px;
	}
</style>