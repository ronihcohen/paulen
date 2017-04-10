import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import { orderBy } from 'lodash';
import { TableHeader } from './table'
import headers from './table/headers.json'


const Restaurants = ({restaurants, searchVal, user, sorting, onStarClick, onSearch, onSortBy, signOut}) => {

    let fiteredRestaurants = restaurants.filter(restaurant => {
        return !searchVal || restaurant.name.includes(searchVal);
    });

    if (sorting[0]) {
        fiteredRestaurants = orderBy(fiteredRestaurants,
            [( o ) => { return o[sorting[0]] || ''}], [sorting[1]?'asc':'desc']);
    }

    const handleStarClick = function (nextValue, prevValue, id) {
        let score = nextValue;
        onStarClick({
            id: id,
            score: score,
            uid: user.uid
        });
    };

    let count = 1;

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
                    {fiteredRestaurants.map((restaurant) => (
                        <tr key={restaurant.id}>
                            <td>{count++}. {restaurant.name}</td>
                            <td className="stars">
                                <StarRatingComponent
                                    name={"" + restaurant.id}
                                    value={restaurant.paulenScore}
                                    onStarClick={handleStarClick}
                                />
                            </td>
                            <td className="optionalColumn">
                                {restaurant.address}
                                <br/>
                                {restaurant.tel}
                            </td>
                            <td className="optionalColumn">
                                {restaurant.score}
                            </td>
                        </tr>
                    ))}
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
