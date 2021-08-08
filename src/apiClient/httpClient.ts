import axios from "axios";
import { POST_HEADER } from "./requestHeader";

const HttpClient = axios.create({
  ...POST_HEADER,
});

HttpClient.interceptors.response.use(
  (res) => res,
  (err) => {
    switch (err.response?.status) {
      // ステータスコードに応じてエラー処理を実装
      case 400:
        console.error(err);
        break;
      case 401:
        console.error(err);
        break;
      default:
        console.error(err);
        break;
    }
  }
);
export default HttpClient;
