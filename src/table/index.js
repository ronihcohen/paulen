import React from 'react';

export const TableHeader = ({ sorting, onSortBy, columnName, title, optional }) => {
    return (
        <th onClick={() => onSortBy([columnName, !sorting[1]])}
            className={
                optional ? 'optionalColumn' : null
            }>
            {title}
            {sorting[0] === columnName?
            <span>
                {sorting[1] ? <i className="fa fa-caret-down fa-fw"></i> :
                              <i className="fa fa-caret-up fa-fw"></i> }
            </span> : null }
        </th>
    )
};