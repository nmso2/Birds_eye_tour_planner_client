import React from 'react';
import useAuth from '../../hooks/useAuth';

const UserProfile = () => {
    const { user } = useAuth();
    return (
        <div className="inline-block my-12 p-12 shadow-2xl">
            <img className=" mx-auto" src={user.photoURL} alt="" />
            <p>Name: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
        </div>
    );
};

export default UserProfile;