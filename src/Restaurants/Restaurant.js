import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Restaurant = ({restaurant, count, onStarClick, user}) => {

    const handleStarClick = function (nextValue, prevValue, id) {
        let score = nextValue;
        onStarClick({
            id: id,
            score: score,
            uid: user.uid
        });
    };

    return (
        <tr key={restaurant.id}>
            <td>{count}. {restaurant.name}</td>
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
    )
};

export default Restaurant