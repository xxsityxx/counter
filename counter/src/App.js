import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import  increment  from './creator'


class App extends React.Component {
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
const mapStateToProps = state => ({
  count: state.count
})


const mapDispatchToProps = ({
  increment
})



App.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
}


const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer