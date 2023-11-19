import styled from "styled-components";

import {Add, Remove} from "@mui/icons-material";
import {mobile} from "../responsive";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {productService} from "../services";
import {cartActions} from "../redux";
import {useDispatch} from "react-redux";

const Container = styled.div`

`

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({padding: "10px", flexDirection: "column"})}
`
const ImgContainer = styled.div`
  flex: 1;
`
const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height: '40vh'})}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({padding: '10px'})}
`
const Tittle = styled.h1`
  font-weight: 200;
`
const Desc = styled.p`
  margin: 20px 0;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({width: '100%', margin: '15px 0'})}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  border: 1px solid lightblue;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;

`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  outline: none;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width: '100%'})}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const SingleProductPage = () => {
    const {id} = useParams()   
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('');
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const getProductById = async (id) => {
            try {
                const {data} = await productService.getProductById(id)
                setProduct(data)
            } catch (e) {
                console.log(e)
            }
        }
        getProductById(id)
    }, [id])

    const handleQuantity = (type) => {
        if (type === "dec" && quantity > 1) setQuantity(quantity - 1)
        if (type === "inc") setQuantity(quantity + 1)
    }

    const handleClick = () => {
        dispatch(
            cartActions.addProduct({...product, quantity, color, size})
        )
    }

    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Img src={product.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Tittle>{product.title}</Tittle>
                    <Desc>{product.desc}</Desc>
                    <Price>{product.price} $</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color && product.color.map(color =>
                                <FilterColor color={color} key={color} onClick={() => setColor(color)}/>
                            )}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product.size && product.size.map((s) =>
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                )}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button onClick={() => handleClick()}>
                            ADD TO CART
                        </Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>            
        </Container>
    )
};

export {SingleProductPage}
