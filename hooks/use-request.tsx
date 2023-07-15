import { useState } from 'react';
import axios, { Method } from 'axios';

interface RequestProps {
    url: string;
    method: Method;
    body?: any;
    onSuccess?: (data: any) => void;
}

const useRequest = ({ url, method, body, onSuccess }: RequestProps) => {
    const [errors, setErrors] = useState<JSX.Element | null | undefined>(null);

    const doRequest = async (props: any = {}) => {
        try {
            setErrors(null);
            const response = await axios[method](url, { ...body, ...props });

            if (onSuccess) {
                onSuccess(response.data);
            }

            console.log(response.data)
            return response.data;
        } catch (err) {
            setErrors(() => {
                if (err instanceof Error) {
                    return <h4>{err.message}</h4>
                } else {
                    console.log('Unexpected error', err);
                }
            }
            );
        }
    };

    return { doRequest, errors };
};

export default useRequest;