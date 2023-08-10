import {popularProducts} from "../data";
import styled from "styled-components";
import {Product} from "./Product";
import {useEffect, useState} from "react";
import {productsService} from "../services";


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({sort, cat, filters}) => {
        const [products,setProducts] = useState([]);
        const [filteredProducts,setFilteredProducts] = useState([]);

        useEffect(() => {
            const getProducts = async () => {
                try{
                  const a=  await productsService.getAllProducts()
                    console.log(a)
                } catch (e) {

                }
            }
            getProducts()
        },[cat])

    return (
        <Container>
            {popularProducts.map(item =>
                <Product item={item} key={item.id}/>
            )}
        </Container>
    )
};

export {Products}
