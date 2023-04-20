<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style scss>
	/*每个页面公共css */
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
</style>
