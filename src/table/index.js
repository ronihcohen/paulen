import React from 'react';

export const TableHeader = ({ columnName, title, sorting, onSortBy }) => {
    return (
        <th onClick={() => onSortBy([columnName, !sorting[1]])}>
            {title}
            <span>
                {sorting[0] === columnName && sorting[1] ? ' ￪ ' : ''}
                {sorting[0] === columnName && !sorting[1] ? ' ￬ ' : ''}
            </span>
        </th>
    )
};