import styled from "styled-components";
import {mobile} from "../responsive";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../redux";
import {useNavigate} from "react-router";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)),
  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "80%"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const ERROR = styled.span`
  color: red;
`

const MenuItem = styled.div``

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const {currentUser,error, isFetching} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) navigate('/')
    }, [currentUser])


    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(authActions.login({username, password}))
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="password" type={"password"} onChange={(e) => setPassword(e.target.value)}/>
                    <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
                    {error && <ERROR>Something went wrong....</ERROR>}
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                    <Link to={"https://dmkur.github.io/react-admin-panel"}>
                      <MenuItem>FOR ADMINS</MenuItem>
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    )
};

export {
    LoginPage
}
