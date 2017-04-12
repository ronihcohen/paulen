import React from 'react';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import { orderBy } from 'lodash';
import { TableHeader } from '../table'
import headers from './headers.json'
import Restaurant from './Restaurant'


const Restaurants = ({restaurants, searchVal, user, sorting,
    onStarClick, onSearch, onSortBy, signOut, loginWithGoogle, loginWithFacebook}) => {

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
                <div className="authLine">
                     <a href="" onClick={signOut}>{user.name}</a>
                </div>
            )
        } else {
            return (
                <div className="authLine">
                    בכדי לדרג עלייך להתחבר בעזרת &nbsp;
                    <a href="" onClick={loginWithGoogle} className="vendorLink">
                        <i className="fa fa-google fa-fw"></i> גוגל </a>
                    &nbsp; או &nbsp;
                    <a href="" onClick={loginWithFacebook} className="vendorLink">
                        <i className="fa fa-facebook-official  fa-fw"></i>  פייסבוק </a>
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
            {renderUser(user)}
            <TextField
                hintText="חיפוש"
                fullWidth={true}
                onChange={onSearch}
            />
            <table>
                <thead>
                    <tr>
                        {tableHeaderList.map((thData) => {
                                return (!user && thData.columnName === 'paulenScore') ? null :
                                    <TableHeader {...thData}
                                                 key={thData.columnName}
                                    >
                                    </TableHeader>
                            }
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
                            ></Restaurant>
                        ]
                    }
                    )}
                </tbody>
            </table>
            {fiteredRestaurants.length > 0?'':<h4>לא נמצאו מסעדות</h4>}
        </div>
    );

    return (
        <div style={{textAlign: 'center'}}>
            <CircularProgress size={80} thickness={5}/>
        </div>
    )
};


export default Restaurants;
