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
        <tr key={restaurant.id} className="restaurant">
            <td>{count}.
                <a href={"https://www.google.co.il/#q="+restaurant.name}
                   target="_blank"
                   style={{color: "black"}}
                > {restaurant.name} </a></td>
            {user?<td className="stars">
                <StarRatingComponent
                    name={"" + restaurant.id}
                    value={restaurant.paulenScore}
                    onStarClick={handleStarClick}
                />
            </td>:null}
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