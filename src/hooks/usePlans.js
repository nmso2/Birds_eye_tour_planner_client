import { useEffect, useState } from "react";


const usePlans = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fetch('https://birds-eye-tour.herokuapp.com/tourPlans')
            .then(res => res.json())
            .then(data => setPlans(data));
    }, []);

    return [plans, setPlans]
};

export default usePlans;