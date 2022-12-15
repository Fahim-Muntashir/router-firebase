import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>this is home</h2>
            <p>Currrent User Is :{user ? user.displayName : "Nobody"}</p>
        </div>
    );
};

export default Home;