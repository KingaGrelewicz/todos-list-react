import Input from "../../Input";
import { Wrapper } from "../../Input/styled";
import searchQueryParamName from "../../TaskPage/searchQueryParamName";
import { useQueryParameters, useReplaceQueryParameter } from "../queryParameters";

const SearchComponent: React.FC = () => {
    const query = useQueryParameters(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();


    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: event.target.value !== "" ? event.target.value : undefined,
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

export default SearchComponent;