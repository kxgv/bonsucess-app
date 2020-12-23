import React from 'react';

export default function Filter() {
   

    return (
        <div className="row center">
            <div className="col-md-4">
                <h1>Filter</h1>
            </div>
            <div className="col-md-4">
                <label>
                    Order by
                    <select className="form-control">
                        <option value="">
                            Default
                        </option>
                        <option value="">
                            Lowest to Highest 
                        </option>
                        <option value="">
                            Highest to Low 
                        </option>
                    </select>
                </label>

            </div>
        </div>
    );
}