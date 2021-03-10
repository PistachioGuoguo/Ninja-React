// custom hook start with 'use'
import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const abortCont = new AbortController();

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {
            fetch(url, {signal:abortCont.signal}) // abort controller
                .then(res => {
                    if (!res.ok){
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch( e =>{
                    if(e.name === "AbortError"){ // if aborted, no state to update
                        console.log('fetch aborted')
                    }else{
                        setIsPending(false); // suppress loading message
                        setError(e.message);
                    }

                })
        }, 200);

        return () => abortCont.abort();

    }, [url]); // useEffect and dependency array

    return { data, isPending ,error}
}

export default useFetch;