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
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    console.log(filteredProducts)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const {data} = await productsService.getAllProducts(cat)
                setProducts(data)
            } catch (e) {

            }
        }
        getProducts()
    }, [cat])

    useEffect(() => {
        // console.log(Object.entries(filters)) // поверне з {size:"XL"} =====>["size", "XL"]
        // .every() - перевірить кожен елемент згідно умови яку ми закладемо у функцію
        // ([key, value]) => item[key].includes(value)) тобто ["size", "XL"] => products.size.includes("XL"))

        cat &&
        setFilteredProducts(products.filter((item) => Object.entries(filters)
            .every(([key, value]) => item[key].includes(value))))
    }, [products, cat, filters])

    useEffect(() => {

        if (sort === "newest") {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt))
        } else if (sort === "asc") {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
        } else {
            setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
        }

    }, [sort])

    return (<Container>
        {
            cat ? filteredProducts.map(item => <Product item={item} key={item._id}/>)
                : products.slice(0, 8).map(item => <Product item={item} key={item._id}/>)
        }
    </Container>)
};

export {Products}
