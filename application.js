var real_time_refresher = new Vue({
	el: '#real_time',

	mounted() {
		this.refresher()
	},

	data: {
		currencies: []
	},

	methods: {
		refresher() {
			var url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10'

			setInterval(() => {
				fetch(url)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					this.currencies = data
					console.log(data)
				})
			}, 180000)
		}
	}
})