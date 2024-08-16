import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameters = (target: string): string | null => {
    const location = useLocation();
    return new URLSearchParams(location.search).get(target);
}

interface ReplaceQueryParameterParams {
    key: string;
    value?: string;
  }
export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return ({ key, value }: ReplaceQueryParameterParams) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    }
};