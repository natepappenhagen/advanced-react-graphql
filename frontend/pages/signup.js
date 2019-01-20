/*
 * @Author: Nate
 * @Date:   2019-01-20 14:06:13
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-20 14:06:21
 */
import Signup from "../components/Signup";
import styled from "styled-components";

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const SignupPage = props => (
  <Columns>
    <Signup />
    <Signup />
    <Signup />
  </Columns>
);

export default SignupPage;
