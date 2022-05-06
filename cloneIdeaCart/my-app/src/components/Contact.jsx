export const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div>
        <div>Message me</div>

        <form
          action="https://formcarry.com/s/0GXbSX9DT7N"
          method="POST"
          accept-charset="UTF-8"
        >
          <div>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div>
            <input type="number" name="number" placeholder="Number" required />
          </div>
          <div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
          <div>
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
          <div>
            <textarea
              row="10"
              col="30"
              type="text"
              name="message"
              placeholder="Message..."
              required
            ></textarea>
          </div>
          <div>
            <button type="submit">Send message</button>
          </div>
        </form>
      </div>
    </div>
  );
};
