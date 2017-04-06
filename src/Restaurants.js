import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


function compare(a,b) {
  if (a.score > b.score)
    return -1;
  if (a.score < b.score)
    return 1;
  return 0;
}


const Restaurants = ({restaurants, onStarClick})  => {
  const fiteredRestaurants = restaurants.sort(compare);
  const handleStarClick = function (nextValue, prevValue, id) {
      onStarClick({
          id: id,
          score: nextValue
      });
  };

  return (
      <Table selectable={false}>
          <TableHeader displaySelectAll={false}
                       adjustForCheckbox={false}>
              <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Paulen Score</TableHeaderColumn>
                  <TableHeaderColumn>Critics Score</TableHeaderColumn>
                  <TableHeaderColumn>Details</TableHeaderColumn>
                  <TableHeaderColumn>Type</TableHeaderColumn>
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
                      <TableRowColumn>{restaurant.score}</TableRowColumn>
                      <TableRowColumn>
                        {restaurant.address}
                        <br/>
                        {restaurant.tel}
                      </TableRowColumn>
                      <TableRowColumn>{restaurant.type}</TableRowColumn>
                  </TableRow>
              ))}
          </TableBody>
      </Table>
  );
};


export default Restaurants;
