import { useEffect, useState } from "react";


const useServices = () => {
    const [services, SetServices] = useState([]);

    useEffect(() => {
        fetch('https://nmso2.github.io/fake-data-json/data/medical-services.json')
            .then(res => res.json())
            .then(data => SetServices(data));
    }, []);

    return [services, SetServices]
};

export default useServices;