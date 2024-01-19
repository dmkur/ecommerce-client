import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile, medium, tablet } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  position: relative;
  overflow: hidden;
  ${tablet({ height: "70vh" })};
  ${mobile({ height: "50vh" })};
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideindex * -100}vw);
  transition: all 0.6s ease;
`;

const Image = styled.img`
  height: 70%;
  width: 80%;
  flex: 1;
  ${tablet({ flex: "2" })};
`;

const ImgContainer = styled.div`
  flex: 1;
  ${tablet({ flex: "0.9" })};
  ${mobile({ display: "none " })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${tablet({ flex: "0.5", padding: "20px" })};
  ${medium({ flex: "0", padding: "10px" })};
  ${mobile({ flex: "1", padding: "15px", textAlign: "center" })};
`;
const Tittle = styled.h1`
  font-size: 70px;
  ${tablet({ fontSize: "50px" })};
  ${medium({ fontSize: "30px" })};
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;

  ${tablet({ fontSize: "15px", margin: "30px 0" })};
  ${medium({ margin: "20px 0" })};
  ${mobile({ margin: "20px 20px" })};
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #fcf5f5;
  border: 1px solid #b0b0b0;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
  user-select: none;
  ${tablet({
    bottom: "5%",
    left: "35%",
    top: "auto",
  })}
  ${mobile({
    width: "30px",
    height: "30px",
    bottom: "15%",
    left: "35%",
    top: "auto",
  })}
`;
const Arrow2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #fcf5f5;
  border: 1px solid #b0b0b0;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;

  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
  user-select: none;
  ${tablet({
    bottom: "5%",
    right: "35%",
    top: "auto",
  })}
  ${mobile({
    width: "30px",
    height: "30px",
    bottom: "15%",
    right: "35%",
    top: "auto",
  })}
`;
const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${tablet({ height: "70vh" })};
  ${mobile({ height: "50vh" })};
`;

const Slider = () => {
  const [slideindex, setslideindex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setslideindex(slideindex > 0 ? slideindex - 1 : sliderItems.length - 1);
    } else {
      setslideindex(slideindex < sliderItems.length - 1 ? slideindex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideindex={slideindex}>
        {sliderItems.map((item) => (
          <Slide bg={`${item.bg}`} key={item.id}>
            <ImgContainer>
              <Image src={item.img} alt="logo" />
            </ImgContainer>
            <InfoContainer>
              <Tittle>{item.title}</Tittle>
              <Desc>{item.desc}</Desc>
              <Link to={`products/${item.cat}`}>
                <Button>SHOP NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow2 direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow2>
    </Container>
  );
};

export { Slider };
