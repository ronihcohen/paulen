import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import TextField from 'material-ui/TextField';

const Restaurants = ({restaurants, searchVal, onStarClick, onSearch}) => {

    const fiteredRestaurants = restaurants.filter(restaurant => {
        return !searchVal || restaurant.name.includes(searchVal);
    });

    const handleStarClick = function (nextValue, prevValue, id) {
        let score = nextValue;
        if (nextValue === prevValue) {
            score = 0;
        }
        onStarClick({
            id: id,
            score: score
        });
    };

    return (
        <div>
            <TextField
                hintText="חיפוש"
                fullWidth={true}
                onChange={onSearch}
            />
            <table>
                <tbody>
                    {fiteredRestaurants.map((restaurant) => (
                        <tr key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default Restaurants;
