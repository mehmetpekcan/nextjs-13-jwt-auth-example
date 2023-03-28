import React from "react";
import Cookies from "universal-cookie";
import { verifyJwtToken } from "@/libs/auth";

const fromServer = async () => {
  const cookies = require("next/headers").cookies;
  const cookieList = cookies();
  const { value: token } = cookieList.get("token") ?? { value: null };
  const verifiedToken = await verifyJwtToken(token);

  return verifiedToken;
};

export function useAuth() {
  // Have also loading state to not show flickering to user
  const [auth, setAuth] = React.useState(null);

  const getVerifiedtoken = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token") ?? null;
    const verifiedToken = await verifyJwtToken(token);
    setAuth(verifiedToken);
  };

  React.useEffect(() => {
    getVerifiedtoken();
  }, []);

  return auth;
}

useAuth.fromServer = fromServer;
