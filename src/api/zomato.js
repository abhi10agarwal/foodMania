import axios from 'axios'

export default axios.create({
	baseURL: 'https://developers.zomato.com/api/v2.1',
	headers: {
		'user-key': 'ad55398779dbec785363e14a3e858432'
	}
})
