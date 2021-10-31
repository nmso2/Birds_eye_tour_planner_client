import React from 'react';
import usePlans from '../../../hooks/usePlans';

const MyPlan = (props) => {
    const { planId, handleCancelPlan , id, confirmed} = props;
    const [plans] = usePlans();
    return (
        <div>
            {plans.filter(plan => planId === plan._id).map(purchasePlan => <div className="lg:flex items-baseline justify-end">
                <p className="lg:text-3xl lg:px-5">{purchasePlan.name}</p>
                <p className="lg:text-lg px-5">{purchasePlan.cost} &#2547;</p>
                {confirmed ? <p className="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">Confirmed</p> : <p className="p-2 pl-5 pr-5 bg-yellow-500 text-gray-100 text-lg rounded-lg focus:border-4 border-yellow-300">Pending</p>
                    }
                <button className="border border-red-500 text-red-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={() => handleCancelPlan(id)}>Calcel Plan</button>
            </div>)}
            <hr />
        </div>

    );
};

export default MyPlan;