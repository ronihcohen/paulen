export const onSearch = (searchVal) => {
    return {
        type: 'FILTER_RESTAURANTS',
        searchVal: searchVal
    };
};

export const onSortBy = (columnName) => {
    return {
        type: 'SORT_RESTAURANTS',
        columnName: columnName
    };
};

