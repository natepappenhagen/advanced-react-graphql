/*
 * @Author: Nate
 * @Date:   2019-01-11 14:12:12
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-11 14:28:52
 */
import Link from "next/link";

const Nav = () => (
  <div>
    <Link href="/sell">
      <a>Sell!</a>
    </Link>
    <Link href="/">
      <a>Home!</a>
    </Link>
  </div>
);

export default Nav;
