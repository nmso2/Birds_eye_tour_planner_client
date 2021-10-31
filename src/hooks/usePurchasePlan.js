import { useEffect, useState } from "react";


const usePurchasePlan = (id) => {
    const [purchasePlan, setPurchasePlan] = useState([]);

    useEffect(() => {
        fetch(`https://birds-eye-tour.herokuapp.com/purchasePlan/${id}`)
            .then(res => res.json())
            .then(data => setPurchasePlan(data));
    }, []);

    return [purchasePlan, setPurchasePlan]
};

export default usePurchasePlan;