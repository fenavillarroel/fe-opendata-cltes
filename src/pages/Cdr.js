import React from 'react';
import GetCdr from './GetCdr';

const Cdr = ( {token} ) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                    </div>
                    <div className="col-6">
                        <GetCdr token={token}/>
                    </div>
                    <div className="col-2">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cdr;