<template>
	<view class="content">
		<view class="chenav">
			<scroll-view style="height: 100vh;" scroll-y='true'>
				<view :class="(erj == item ?'act lis':'lis')" v-for="(item,index) in yi" :key="index"
					@click="qieh(item)">
					<span>
						{{item}}
					</span>
				</view>
			</scroll-view>
		</view>
		<view class="content_right">
			<view class="title">
				<image src="../../static/icon/icons/xz.png" mode="" />
				<p>{{erj}}</p>
				<image src="../../static/icon/icons/xz.png" class="tit_r" mode="" />
			</view>
			<view class="right_title" v-for="(item,index) in lis" :key="index">
				<view class="tit">
					<view class="title_sty">
						{{item.tit}}
					</view>
					<span>更多></span>
				</view>
				<view class="dk">
					<view class="sj_lis" v-for="(v,index) in item.list" :key="index">
						<view class="lis_li" @click="todetail(v.Id)">
							<image :src="v.imageUrl" mode="" />
							<span>{{v.type_two}}</span>
						</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onBeforeMount,
		watchEffect
	} from 'vue'
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		getTypeOne,
		getTypeTwo,
		getTypeTwoList
	} from '../apis/api.js'

	let yi = ref([])
	let erj = ref('')
	let lis = ref([])


	getTypeOne().then(res => {
		yi.value = res
		erj.value = res[0]
		ersj(erj.value)
	})
  const todetail =(Id)=>{
	  uni.navigateTo({
	  	url:'/pages/detail/datail?Id='+Id,
	  })
  }
	let ersj = (na) => {
		getTypeTwo(na).then(res => {
			res.forEach((va, index) => {
				getTypeTwoList(erj.value, va).then(res => {
					console.log(erj.value, va);
					lis.value.push({
						tit: va,
						list: res
					})
				})
			})
		})
		console.log(lis.value);
	}


	let qieh = (na) => {
		erj.value = na
		lis.value = []
		ersj(na)
	}

	// watchEffect(()=>{
	// 	ersj(erj.value)
	// 	console.log(123);
	// })
</script>

<style scoped lang="scss">
	.content {

		.chenav {
			width: 90px;
			background-color: #e7e7e7;
			text-align: center;
			position: fixed;

			.lis {
				width: 101%;
				padding: 15px 0px;
			}

			.act {
				position: relative;
				color: #aaaaff;
				background-color: white;

				&:before {
					position: absolute;
					top: 50%;
					left: 0;
					width: 4px;
					height: 20px;
					background-color: #aaaaff;
					transform: translateY(-50%);
					content: "";
				}
			}
		}

		.content_right {
			padding-left: 100px;
			width: 100vw;
			float: right;

			.title {
				display: flex;
				justify-content: center;
				margin: 20px 0 30px;

				p {
					font-size: 16px;
					margin: 0 10px;
				}

				image {
					height: 0.1rem;
					width: 1rem;
					margin-top: 11px;
				}

				.tit_r {
					transform: rotateY(180deg);
				}
			}

			.right_title {

				.tit {
					display: flex;
					justify-content: space-between;
					color: #7a7a7a;
					font-size: 12px;
					padding-bottom: 5px;
					border-bottom: 1px solid #f1f1f1;

					.title_sty {
						// transform: scale(0.8);
					}

					span {
						font-family: PingFangSC-Regular;
						transform: scale(0.8);
					}
				}

				.dk {
					display: flex;
					flex-wrap: wrap;

					.sj_lis {
						margin: 2rem 0.66rem 1rem 0;

						.lis_li {
							width: 5rem;
							height: 5.8rem;
							font-size: 0.4rem;
							text-align: center;
							image {
								display: block;
								width: 100%;
								height: 4rem;
								margin-bottom: 10px;
							}
						}
					}

				}

			}
		}

	}
</style>