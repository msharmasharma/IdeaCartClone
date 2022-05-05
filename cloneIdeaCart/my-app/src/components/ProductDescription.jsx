import styled from "styled-components";
export const ProductDescription = () => {
  const Div = styled.div`
    display: flex;
    width: 80%;
    height: 600px;
    border: 1px solid black;
    margin-left: 10%;

    #div1 {
      width: 35%;
      height: 100%;
      border: 1px solid red;

      #imgDiv {
        width: 100%;
        height: 50%;
        border: 1px solid black;
      }
      #belowImg {
        width: 100%;
        height: 50%;
        border: 1px solid teal;
      }
    }
    #div2 {
      width: 65%;
      height: 100%;
      border: 1px solid yellow;
      #descri {
        width: 100%;
        height: 60%;
        border: 1px solid red;
      }
    }
  `;
  return (
    <div>
      <h1>Product Description</h1>
      <Div>
        <div id="div1">
          <div id="imgDiv">
            <img src="" alt="Show Here" />
          </div>
          <div id="belowImg"></div>
        </div>
        <div id="div2">
          <h1>Book Name Here</h1>
          <div id="descri">Details Here</div>
        </div>
      </Div>
    </div>
  );
};
