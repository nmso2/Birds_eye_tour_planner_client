import usePurchasePlans from "./usePurchasePlans";


const useCancelPlan = () => {

    const [purchasePlans, setPurchasePlans] = usePurchasePlans();

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
    return [purchasePlans, handleCancelPlan];
};

export default useCancelPlan;


