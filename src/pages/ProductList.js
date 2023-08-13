import styled from "styled-components";
import {Navbar, Announcement, Products, Newsletter, Footer} from "../components";
import {mobile} from "../responsive";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import {useState} from "react";


const Container = styled.div``

const Tittle = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({margin: " 0"})}
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({margin: "10px", display: 'flex', flexDirection: "column"})}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  outline: none;
  cursor: pointer;
  ${mobile({margin: "10px 0"})}
`

const Option = styled.option`
  cursor: pointer;
`

const ProductList = () => {
    const location = useLocation()
    const cat = location.pathname.split('/')[2]

    const [sort, setSort] = useState('newest');
    const [filters, setFilters] = useState({});

    const handleFilters = (e) => {
        e.preventDefault()
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Tittle>{cat}</Tittle>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select onChange={handleFilters} name={'color'}>
                        <Option disabled>
                            Color
                        </Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select onChange={handleFilters} name={'size'}>
                        <Option disabled>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value={'newest'}>Newest</Option>
                        <Option value={'asc'}>Price (asc)</Option>
                        <Option value={'desc'}>Price (desc)</Option>
                    </Select>
                </Filter>

            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
};

export {ProductList}
