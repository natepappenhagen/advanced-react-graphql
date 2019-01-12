/*
 * @Author: Nate
 * @Date:   2019-01-11 14:11:03
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-11 14:30:24
 */
import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
