var real_time_refresher = new Vue({
	el: '#real_time',

	mounted() {
		this.loadData()

		setInterval(() => {
			this.loadData()
		}, 10000)
	},

	data: {
		currencies: []
	},

	methods: {
		loadData() {
			var url = 'https://api.coinmarketcap.com/v1/ticker/?limit=30'
			console.log('ok')

			fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.currencies = data
				console.log(data)
			})
		}
	},
})