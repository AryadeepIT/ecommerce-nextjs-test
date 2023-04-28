import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import BagIcon from "@/components/icons/BagIcon";
import { useContext } from "react";
import { BagContext } from "@/components/BagContext";

const Bg = styled.div`
  background-color: #b5eaea;
  color: #222;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Desc = styled.p`
  color: #000;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 0.9fr;
    div:nth-child(2) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(BagContext);
  function addFeaturedToBag() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              {/* Change product id in index.js first */}
              {/* {product.title}  {product.description} */}
              <Title>
                Indulge in the creamy goodness of Cadbury Dairy Milk with our
                Family Pack at 20% off!
              </Title>
              <Desc>
                Treat yourself and your loved ones to the irresistible taste of
                Cadbury Dairy Milk Chocolate Bar with our special Family Pack
                offer. Made with rich and creamy milk chocolate, this chocolate
                bar is perfect for sharing with the whole family. With a 20%
                discount, it's the perfect time to stock up on your favourite
                chocolate and enjoy the goodness of Cadbury Dairy Milk any time
                of the day. Don't miss out on this limited time offer and grab
                your Family Pack today!
              </Desc>

              <ButtonsWrapper>
                <ButtonLink
                  href={"/product/" + product._id}
                  white={1}
                  outline={1}
                >
                  Read More
                </ButtonLink>

                <Button primary onClick={addFeaturedToBag}>
                  <BagIcon />
                  Add to Bag
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>

          <Column>
            <img
              src="https://aryadeepit-ecommerce.s3.amazonaws.com/1682523338968.png"
              alt=""
            />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
