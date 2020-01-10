import React,{useState, useEffect} from 'react';

const WebHome = (props:{}) =>{
    const [user, setUser] = useState<string | null>('123');
    return(
        <>
            <h1>WebHome</h1>
            <div>
                {user}
            </div>
        </>
    )
};

export default WebHome;
