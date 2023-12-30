import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Detail() {
    const navigate = useNavigate();
    const params = useParams();
    console.log('params', params);

    return (
        <div>
            <button
                onClick={() => {
                    navigate('/');
                }}
            >
                Home
            </button>
        </div>
    );
}

export default Detail;
