import React, { Component } from "react";

export class extends Component{

    


    async postData(){

        const[email, setEmail] = useState({})
        const[password, setPassword] = useState({})


        try{

            let result = await fetch("http://localhost:8080/api/users/add",{
                method:"post",
                mode:"no-cors",
                headers:{
                    "Accept":"application/json",
                    "Content-type":"application/json"
                },
                body: JSON.stringify({
                    email: setEmail,
                    password: setPassword
                })
            })
            console.log(result)

        }catch(e){
        console.log(e)
        }
    }

}