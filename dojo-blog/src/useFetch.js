// custom hook start with 'use'
import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
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
                    setIsPending(false); // suppress loading message
                    setError(e.message);
                })
        }, 1000);

    }, [url]); // useEffect and dependency array

    return { data, isPending ,error}
}

export default useFetch;