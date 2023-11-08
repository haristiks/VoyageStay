import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// headers: {
//   //       "Content-Type": "application/json",
//   //       Authorization : `Bearer ${currentUser.accessToken}`,
//   //     },
