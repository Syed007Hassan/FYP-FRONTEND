import "./globals.css";
import Provider from "@/components/Providers";
import { Providers } from "@/redux/provider";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Providers>{props.children}</Providers>
        </Provider>
      </body>
    </html>
  );
}
