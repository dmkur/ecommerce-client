import styled from "styled-components";

import { Add, Remove, Clear } from "@mui/icons-material";
import { mobile, medium, tablet } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { stripeService } from "../services";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { constants } from "../constants";
import { cartActions } from "../redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${medium({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  ${medium({ padding: "15px 0" })}
`;

const TopButton = styled.button`
  cursor: pointer;
  padding: 10px;
  font-weight: 600;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  &:disabled {
    background-color: grey;
  }
  ${medium({ padding: "5px", fontWeight: "400" })}
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${medium({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  ${mobile({ maxWidth: "200px", minWidth: "200px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ padding: "10px" })}
`;

const ProductName = styled.span``;

const ProductId = styled.span`
  word-break: break-word;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${medium({ flex: "0" })};
  ${mobile({ flexDirection: "row", justifyContent: "space-around" })}
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 10px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "15px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const ClearDiv = styled.div`
  marginright: "20px";
  margintop: "20px";
  cursor: "pointer";
  ${mobile({ textAlign: "center" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;

  ${tablet({ height: "fit-content" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  ${medium({ fontSize: "25px" })}
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  ${tablet({ margin: "15px 0" })};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  &:disabled {
    background-color: grey;
  }
`;

const ShopingBagPage = () => {
  const { products, totalPrice } = useSelector((state) => state.cartReducer);
  console.log(products, "PRODUCTS");
  const { currentUser } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const tokenId = stripeToken.id;
        const amount = totalPrice * 100;

        const { data } = await stripeService.userRequest({ tokenId, amount });
        navigate("/orders", { state: { data, cart: products } });
      } catch (e) {
        console.log(e);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, totalPrice, navigate, products]);

  const deleteCartitem = (id) => {
    dispatch(cartActions.deleteProduct(id));
  };

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to={"/"}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled" disabled={!currentUser}>
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {products &&
              products.map((product) => (
                <Product key={product._id}>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size:</b> {product.size[0] || product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>
                      $ {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetail>
                  <ClearDiv>
                    <Clear
                      onClick={() => deleteCartitem(product._id)}
                      style={{
                        cursor: "pointer",
                        marginRight: "20px",
                        marginTop: "20px",
                      }}
                    />
                  </ClearDiv>
                </Product>
              ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="DM.SHOP"
              // image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${totalPrice}`}
              amount={totalPrice * 100}
              token={onToken}
              stripeKey={constants.STRIPE_PUBLIC_KEY}
            >
              <Button style={{ cursor: "pointer" }} disabled={!currentUser}>
                CHECKOUT NOW!
              </Button>
            </StripeCheckout>
            {!currentUser && (
              <span style={{ color: "red" }}>Please sign in for order</span>
            )}
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export { ShopingBagPage };
