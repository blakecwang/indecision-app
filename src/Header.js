import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  )
}

Header.defaultProps = {
   title: 'Indecision'
}

// Header.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string
// }

export default Header
