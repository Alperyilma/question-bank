import axios from "axios";

export class UsersService{

    getUsers(){
       return axios.get("http://localhost:8080/api/users/getall")
    }

}