/*
 * @Author: Nate
 * @Date:   2019-01-11 14:37:49
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-18 13:02:58
 */

import Items from "../components/Items";

const Home = props => (
  <div>
    <Items page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Home;
