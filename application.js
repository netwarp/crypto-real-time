var real_time_refresher = new Vue({
	el: '#real_time',

	mounted() {
		this.loadData()

		setInterval(() => {
			this.loadData()
		}, 7000)
	},

	data: {
		currencies: []
	},

	methods: {
		loadData() {
			var url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10'
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