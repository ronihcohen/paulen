import React from 'react';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import { orderBy } from 'lodash';
import { TableHeader } from '../table'
import headers from './headers.json'
import Restaurant from './Restaurant'


const Restaurants = ({restaurants, searchVal, user, sorting, onStarClick, onSearch, onSortBy, signOut}) => {

    let fiteredRestaurants = restaurants.filter(restaurant => {
        return !searchVal || restaurant.name.includes(searchVal);
    });

    if (sorting[0]) {
        fiteredRestaurants = orderBy(fiteredRestaurants,
            [( o ) => { return o[sorting[0]] || ''}], [sorting[1]?'asc':'desc']);
    }

    let count = 0;

    const renderUser = user => {
        if (user) {
            return (
                <div style={{
                        textAlign: 'left',
                        fontSize: '12px' }}>
                    Connected as <a href="" onClick={signOut}>{user.name}</a>
                </div>
            )
        }
    };

    const tableHeaderList = headers.map(header => {
        return {
            ...header,
            sorting: sorting,
            onSortBy: onSortBy
        }
    });

    if (restaurants.length > 0) return (
        <div>
            <TextField
                hintText="חיפוש"
                fullWidth={true}
                onChange={onSearch}
            />
            <table>
                <thead>
                    <tr>
                        {tableHeaderList.map((thData) =>
                            <TableHeader {...thData}
                                         key={thData.columnName}
                                         >
                            </TableHeader>
                        )}
                    </tr>
                </thead>
                <tbody>
                {fiteredRestaurants.map((restaurant) => {
                        count++;
                        return [
                            <Restaurant
                                restaurant={restaurant}
                                count={count}
                                onStarClick={onStarClick}
                                user={user}
                            ></Restaurant>,
                            <tr>
                                <td colSpan="4">
                                    <div className={'notes ' +
                                            (restaurant.paulenScore ? 'show' : '')}>
                                        <TextField
                                            hintText="הערות"
                                            fullWidth={true}
                                            multiLine={true}
                                            underlineShow={false}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ]
                    }
                    )}

                </tbody>
            </table>
            <br/>
            {renderUser(user)}
        </div>
    );

    return (
        <div style={{textAlign: 'center'}}>
            <CircularProgress size={80} thickness={5}/>
        </div>
    )
};


export default Restaurants;
