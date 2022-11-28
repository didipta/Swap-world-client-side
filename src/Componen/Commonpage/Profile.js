import React, { useContext } from 'react';
import { AuthContext } from '../Context/Authprovider';
import Adminseller from '../Hook/Adminseller';
import useTitle from '../Hook/Titlehook';

const Profile = () => {
    const {user}=useContext(AuthContext);
    useTitle(user.displayName);
    const [isrole, isroleLoading,userdetails]=Adminseller(user.email);
    return (
        <div className="p-10 pt-20 ">
           <div className="card card-compact w-96 bg-base-100 shadow-xl m-auto mt-5">
            <form className="p-5 m-auto flex flex-col items-center gap-5 w-full font-medium">
            <div class="avatar online">
            <div class="w-24 rounded-full">
                <img src={user.photoURL} alt="" />
            </div>
            </div>
            <input type="text" value={userdetails.name}  className="input input-bordered input-error w-full max-w-xs" />
            <input type="text" value={userdetails.email} className="input input-bordered input-error w-full max-w-xs" />
            <input type="text" value={userdetails.phone} className="input input-bordered input-error w-full max-w-xs" />
            <input type="text" value={userdetails.role} className="input input-bordered input-error w-full max-w-xs" />
            <button className="btn btn-sm">Change</button>
            </form>
            </div>
        </div>
    );
};

export default Profile;