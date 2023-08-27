import styled from "styled-components";
import {Search} from "@mui/icons-material";
import {Badge} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const Container = styled.div`
  height: 60px;
  ${mobile({height: '50px'})}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: '10px 0px'})}
`
const Left = styled.div`
  // ділить блок Wrapper на рівні частини
  // якщо вказати 2 то цей блок буде у 2чі більший за інші
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: 'none'})}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  cursor: pointer;

`
const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({width: '50px'})}

`

const Center = styled.div`
  flex: 1;
  text-align: center;

`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: '24px'})}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2, justifyContent: 'center'})}

`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: '12px', marginLeft: '10px'})}
`


const Navbar = () => {
    const {cartQuantity} = useSelector(store => store.cartReducer)

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder={'search'}/>
                        <Search style={{color: 'grey', fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to={'/'}><Logo>DM.</Logo></Link>
                </Center>
                <Right>

                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGHT IN</MenuItem>
                    <Link to={"/cart"}>
                        <MenuItem>
                            <Badge badgeContent={cartQuantity} color="primary">
                                <ShoppingCartOutlinedIcon/>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
};

export {Navbar}
