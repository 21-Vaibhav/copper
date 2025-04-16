import { PropsWithChildren } from 'react';
import './globals.css';
import { Metadata } from 'next';

const metadata: Metadata = {
  title: "hono hero-clone",
  description: "hono hero-clone",
}


const RootLayout = (props: PropsWithChildren) => {
  return (
    <html>
      <body>
      {props.children}
      </body>
    </html>
  )
}

export default RootLayout