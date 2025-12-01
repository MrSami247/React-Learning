import React from 'react'
import {Link} from 'react-router'

const Nav = () => {
  return (
    <div>
      <nav classname="navbar navbar-expand-lg bg-body-tertiary">
  <div classname="container-fluid">
    <Link classname="navbar-brand" to="#">Navbar</Link>
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon"></span>
    </button>
    <div classname="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
        <li classname="nav-item">
          <Link classname="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li classname="nav-item">
          <Link classname="nav-link" to="/about">About</Link>
          <Link classname="nav-link" to="/blog">Blog</Link>
        </li>
        <li classname="nav-item dropdown">
          <Link classname="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul classname="dropdown-menu">
            <li><Link classname="dropdown-item" to="#">Action</Link></li>
            <li><Link classname="dropdown-item" to="#">Another action</Link></li>
            <li><hr classname="dropdown-divider"/></li>
            <li><Link classname="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li classname="nav-item">
          <Link classname="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      <form classname="d-flex" role="search">
        <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classname="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
