import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Tittle = styled.h1`
  color:white;
  margin-bottom: 20px;
  ${tablet({ textAlign: "center", marginBottom: "10px" })} })};
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Tittle>{item.title}</Tittle>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export { CategoryItem };
