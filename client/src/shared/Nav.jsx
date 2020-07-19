import React from 'react'
import { NavLink , Link} from 'react-router-dom'
// import { ReactComponent as Home } from './assets/white-bookmark-icon.svg'
// import { ReactComponent as Search } from './assets/white-bookmark-icon.svg'
// import { ReactComponent as CreatePost } from './assets/white-bookmark-icon.svg'
// import { ReactComponent as Notification } from './assets/white-bookmark-icon.svg'
// import { ReactComponent as CurrentUserPage } from './assets/white-bookmark-icon.svg'
import './Nav.scss'

export default function Nav(props) {
  return (
    <nav>
      <div className="wrapper">
        <div className="nav-list ">
          <div>
            <Link to="/" >Home</Link>
            <Link to="/Login" >Login</Link>
            <Link to="/Register" >Register</Link>
            {props.currentUser && <Link to={`/users/${props.currentUser.id}`}>UserPage</Link>}
            <Link to='/createpost' >CREATE A POST</Link>
        </div>
        </div>
        </div>
</nav>
  )
}