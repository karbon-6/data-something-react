import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../component/home/Home";
import NavBar from "../NavBar/NavBar";



const AppRoutes = ()=>(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={
                <>
                <NavBar />
                <Routes>
                    <Route element={<Navigate to='home'/>} />
                    <Route path="home" element={<Home/>}/>
                </Routes>
                </>
            } />
        </Routes>
    </BrowserRouter>
)

export default AppRoutes