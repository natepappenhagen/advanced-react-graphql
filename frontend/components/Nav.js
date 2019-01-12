/*
 * @Author: Nate
 * @Date:   2019-01-11 14:12:12
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-12 12:18:35
 */
import Link from "next/link";
import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <NavStyles>
    <Link href="/items">
      <a>Items</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/signup">
      <a>Signup</a>
    </Link>
    <Link href="/orders">
      <a>Orders</a>
    </Link>
    <Link href="/me">
      <a>Account</a>
    </Link>
  </NavStyles>
);

export default Nav;
