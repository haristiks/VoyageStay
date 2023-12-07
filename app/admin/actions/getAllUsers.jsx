
import axios from "@/lib/axios";

async function getAllUsers() {
  try {
    const resp = await axios.get("/api/data/users");
    const Allusers = resp?.data?.data.filter((user) => user.role != "admin");
    const allUsers = Allusers.map((user) => {
      const id = item._id;
      const { _id, ...remains } = item;
      return { id, ...remains };
    });
    return allUsers;
  } catch (error) {
    throw new Error(error);
  }
}

export default getAllUsers;
