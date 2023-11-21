import axios from "@/lib/axios";

async function getAllUsers() {
  try {
    const resp = await axios.get("/api/data/users");
    const Allusers = resp.data.data.filter((user) => user.role != "admin");
    return Allusers;
  } catch (error) {
    throw new Error(error);
  }
}

export default getAllUsers;
