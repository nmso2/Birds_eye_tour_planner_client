import { useEffect, useState } from "react";


const usePlan = (id) => {
    const [plan, setPlan] = useState({});

    useEffect(() => {
        fetch(`https://birds-eye-tour.herokuapp.com/tourPlans/${id}`)
            .then(res => res.json())
            .then(data => setPlan(data));
        // eslint-disable-next-line
    }, []);

    return [plan, setPlan]
};

export default usePlan;