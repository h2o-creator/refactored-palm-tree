import squareicon from 'squareicon'
import SparkMD5 from 'spark-md5'
import standard from 'randomcolor'

export function generateUID () {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
  
export function generateUAvatar (id) {
	let url 
	squareicon({
	  id,
	  hasher: SparkMD5.hash,
	  scheme: standard
	}, (rej, res) => {
	  url = res
	})
	return url
}

export function formatQuestion ({ optionOneText, optionTwoText, author }) {
	return {
		id: generateUID(),
		timestamp: Date.now(),
		author,
		optionOne: {
			votes: [],
			text: optionOneText,
		},
		optionTwo: {
			votes: [],
			text: optionTwoText,
		}
	}
}