var real_time_refresher = new Vue({
	el: '#real_time',

	mounted() {
		this.loadData()

		setInterval(() => {
			this.loadData()
		}, 100000)
	},

	data: {
		currencies: []
	},

	methods: {
		loadData() {
			var url = 'https://api.coinmarketcap.com/v1/ticker/?limit=30'

			fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.currencies = data
			})
		}
	},
})