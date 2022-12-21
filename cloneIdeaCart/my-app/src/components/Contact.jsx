import styled from "styled-components";
export const Contact = () => {
  const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 40%);
    margin-top: 5%;
    row-gap: 10%;
    margin-left: 13%;
  `;
  const Div = styled.div`
    width: 100%;
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 1%;
    background-image: url(https://img.freepik.com/premium-photo/business-man-contact-us-customer-support-hotline-people-connect-phone-application-blue-background-check-mail-hotline-computerxaxa_36325-3475.jpg?w=2000);
  `;
  return (
    <Div>
      <p>You can contact our team by filling this form -</p>
      <form
        action="https://formcarry.com/s/-1oBIfFBS0t"
        method="POST"
        accept-charset="UTF-8"
      >
        <Main>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              style={{ width: "300px", height: "30px" }}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              style={{ width: "300px", height: "30px" }}
            />
          </div>
          <div>
            <input
              type="number"
              name="number"
              placeholder="Number"
              required
              style={{ width: "300px", height: "30px" }}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              style={{ width: "300px", height: "30px" }}
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              style={{ width: "300px", height: "30px" }}
            />
          </div>
          <div>
            <textarea
              row="10"
              col="30"
              type="text"
              name="message"
              placeholder="Message..."
              required
              style={{ width: "300px", height: "30px" }}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              style={{
                width: "300px",
                height: "40px",
                marginLeft: "68%",
                marginTop: "10%",
                cursor: "pointer",
              }}
            >
              Send message
            </button>
          </div>
        </Main>
      </form>
    </Div>
  );
};
