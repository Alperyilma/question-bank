import React,{useState} from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";

export default function RegisterPage() {
  const url = "http://localhost:8080/api/users/addRegister";

  const [user, userSetData] = useState({
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        console.log(res.user);
      });
  }

  function handle(e) {
    const newData = { ...user };
    newData[e.target.id] = e.target.value;
    userSetData(newData);
    console.log(newData);
  }

  return (
    <div>
      <Form onSubmit={(e) => submit(e)}>
        <Form.Field className="register">
          <label>Email</label>
          <input className="register--input"
            onChange={(e) => handle(e)}
            value={user.email}
            id="email"
            type="text"
            placeholder="alex@gmail.com"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input className="register--input"
            onChange={(e) => handle(e)}
            value={user.password}
            id="password"
            type="text"
            placeholder="*****"
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
