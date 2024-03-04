//env variables also added in vercel project settings
// export const Backend_URL = process.env
//   .NEXT_PUBLIC_BACKEND_NEST_URL_PROD as string;
export const Backend_URL = "http://fypnest.eastus.cloudapp.azure.com:5000/api";
export const FLASK_URL = process.env
  .NEXT_PUBLIC_BACKEND_FLASK_URL_DEV as string;

export function parseJwt(jwt: string): any {
  const parts = jwt.split(".");
  if (parts.length < 2) {
    return null; // or throw an error
  }

  const base64Url = parts[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(Buffer.from(base64, "base64").toString("binary"));
}
