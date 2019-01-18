/*
 * @Author: Nate
 * @Date:   2019-01-14 12:03:52
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-14 12:04:03
 */
import UpdateItem from "../components/UpdateItem";

const Sell = ({ query }) => (
  <div>
    <UpdateItem id={query.id} />
  </div>
);

export default Sell;
