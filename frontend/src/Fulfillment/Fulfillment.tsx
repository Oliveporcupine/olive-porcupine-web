import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function fulfillment(){
    
    return(
        <div className="content contents-margined">
            <div className="fulfillment-header">
                <h3>Fulfillment</h3>
            </div>
            <div className='fulfillment-list'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>STATUS</th>
                            <th>ADDRESS</th>
                            <th>USER</th>
                            <th>DELIVERED DATE EXPECTED</th>
                            <th>DATE RECIEVED</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.fulfillment.map((fulfillment)=>(
                        <tr key={fulfillment._id}>
                        <td>{fulfillment._id}</td>
                        {fulfillment.status === 'unshipped' ? (
                        <td>
                            <div className='status-unshipped'>
                                {fulfillment.status.toString()}
                            </div>
                        </td>
                        ) : (
                        <td>
                            <div className='status-shipped'>
                                {fulfillment.status.toString()}
                            </div>
                        </td>
                        )}
                            <td>{fulfillment.address}</td>
                            <td>{fulfillment.user.name}</td>
                            <td>{fulfillment.deliveredDateExpected}</td>
                            <td>{fulfillment.dateRecieved}</td>
                        </tr>
                       )) }
                    </tbody>
                </table>
            </div>

        </div>
    );

};

export default fulfillment;