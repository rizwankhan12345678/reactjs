import React, {Fragment} from "react";
import {Route, Routes, Link } from "react-router-dom";
import Home from "../components/Home";
import Features from "../components/Features";
import Login from "../components/authenticate/login";
import PricingPlan from "../components/authenticate/pricing-plan";
import Dashboard from "../components/Dashboard";
import PaginateList from "../components/PaginateList";
import MusicList from "../components/MusicList";
import ProtectedRoute from "./ProtectedRoute";
import UnprotectedRoute from "./UnprotectedRoute";

function AppRouter() {
    return (
        <Routes>
            <Fragment>
                <Route
                    exact
                    path="/login"
                    element={ <UnprotectedRoute /> }
                >
                    <Route exact path='/login' element={<Login/>} />
                </Route>
                <Route
                    exact
                    path="/features"
                    element={ <UnprotectedRoute /> }
                >
                    <Route exact path='/features' element={<Features/>} />
                </Route>
                <Route
                    exact
                    path="/pricing-plan"
                    element={ <UnprotectedRoute /> }
                >
                    <Route exact path='/pricing-plan' element={<PricingPlan/>} />
                </Route>
                <Route
                    exact
                    path="/"
                    element={ <ProtectedRoute /> }
                >
                    <Route exact path='/' element={<Home/>} />
                </Route>
                <Route
                    exact
                    path="/dashboard"
                    element={ <ProtectedRoute /> }
                >
                    <Route exact path='/dashboard' element={<Dashboard/>} />
                </Route>
                <Route
                    exact
                    path="/paginate-list"
                    element={ <ProtectedRoute /> }
                >
                    <Route exact path='/paginate-list' element={<PaginateList/>} />
                </Route>
                <Route
                    exact
                    path="/music-list"
                    element={ <ProtectedRoute /> }
                >
                    <Route exact path='/music-list' element={<MusicList/>} />
                </Route>
                <Route
                    path="*"
                    element={
                        <div>
                            <h2>404 Page not found etc</h2>
                            <div className="text-center">
                                click to goto <Link to='/' style={{fontSize: 20}}>Home</Link>
                            </div>
                        </div>
                    }
                />
            </Fragment>
        </Routes>
    )
}

export default AppRouter;