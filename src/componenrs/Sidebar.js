import React from 'react'
import {Routes ,Route, Link} from 'react-router-dom'
import Home from './Home'
import MyProfile from './MyProfile'
import Camera from './Camera'

const Sidebar = () => {
  return (
    <div>
      
      <div class="s-layout">
{/* <!-- Sidebar --> */}
<div class="s-layout__sidebar">
  <a class="s-sidebar__trigger" href="#0">
     <i class="fa fa-bars"></i>
  </a>

  <nav class="s-sidebar__nav">
     <ul>
        <li>
           <Link class="s-sidebar__nav-link" to="/home">
              <i class="fa fa-home"></i><em>Home</em>
           </Link>
        </li>
        <li>
           <Link class="s-sidebar__nav-link" to="/myprofile">
             <i class="fa fa-user"></i><em>My Profile</em>
           </Link>
        </li>
        <li>
           <Link class="s-sidebar__nav-link" to="/camera">
              <i class="fa fa-camera"></i><em>Camera</em>
           </Link>
        </li>
     </ul>
  </nav>
</div>

{/* <!-- Content --> */}
<main class="s-layout__content">
 <Routes>
    <Route path='/home' element={<Home />}/>
    <Route path='/myprofile' element={<MyProfile />}/>
    <Route path='/camera' element={<Camera />}/>


 </Routes>
</main>
</div>

    </div>
  )
}

export default Sidebar
