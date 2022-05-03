import React  from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {SidebarData} from './SidebarData.js';
function Sidebar(){
    return (
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <i class="bi bi-activity grande"></i>
                <span class="fs-4">Psipsi</span>
            </a>
            <div class="sidebar-sticky">
                <div class="position-sticky pt-3">
                    <ul class="nav flex-columm">
                        {SidebarData.map((val,key)=>{
                        return(
                            <li key={key} class="nav-item"onClick={()=>{window.location.pathname=val.link}}>
                                <a class="btn btn-dark nav-link" aria-current="page">
                                    <p class="col-8 text-light"><i class={val.icon_name} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" >    </i>
                                    {val.title}
                                    </p>
                                </a> 
                            </li>
                        )})}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Sidebar;