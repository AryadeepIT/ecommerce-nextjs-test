import { BagContext } from "@/components/BagContext";
import Button from "@/components/Button";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Table from "@/components/Table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px){
    grid-template-columns: 1.2fr 0.8fr;
  }
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px){
    padding: 10px;
    width: 100px;
    height: 100px;
    img {
    max-width: 80px;
    max-height: 80px;
  }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 5px;
  display: block;
  @media screen and (min-width: 768px){
    display: inline;
    padding: 0 5px;
  }
`;

const CityHolder = styled.div`
    display: flex;
    gap: 5px;
`;

export default function CheckoutPage() {
  const { bagProducts, addProduct, removeProduct, clearBag } = useContext(BagContext);
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);


  useEffect(() => {
    if (bagProducts.length > 0) {
      axios.post("/api/bag", { ids: bagProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
        setProducts([]);
    }
  }, [bagProducts]);

  useEffect(() => {
    
    if (typeof window == 'undefined'){
      return;
    }

    if (window.location.href.includes('success')) {
      setIsSuccess(true);
      clearBag();
    }
  }, [])


    function moreOfThisProduct(id) {
        addProduct(id);

    }

    function lessOfThisProduct(id) {
        removeProduct(id);
    }

    async function goToPayment(){
      const response = await axios.post('/api/checkout', {
        name,
        email,
        phoneNumber,
        city,
        postalCode,
        streetAddress,
        landmark,
        country,
        bagProducts, 

      });
      if (response.data.url){
        window.location = response.data.url;
      }

    }

    let total = 0;
    for (const productId of bagProducts) {
        const price = products.find(p => p._id === productId)?.price || 0;
        total += price;
    }

    if (isSuccess){
      return (
        <>
          <Header />
          <Center>
            <ColumnsWrapper>
            <Box>
              <h1>Thanks for your order!</h1>
              <p>We will contact you soon with details.</p>
            </Box>            
            </ColumnsWrapper>            
          </Center>
        
        </>
      );
    }

  return (
    <>
      <Header />

      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Checkout</h2>
            {!bagProducts?.length && <div>Your Bag is empty!</div>}

            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src={product.images[0]} alt="" />
                        </ProductImageBox>

                        {product.title}
                      </ProductInfoCell>

                      <td>
                        <Button 
                        onClick={() => lessOfThisProduct(product._id)}>-</Button>
                        <QuantityLabel>
                          {
                            bagProducts.filter((id) => id === product._id)
                              .length
                          }
                        </QuantityLabel>

                        <Button 
                        onClick={() => moreOfThisProduct(product._id)}>+</Button>
                      </td>

                      <td>
                        ₹
                        {(bagProducts.filter((id) => id === product._id).length *
                          product.price).toLocaleString("en-IN")}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td><th>Total</th></td>
                    <td>₹{total.toLocaleString("en-IN")}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>

          {!!bagProducts?.length && (
            <Box>
              <h2>Order Information</h2>

              

              <Input 
                type="text" 
                placeholder="Name" 
                value={name} 
                name="name"
                onChange={ev => setName(ev.target.value)} />

              <Input 
                type="text" 
                placeholder="Email" 
                value={email} 
                name="email"
                onChange={ev => setEmail(ev.target.value)} />

              <Input 
                type="number" 
                placeholder="Phone Number"  
                value={phoneNumber} 
                name="phoneNumber"
                onChange={ev => setPhoneNumber(ev.target.value)} />

              <CityHolder>
              <Input 
                type="text" 
                placeholder="City" 
                value={city} 
                name="city"
                onChange={ev => setCity(ev.target.value)} />

              <Input 
                type="text" 
                placeholder="Postal Code" 
                value={postalCode} 
                name="postalCode"
                onChange={ev => setPostalCode(ev.target.value)} />
              </CityHolder>

              <Input 
              type="text" 
              placeholder="Street Address" 
              value={streetAddress} 
              name="streetAddress"
              onChange={ev => setStreetAddress(ev.target.value)} />

              <Input 
                type="text" 
                placeholder="Landmark" 
                value={landmark} 
                name="landmark"
                onChange={ev => setLandmark(ev.target.value)} />

              <Input 
                type="text" 
                placeholder="Country" 
                value={country} 
                name="country"
                onChange={ev => setCountry(ev.target.value)} />



              <Button 
                block 
                black 
                onClick={goToPayment}             
              >
                Continue to Payment
              </Button>

              

            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
