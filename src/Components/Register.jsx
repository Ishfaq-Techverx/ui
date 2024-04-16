import { useState } from "react";
import UserForm from "./UserForm";

const Register = () => {
  const [errors, setErrors] = useState({});

  return (
    <>
      <div className="register-wrapper">
        <div className="hero-title">Registration</div>
        <div className="trusted-description reg-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Vitae, in tristique senectus dui pharetra sit.
        </div>
        <>
          <UserForm setErrors={setErrors} errors={errors} />
        </>
      </div>
    </>
  );
};

export default Register;
