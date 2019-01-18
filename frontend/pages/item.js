/*
 * @Author: Nate
 * @Date:   2019-01-16 12:40:07
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-16 12:40:48
 */
import SingleItem from "../components/SingleItem";

const Item = props => (
  <div>
    <SingleItem id={props.query.id} />
  </div>
);

export default Item;
