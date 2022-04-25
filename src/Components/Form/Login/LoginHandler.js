import axios from "axios";
import { useEffect } from "react";
const LoginHandler =  () => {

  const signupHandler = async ({data}) => {
    try {
      const {
        data: {
          foundUser: { firstName, lastName, createdAt },
          encodedToken,
        },
      } = await axios.post("/api/auth/login", data);
      
            // try {
            //   const response = await axios.post(`/api/auth/signup`, {
            //     firstName: "Adarsh",
            //     lastName: "Balika",
            //     email: "adarshbalika@neog.camp",
            //     password: "adarshBalika",
    
            //   });
              console.log(data);
              // saving the encodedToken in the localStorage
              // localStorage.setItem("token", response.data.encodedToken);
            } catch (error) {
              console.log(error);
            }
          };
          useEffect(() => {
            signupHandler();
           }, []);

 
    return (
      <h1>yeah did it</h1>
    )

    
  };

export default LoginHandler;