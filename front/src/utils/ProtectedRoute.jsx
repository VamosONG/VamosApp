import { useSelector } from "react-redux";
import { Navigate, Outlet} from "react-router-dom";

const ProtectedRoutes = ({isAllowed, children}) => {
    const {currentUser} = useSelector(state=>state)
    if(!currentUser.name){
      return  <Navigate to="/" />
    }
    return <Outlet/>
}
export default ProtectedRoutes;