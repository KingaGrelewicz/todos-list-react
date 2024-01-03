import Input from "../../Input";
import { Wrapper } from "../../Input/styled";
import searchQueryParamName from "../../TaskPage/searchQueryParamName";
import { useQueryParameters, useReplaceQueryParameter } from "../queryParameters";

export default () => {
    const query = useQueryParameters(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();


    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};