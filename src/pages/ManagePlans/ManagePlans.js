import React from 'react';
import useAuth from '../../hooks/useAuth';
import usePlans from '../../hooks/usePlans';
import usePurchasePlan from '../../hooks/usePurchasePlan';
import ManagePlan from './ManagePlan/ManagePlan';

const ManagePlans = () => {

    const [purchasePlans] = usePurchasePlan();

    return (
        <div className="bg-gray-100 pb-10 min-h-screen">
            <div className="shadow-2xl bg-white p-5 mt-10 mx-2 lg:inline-block">
                <h1 className="text-5xl px-2 lg:px-auto pb-5">Manage Plans</h1>
                <hr />
                {purchasePlans.map(purchasePlan => <ManagePlan key={purchasePlan._id} purchasePlan={purchasePlan}></ManagePlan>)}
            </div>
        </div>
    );
};

export default ManagePlans;