import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameters = () => {
    const location = useLocation();
    return new URLSearchParams(location.search).get;
}

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return (key, value) => {
        const searchParams = new URLSearchParams(location.search);
        if (value !== undefined && value !== "") {
            searchParams.set(key, value);
        } else {
            searchParams.delete(key);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    }
};