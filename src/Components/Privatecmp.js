import { Navigate, Outlet } from "react-router-dom";

function PrivateCmp(){
    const auth=localStorage.getItem('usersdatatoken');    
    return auth?<Outlet/>:<Navigate to="/"/>
}
export default PrivateCmp;