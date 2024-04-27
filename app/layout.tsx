import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Cookie from '@/components/cookie/cookie';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Svalbard Experts',
  description:
    "Svalbard Experts is a travel company that specializes in creating unforgettable trips to Svalbard, an archipelago located in the Arctic Ocean with a focus on providing unique and immersive experiences. Svalbard Experts has become one of the leading travel agency in the region, and provides services mainly to families and couples. Our tours are designed to give travelers a taste of Svalbard's rugged beauty, while providing them with the comfort they need to enjoy their journey. Whether you are interested in exploring the islands' glaciers, watching the region's unique wildlife, or learning about the history and culture of the local communities, we have a tour package that will suit you. With a commitment to sustainable tourism, from using electric snowmobiles to providing eco-friendly accommodation, we are committed to protecting the natural beauty of Svalbard for generations to come. Our team of experienced guides are passionate about sharing their knowledge of the area with guest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KD7P6SX9');`
          }}
        />
      </head>
      <body className={poppins.className}>


      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KD7P6SX9"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>


        <main className='relative'>
          {/* watsapp widget */}

          {/* widget Id:  11dbc17e-ca45-4845-8860-11bf8800d49b */}
          <Cookie />
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
