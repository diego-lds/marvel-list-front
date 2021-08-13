import axios from "axios";
import { MD5 } from "crypto-js";
import handleErrors from "./handleErrors";

const encryptMD5 = (publicKey, privateKey, currentDate) => {
  return MD5(`${currentDate}${privateKey}${publicKey}`);
};
const pubkey = process.env.REACT_APP_PUB_KEY;
const prikey = process.env.REACT_APP_PRI_KEY;
const currentDate = new Date().toLocaleTimeString().trim();
const hash = encryptMD5(pubkey, prikey, currentDate).toString();

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const fetchCharacters = async (nameStartsWith = "") => {
  const nameStartsWithValue = nameStartsWith.length
    ? `&nameStartsWith=${nameStartsWith}`
    : "";

  try {
    const response = await api.get(
      `/characters?apikey=${pubkey}&ts=${currentDate}&hash=${hash}${nameStartsWithValue}`
    );
    return response;
  } catch (err) {
    handleErrors(err);
  }
};

export default fetchCharacters;
