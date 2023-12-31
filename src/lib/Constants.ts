export const Backend_URL = "http://localhost:5000/api";
export const FLASK_URL = "http://localhost:4000/api";


export function parseJwt(jwt: string): any {
  const parts = jwt.split(".");
  if (parts.length < 2) {
    return null; // or throw an error
  }

  const base64Url = parts[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(Buffer.from(base64, 'base64').toString('binary'));
}
