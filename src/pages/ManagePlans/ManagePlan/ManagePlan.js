import usePlans from '../../../hooks/usePlans';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { useState } from 'react';

const ManagePlan = (props) => {
    const { handleCancelPlan } = props;
    const [plans ] = usePlans();
    const [purchasePlan] = useState(props.purchasePlan);

    //-------------------------------------
    const handleUpdateUser = e => {
        purchasePlan.confirmed = true;
        const url = `https://birds-eye-tour.herokuapp.com/purchasePlan/${purchasePlan._id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(props.purchasePlan)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully!');
                    window.location.reload();
                }
            })
        e.preventDefault()
    }
    //-------------------------------------

    return (
        <div>
            {plans.filter(plan => purchasePlan.plan_id === plan._id).map(purchasedPlan => <div>
                <div className="lg:flex items-baseline justify-end">
                    <p className="lg:text-3xl lg:px-5">{purchasedPlan.name}</p>
                    <p className="lg:text-lg px-5">{purchasedPlan.cost} &#2547;</p>
                    {
                        !purchasePlan.confirmed && <button className="border hidden border-blue-500 text-blue-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline lg:block" onClick={handleUpdateUser}>Confirm Plan</button>
                    }
                    <button className="border hidden border-red-500 text-red-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline lg:block" onClick={() => handleCancelPlan(purchasePlan._id)}>Calcel Plan</button>
                </div>
                <Accordion allowZeroExpanded className="py-2">
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Order Details
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="flex flex-col items-stretch">
                                <p>Name: {purchasePlan.name}</p>
                                <p>Phone: {purchasePlan.phone}</p>
                                <p>Address: {purchasePlan.city}, {purchasePlan.district}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                {
                        !purchasePlan.confirmed && <button className="border border-blue-500 text-blue-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline lg:hidden" onClick={handleUpdateUser}>Confirm Plan</button>
                    }
                <button className="border border-red-500 text-red-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline lg:hidden" onClick={() => handleCancelPlan(purchasePlan._id)}>Calcel Plan</button>
            </div>)}
            <hr />
        </div>
    );
};

export default ManagePlan;