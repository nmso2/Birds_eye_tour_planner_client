import usePlans from '../../../hooks/usePlans';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const ManagePlan = (props) => {
    const { plan_id, name, phone, confirmed, city, district, _id } = props.purchasePlan;
    const {handleCancelPlan} = props;
    const [plans] = usePlans();


    return (
        <div>
            {plans.filter(plan => plan_id === plan._id).map(purchasedPlan => <div>
                <div className="lg:flex items-baseline justify-end">
                    <p className="lg:text-3xl lg:px-5">{purchasedPlan.name}</p>
                    <p className="lg:text-lg px-5">{purchasedPlan.cost} &#2547;</p>
                    {
                        !confirmed && <button className="border hidden border-blue-500 text-blue-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline lg:block">Confirm Plan</button>
                    }
                    <button className="border hidden border-red-500 text-red-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline lg:block" onClick={() => handleCancelPlan(_id)}>Calcel Plan</button>
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
                                <p>Name: {name}</p>
                                <p>Phone: {phone}</p>
                                <p>Address: {city}, {district}</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <button className="border border-blue-500 text-blue-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline lg:hidden">Confirm Plan</button>
                <button className="border border-red-500 text-red-500 rounded-md px-5 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline lg:hidden" onClick={() => handleCancelPlan(_id)}>Calcel Plan</button>
            </div>)}
            <hr />
        </div>
    );
};

export default ManagePlan;