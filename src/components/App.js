import React, { Component } from 'react'
import { getInitialData } from '../utils/api'

class App extends Component {
  componentDidMount() {
	console.log(getInitialData())
  }

  render() {
	return (
		<div>
			refactored-palm-tree
		</div>
	  );
  }
}

export default App;
