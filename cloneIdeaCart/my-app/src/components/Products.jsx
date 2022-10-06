import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
export const Products = () => {
  const user = useSelector((store) => store.user);
  console.log(user);

  const teacher = JSON.parse(localStorage.getItem("teacherName"));

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://ideakartitems.herokuapp.com/products")
      .then(({ data }) => {
        setProducts(data);
      });
  }, []);

  const Layout = styled.div`
    display: grid;
    width: 90%;
    height: auto;
    gap: 2%;
    grid-template-columns: repeat(4, 23%);
    margin-left: 6%;
    row-gap: 1%;
  `;
  const P = styled.p`
    text-align: left;
    margin-left: 6%;
    font-size: 24px;
    font-family: "Roboto";
  `;

  return (
    <div style={{ marginBottom: "50%" }}>
      <P>Top Reads</P>
      <Layout>
        {products.map((pro) => (
          <Link
            style={{ textDecoration: "none" }}
            key={pro.id}
            to={`/products/${pro.id}`}
          >
            <div
              style={{
                border: "1px solid grey",
                height: "550px",
                borderRadius: "3px",
              }}
            >
              <div>
                <img
                  style={{ width: "93%", height: "300px", marginTop: "4%" }}
                  src={pro.image_url}
                />
              </div>
              <div>
                <p
                  style={{
                    textAlign: "left",
                    marginLeft: "12px",
                    color: "black",
                  }}
                >
                  {pro.name}
                </p>
                <p
                  style={{
                    textAlign: "left",
                    marginLeft: "12px",
                    color: "teal",
                  }}
                >
                  Rs. {pro.price}
                </p>
                <hr style={{ width: "90%", color: "gray" }} />
                <div style={{ marginTop: "20px" }}>
                  <span style={{ color: "blue", marginRight: "5%" }}>
                    <img
                      src="https://img.icons8.com/material-rounded/344/shopping-cart-loaded.png"
                      style={{ width: "15px", height: "15px" }}
                    />{" "}
                    View Now
                  </span>{" "}
                  |{" "}
                  <span style={{ color: "blue", marginLeft: "5%" }}>
                    <img
                      src="https://img.icons8.com/ios-filled/344/view-details.png"
                      style={{ width: "15px", height: "15px" }}
                    />{" "}
                    More Details{" "}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Layout>
    </div>
  );
};
