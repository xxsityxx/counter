import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const increment = () => ({
  type: INCREMENT
})

const INCREMENT = 'e.INCREMENT'


class App extends Component {
  constructor(props) {
     super(props)
  }
  
  render() {
    const { count, increment } = this.props
    return (
      <div>
        <div>{count}</div>
        <button onClick={increment}>
          Normal Increment
        </button>
      </div>
    )
  }
}


App.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  count: state.count
})


const mapDispatchToProps = ({
  increment
})


const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer