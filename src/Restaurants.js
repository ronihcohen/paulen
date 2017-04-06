import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';


function compare(a, b) {
    a.paulenScore = a.paulenScore || 0;
    b.paulenScore = b.paulenScore || 0;
    if (a.paulenScore > b.paulenScore)
        return -1;
    if (a.paulenScore < b.paulenScore)
        return 1;
    return 0;
}


const Restaurants = ({restaurants, searchVal, onStarClick, onSearch}) => {

    const fiteredRestaurants = restaurants.filter(restaurant => {
        return !searchVal || restaurant.name.includes(searchVal);
    }).sort(compare);

    const handleStarClick = function (nextValue, prevValue, id) {
        onStarClick({
            id: id,
            score: nextValue
        });
    };

    return (
        <div>
            <TextField
                hintText="Search"
                fullWidth={true}
                onChange={onSearch}
            />
            <Table selectable={false}>
                <TableHeader displaySelectAll={false}
                             adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Paulen Score</TableHeaderColumn>
                        <TableHeaderColumn className="optionalColumn">Critics Score</TableHeaderColumn>
                        <TableHeaderColumn className="optionalColumn">Details</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {fiteredRestaurants.map((restaurant) => (
                        <TableRow key={restaurant.id}>
                            <TableRowColumn>{restaurant.name}</TableRowColumn>
                            <TableRowColumn>
                                <StarRatingComponent
                                    name={"" + restaurant.id}
                                    starCount={5}
                                    value={restaurant.paulenScore}
                                    onStarClick={handleStarClick}
                                />
                            </TableRowColumn>
                            <TableRowColumn className="optionalColumn">{restaurant.score}</TableRowColumn>
                            <TableRowColumn className="optionalColumn">
                                {restaurant.address}
                                <br/>
                                {restaurant.tel}
                            </TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};


export default Restaurants;
