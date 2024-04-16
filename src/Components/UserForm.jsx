import { useState } from "react";
import { Form } from "react-bootstrap";

const initialData = {
  email: "",
  name: "",
  company: "",
};

const UserForm = ({ setErrors, errors }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: "" });
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Email ";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.name) {
      errors.name = "Name ";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setErrors(errors);

    let listedUsers = localStorage?.getItem("users");

    if (Object?.keys(errors)?.length === 0) {
      if (listedUsers) {
        try {
          listedUsers = JSON?.parse(listedUsers || []);
          const userExists = [...(listedUsers || [])]?.find(
            ({ email }) => email === formData?.email
          );
          if (userExists) {
            alert(`user:  ${formData?.email}  alreay exists`);
          } else {
            listedUsers?.push(formData);
            localStorage?.setItem("users", JSON?.stringify(listedUsers));
            alert(`New user: ${formData?.email} added`);
            setFormData(initialData);
          }
        } catch (error) {
          console.error("Error parsing users from local storage:", error);
        }
      } else {
        localStorage.setItem("users", JSON?.stringify([formData]));
        alert(`New user: ${formData?.email} added`);
        setFormData(initialData);
      }
    }
  };

  const isValidEmail = (email) => {
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,}\.[0-9]{1,}\.[0-9]{1,}\.[0-9]{1,}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
    return emailPattern?.test(email);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="mb-fixed">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Name <span className="text-danger ">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="John doe"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors?.name ? (
              <Form.Text className="text-danger">{errors?.name}</Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="I2C inc"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Email address <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors?.email ? (
              <Form.Text className="text-danger">{errors?.email}</Form.Text>
            ) : null}
          </Form.Group>
          .
        </div>
        <button className="submit-btn">Submit</button>
      </Form>
    </>
  );
};

export default UserForm;
