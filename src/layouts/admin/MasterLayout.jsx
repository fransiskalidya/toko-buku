import React from "react";
import '../../assets/css/styles.css';
import '../../assets/js/scripts';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import routes from '../../routes/routes';

const MasterLayout = () =>{
    return(
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                <div class="container-fluid px-4">
                    <main>
                    <div class="container-fluid px-4">
                    <div class="row">
                        <Switch>
                            {routes.map((route,idx)=>{
                                return(
                                    route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name = {route.name}
                                            render={(props)=>(
                                                    <route.component {...props}/>
                                            )}
                                        />
                                    )
                                )
                            })}
                            <Redirect from="admin" to="/admin/dashboard"/>
                        </Switch>

                        </div>
                        </div>
                    </main>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default MasterLayout;