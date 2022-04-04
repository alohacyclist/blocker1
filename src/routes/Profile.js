import { useEffect, useState } from "react"
import axios from "axios"


export function Profile() {
  const [user, setUser] = useState([]);
  // always useEffect when doing an API call
  useEffect(() => {
    // endpoint for getting tweets from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/user`;
    // request config that is gonna hold the authorization
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // make the request
    axios.get(url, config).then((result) => {
      setUser(result.data);
    });
  }, []);

  return (
    <div className="container">
      {user}
    </div>
  );
}