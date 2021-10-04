import jwt from "jsonwebtoken";
import { JWT } from "../lib/secretKey";

// Generate token
export const generateToken = async (user) => {
  console.log(user);
  const payload = {
    id: user.user_id,
    email: user.email,
    username: user.username,
  };

  return jwt.sign(payload, JWT.secretKey, {
    expiresIn: "12h",
  });
};
