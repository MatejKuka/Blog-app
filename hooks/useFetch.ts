import {useEffect, useState} from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<Error | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const resposne = await fetch(url);
                const json = await resposne.json();
                setData(json.data);
                setIsLoading(false);
            } catch (er) {
                setError(er);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url])

    return {isLoading, data, error};
}

export default useFetch;