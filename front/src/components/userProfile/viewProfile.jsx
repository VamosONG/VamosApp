import { useSelector, useDispatch } from 'react-redux'
import AdminProfile from './adminProfile'
import UserProfile from './userProfile'

const ViewProfile = () =>{
    const {currentUser} = useSelector((state) => state)
    return (
        <>
        {currentUser.admin && currentUser.admin ? (
            <AdminProfile/>
        ) : (
            <UserProfile/>
        )}
        </>
    )
}
export default ViewProfile