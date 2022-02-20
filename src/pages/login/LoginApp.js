import React, { useState } from "react";
import SignedIn from "../../layouts/SignedIn";
import ProductList from "../ProductList";
import LoginForm from "./LoginForm";

export default function LoginApp() {

// const[users, setUsers] = useState([])

// useEffect(()=>{
//     let usersService = new UsersService()
//     usersService.getUsers().then(response => setUsers(response.data))
// })

  const adminUser = {
    email: "admin@admin.com",
    password: "123",
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
        console.log("Logged in")
        setUser({
            email:details.email,
            password:details.password
        })
    }else{
        console.log()
        setError("Details do not match")

    }

  };



  return (
    <div className="LoginApp">
    
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome
          </h2>
          <SignedIn/>
          <ProductList/>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}
