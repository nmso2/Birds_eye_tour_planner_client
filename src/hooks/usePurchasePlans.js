import { useEffect, useState } from "react";


const usePurchasePlans = () => {
    const [purchasePlans, setPurchasePlans] = useState([]);

    useEffect(() => {
        fetch('https://birds-eye-tour.herokuapp.com/purchasePlan')
            .then(res => res.json())
            .then(data => setPurchasePlans(data));
    }, []);

    return [purchasePlans, setPurchasePlans]
};

export default usePurchasePlans;