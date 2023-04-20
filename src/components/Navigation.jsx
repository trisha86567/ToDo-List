import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import ToDoContext from '../context/TodoContext';
import { useNavigate } from "react-router-dom";



function Navigation(props) {
const {user, setUser}=useContext(ToDoContext);
const navigate=useNavigate();

const logout=()=>{
  localStorage.removeItem('user');
  setUser(null);
  navigate('/');
}

    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <img src="/assets/logo.jpg" class="img-fluid" alt="Responsive image" />
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!user?
             <>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                    Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                    About
                    </Link>
              </li>             
              </> 
              :
              <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">{user?.username}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/task-list">
                    Task List
                    </Link>
              </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/create-task">
                        CreateTask</Link>
                  </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                    About
                    </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                <li><Link class="dropdown-item" to="/profile">profile</Link></li>
            <li><Link class="dropdown-item" to="/about">About</Link></li>
            <li class="dropdown-divider"></li>
            <li className='nav-item' onClick={logout}>
               Logout
            </li>

                </ul>
              </li>
              </>
           }   
        </ul>
          </div>
        </div>
      </nav>
  )
          }


export default Navigation;