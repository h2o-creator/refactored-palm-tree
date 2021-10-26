import React, { useEffect } from 'react'
import { getInitialData } from '../utils/api'

function App() {
	useEffect(() => {
		console.log(getInitialData())
		return () => {
			console.log('unmount')
		}
	})

	return (
		<div>
			refactored-palm-tree
		</div>
	);
}

export default App;
