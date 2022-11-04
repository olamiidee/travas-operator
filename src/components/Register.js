const Register = () => {
  return (
    <div className="pt-[90px] pl-12">
      <div>
        <h3>Register</h3>
        <p>Enter these few information to become a Travas supplier today!</p>
      </div>
      <form className="space-y-4">
        {/* business/company name */}
        <div>
          <label for="business-name">Registered business/company name</label>
          <input
            className="bg-[#F5F5F5]"
            type="text"
            id="business-name"
            placeholder="Business/company name"
            required
          />
        </div>

        {/* email */}
        <div>
          <label for="email">Contact info</label>
          <input
            className="bg-[#F5F5F5]"
            type="text"
            id="email"
            placeholder="Email address"
            required
          />
        </div>
        <div>
          <input type="dropdown" />
          <input type="number" placeholder="Mobile number" required />
        </div>
        {/* Password */}
        <div>
          <label for="password">Contact info</label>
          <input
            className=""
            type="password"
            id="password"
            placeholder="Password"
          />
          <br />
          <input type="password" placeholder="Confirm password" />
        </div>

        <input
          className="bg-[#B6B1B1] py-3 px-16 pointer"
          type="submit"
          placeholder="Register"
        />
      </form>
      <div>
        <p>
          Already have an account?
          <a href="" className="text-[#1F66D0]">
            Login
          </a>
        </p>
        <p>
          By registering, you hereby agree to the Travas{" "}
          <a className="text-[#1F66D0]" href="">
            Privacy Policy
          </a>
          and
          <a className="text-[#1F66D0]" href="">
            Terms of use
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
