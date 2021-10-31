import React from 'react';
import usePlans from '../../../hooks/usePlans';
import Banner from '../Banner/Banner';
import CounterItem from '../CounterItem/CounterItem';
import Plans from '../Plans/Plans';

const Home = () => {
    const [plans] = usePlans();
    return (
        <div>
            <Banner></Banner>
            <div className="container mb-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        plans.map(plan => <Plans key={plan._id} plan={plan}></Plans>)
                    }
                </div>
            </div>
            <CounterItem></CounterItem>
        </div>
    );
};

export default Home;