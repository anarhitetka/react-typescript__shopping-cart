import { useEffect, useState } from "react";

export type TypeApiResponse = {
    status: Number;
    statusText: String;
    data: any;
    error: any;
    loading: Boolean;
};

export const useApiGet = (url: string): TypeApiResponse => {
    const [status, setStatus] = useState<Number>(0);
    const [statusText, setStatusText] = useState<String>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<Boolean>(false);

    const getApiData = async () => {
        setLoading(true);
        try {
            const apiResponse = await fetch(url);
            const json = await apiResponse.json();
            setStatus(apiResponse.status);
            setStatusText(apiResponse.statusText);
            setData(json);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getApiData();
    }, []);

    return {status, statusText, data, error, loading};
};
