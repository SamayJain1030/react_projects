//what we are doing here?
//here we are creating a custom webhook for triggering change when user select a currency from the list of currencies.
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {        //whoever will use this hook he has to provide the type currency from which it wants the info.
    const [data, setData] = useState({})    //why we put curly brace instead of square ? bcoz the data that we trying to fetch from the open source currency api is in object form
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res1) => res1.json())   //resolve the promise first time to get data in json 
        .then((res2) => setData(res2[currency])) //then set that json data to 'setData' and from that setData we can access different keys from the object that we fetched.
    }, [currency])
    console.log(data)
    return data       ///here we are returning the "data" that we have passed in the useState hook unpacking.
}

export default useCurrencyInfo;