/*
 * @Author: Nate
 * @Date:   2019-01-11 14:11:03
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-11 14:28:51
 */
import Nav from "./Nav";

const Header = () => (
  <div>
    <div className="bar">
      <a href="">Sick Fits</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
