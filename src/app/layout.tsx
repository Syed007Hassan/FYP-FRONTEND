import Head from "next/head";
import "./globals.css";
import Provider from "@/components/Providers";
import { Providers } from "@/redux/provider";
// import icon from "../../public/synnc.png";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <head>
        <title>SyncFlow | Automated Recruitment System</title>
        <link rel="icon" href="/icon.png" sizes="500x500" />
        {/* <meta name="description" content="Your Page Description" />
        <meta name="keywords" content="Your,Page,Keywords" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
        {/* Other metadata */}
      </head>
      <body>
        <Provider>
          <Providers>{props.children}</Providers>
        </Provider>
      </body>
    </html>
  );
}
