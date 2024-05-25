import React from 'react';
import { useNavigate } from 'react-router-dom';

const Labs = () => {

    const Navigate = useNavigate();

    function clickHandler() {
        Navigate("/about")
    }
    function backHandler() {
        Navigate(-1);
    }
    return (
        <div>
            <div>
            This is labs page
            </div>
            <button onClick={clickHandler}>Move to about page</button>
            <button onClick={backHandler}>Go Back</button>
        </div>
        
    )
}

export default Labs