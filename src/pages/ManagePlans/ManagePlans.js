import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import usePlans from '../../hooks/usePlans';
import usePurchasePlan from '../../hooks/usePurchasePlan';
import ManagePlan from './ManagePlan/ManagePlan';

const ManagePlans = () => {

    const [purchasePlans, setPurchasePlans] = useState([]);
    
    useEffect(() => {
        fetch('https://birds-eye-tour.herokuapp.com/purchasePlan')
            .then(res => res.json())
            .then(data => setPurchasePlans(data))
    }, [])

    // Delete a Plan
    const handleCancelPlan = id => {
        const proceed = window.confirm('Are you sure, you want to cancel?')
        if (proceed) {
            const url = `https://birds-eye-tour.herokuapp.com/purchasePlan/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Canceled the Plan!');
                        const remainingPlans = purchasePlans.filter(purchasePlan => purchasePlan._id !== id);
                        setPurchasePlans(remainingPlans);
                    }
                })
        }
    }

    return (
        <div className="bg-gray-100 pb-10 min-h-screen">
            <div className="shadow-2xl bg-white p-5 mt-10 mx-2 lg:inline-block">
                <h1 className="text-5xl px-2 lg:px-auto pb-5">Manage Plans</h1>
                <hr />
                {purchasePlans.map(purchasePlan => <ManagePlan key={purchasePlan._id} purchasePlan={purchasePlan} handleCancelPlan={handleCancelPlan}></ManagePlan>)}
            </div>
        </div>
    );
};

export default ManagePlans;