
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import SideBar from '../sideBar/SideBar';
import CreateOrganization from '../../CreateOrganization'
import Cards from '../../Cards'

const Home = () => {

  return (
    <div className="home">

<SideBar/>
<Header/>
<CreateOrganization/>
           <Cards/>
<Outlet/>

    </div>
  );
};

export default Home;
