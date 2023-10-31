import { useContext } from "react";
import { AuthContext } from "../Providers/authProvider";


const Profile = () => {
    
    const {user} = useContext(AuthContext)
    return (
        <div>
            this is {user.email}
        </div>
    );
};

export default Profile;