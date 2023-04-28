import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";



const Title = styled.h2`
    font-size: 2rem;
    margin: 30px 0 20px;
    font-weight: 400;
`;

export default function NewProducts({ products }) {
  return (
    <Center>
        <Title>Latest Additions</Title>
        <ProductsGrid products={products} />
      
    </Center>
  );
}
