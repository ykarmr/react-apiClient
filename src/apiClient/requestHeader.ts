// リクエストヘッダー
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  Authorization: "",
};

export const POST_HEADER = {
  headers: headers,
  // baseURL: process.env.API_URL,
  baseURL: "http://localhost:3001",
};
