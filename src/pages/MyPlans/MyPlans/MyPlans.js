import React from 'react';
import useAuth from '../../../hooks/useAuth';
import usePurchasePlan from '../../../hooks/usePurchasePlan';
import MyPlan from '../MyPlan/MyPlan';

const MyPlans = () => {
    const { user } = useAuth();
    const [purchasePlans] = usePurchasePlan();
    return (
        <div className="bg-gray-100 pt-1 min-h-screen">
            <div className="shadow-2xl bg-white p-5 mt-10 mx-2 lg:inline-block">
                <h1 className="text-5xl px-2 lg:px-auto pb-5">Your Plans</h1>
                <hr />
                {purchasePlans.filter(plan => user?.email === plan.email).map(purchasePlan => <MyPlan key={purchasePlan._id} planId={purchasePlan.plan_id}></MyPlan>)}
            </div>
        </div>
    );
};

export default MyPlans;