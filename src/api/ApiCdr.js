import React , { useState, useEffect } from 'react';

const ApiCdr = () => {
    const [startDate, setStartDate] = useState(new Date().toLocaleDateString());
    const [endtDate, setEndtDate] = useState(new Date().toLocaleDateString());
    console.log(startDate);

    useEffect(() => {
        console.log('hola')        
    }, []);
    
    return (
        <div>
            
        </div>
    );
};

export default ApiCdr;
