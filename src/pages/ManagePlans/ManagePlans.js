import useCancelPlan from '../../hooks/useCancelPlan';
import ManagePlan from './ManagePlan/ManagePlan';

const ManagePlans = () => {

    const [purchasePlans, handleCancelPlan] = useCancelPlan();

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