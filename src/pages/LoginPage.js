import React, { useEffect, useState } from "react";
import { Form, Button } from "semantic-ui-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(()=>{
    if(localStorage.getItem("user-info")){
    }
  })


  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("http://localhost:8080/api/users/addLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
  }

  return (
    <div>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@gmail.com"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
          />
        </Form.Field>
        <Form.Field></Form.Field>
        <Button onClick={login} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
