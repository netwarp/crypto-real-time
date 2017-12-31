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

			fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.currencies = data
				console.log(data)
			})
		},

		formatDate(timestamp) {
			var d = new Date(timestamp * 1000)

			var year = parseInt(d.getFullYear())
			var month  = parseInt(d.getMonth())
			var day = parseInt(d.getDate())

			var hour = parseInt(d.getHours())
			var minute = parseInt(d.getMinutes())
			var seconds = parseInt(d.getSeconds())

			var string = `${day}`
			return string
		}
	},
})