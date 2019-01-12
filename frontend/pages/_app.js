/*
 * @Author: Nate
 * @Date:   2019-01-11 14:35:15
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-11 14:39:42
 */
import App, { Container } from "next/app";
import Page from "../components/Page";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
