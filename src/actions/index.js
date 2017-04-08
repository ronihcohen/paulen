export const onSearch = (searchVal) => {
    return {
        type: 'FILTER_RESTAURANTS',
        searchVal: searchVal
    };
};