import axios from "axios";
import handleErrors from "./handleErrors";
import { MD5 } from "crypto-js";
import { useDispatch } from "react-redux";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const fetchCharacters = async () => {
  const pubkey = process.env.REACT_APP_PUB_KEY;
  const prikey = process.env.REACT_APP_PRI_KEY;
  const currentDate = new Date().toLocaleTimeString().trim();
  const hash = encryptMD5(pubkey, prikey, currentDate).toString();

  try {
    const response = await api.get(
      `/characters?apikey=${pubkey}&ts=${currentDate}&hash=${hash}&offset=${100}`
    );
    return response;
  } catch (err) {
    handleErrors(err);
  }
};

const encryptMD5 = (publicKey, privateKey, currentDate) => {
  return MD5(`${currentDate}${privateKey}${publicKey}`);
};

export default fetchCharacters;
