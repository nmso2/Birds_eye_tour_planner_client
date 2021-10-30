import React from 'react';
import usePlans from '../../../hooks/usePlans';

const MyPlan = (props) => {
    const { planId } = props;
    const [plans] = usePlans();
    return (
        <div>
            {plans.filter(plan => planId === plan._id).map(purchasePlan => <div className="flex items-baseline justify-end">
                <p className="lg:text-3xl lg:px-5">{purchasePlan.name}</p>
                <p className="lg:text-lg px-5">{purchasePlan.cost} &#2547;</p>
                <button className="border border-red-500 text-red-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline">Calcel Plan</button>
            </div>)}
            <hr />
        </div>

    );
};

export default MyPlan;