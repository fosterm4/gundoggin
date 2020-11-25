import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/gatsby-icon.png'
import bag from '../images/shopping-bag-white.png'
import './css/web-header.css'

class WebHeader extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      hasScrolled: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if(scrollTop > 50){
      this.setState({hasScrolled:true})
    }
    else{
      this.setState({hasScrolled: false})
    }
  }

  render(){
    return(
      <div className = {this.state.hasScrolled ?
      'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/">ABOUT US</Link>
          <Link to="/aboutUs">BUY THE COURSE</Link>
          <Link to="/"><img src={logo} width="40" alt = "logo"/></Link>
          <Link to="/contact">SHOP</Link>
          <Link to="/"><img src={bag} width="25" alt = "bag"/></Link>
          <Link to="/ranchSearch"><button>LOGIN</button></Link>
        </div>
      </div>
    )
  }
}

WebHeader.propTypes = {
  siteTitle: PropTypes.string,
}

WebHeader.defaultProps = {
  siteTitle: ``,
}

export default WebHeader
