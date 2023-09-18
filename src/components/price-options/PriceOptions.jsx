import { useEffect, useState } from "react";
import PriceOption from "../price-option/PriceOption";

 
const PriceOptions = () => {
    const [options, setOptions] = useState([]);
    useEffect(() => {
         (async() => {
            const res = await fetch('data.json');
            const data = await res.json()
            setOptions(data)

         })()
    },[])
    return (
        <div className="flex justify-center gap-8 mt-8">
            {
                options.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>

    );
};

export default PriceOptions;