import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export const ProductDescription = () => {
  const Div = styled.div`
    display: flex;
    width: 80%;
    height: 600px;
    /* border: 1px solid black; */
    margin-left: 10%;
    gap: 20px;

    #div1 {
      width: 35%;
      height: 100%;
      /* border: 1px solid red; */

      #imgDiv {
        width: 100%;
        height: 70%;
        border: 1px solid grey;
        border-radius: 5px;
      }
      #belowImg {
        width: 100%;
        height: 30%;
        /* border: 1px solid teal; */
      }
    }
    #div2 {
      width: 65%;
      height: 100%;
      /* border: 1px solid yellow; */
      #descri {
        width: 100%;
        height: 60%;
        /* border: 1px solid red; */
        background: #ebebeb;
        text-align: left;
      }
    }
  `;
  const [showData, setShowData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then(({ data }) => {
      setShowData(data);
    });
  }, []);

  return (
    <div>
      <h1>Product Description</h1>
      <Div>
        <div id="div1">
          <div id="imgDiv">
            <img
              style={{ width: "92%", height: "93%",marginTop:"4%" }}
              src={showData.image_url}
              alt="Show Here"
            />
          </div>
          <div id="belowImg">
            <p>Buy it at <b>best price</b> from here</p>
            <h1>Rs. {showData.price} <button>Buy Now</button> </h1>
            <h1>Book Specification</h1>
            <hr/>
            <p><b>Binding</b> &nbsp;   <span>Paperback Bunko</span></p>
            <hr/>
            <p><b>Language</b> &nbsp;   <span></span></p>
            <hr/>
            <p><b>Number Of Pages</b> &nbsp;   <span></span></p>
            <hr/>
            <p><b>Author</b> &nbsp;   <span></span></p>
            <hr/>
            <p><b>Publisher</b> &nbsp;   <span></span></p>
          </div>
        </div>
        <div id="div2">
          <h1>{showData.name}</h1>
          <div id="descri">
            <h2>{showData.description1}</h2>
            <p>{showData.description2}</p>
          </div>
        </div>
      </Div>
    </div>
  );
};
