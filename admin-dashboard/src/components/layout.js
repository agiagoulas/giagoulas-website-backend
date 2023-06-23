import Head from "next/head";
import Navigation from "./navigation";
import Footer from "./footer";

export default function Layout({ children, currentPage, title }) {
  let siteTitle = "Giagoulas Photography"
  let description = "Photography from Alexander Giagoulas"

  let pageTitle = ""
  if (title == "" || title == null) {
    pageTitle = siteTitle
  } else {
    pageTitle = siteTitle + " - " + title
  }

  return (
    <div className="flex flex-col w-screen h-screen">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Alexander Giagoulas" />
        <meta name="copyright" content="Alexander Giagoulas" />
        <meta name="subject" content="Photography" />
        <meta name="language" content="EN" />
        <meta name="url" content="https://www.giagoulas.com" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="og:site_name" content={siteTitle} />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:description" content={description} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google-site-verification" content="w17Jxrdc8-VQlo7-WHUWp5gzdWeFHXBiog3GLIrS6Q0" />
        <title>{pageTitle}</title>
      </Head>
      <header>
        <Navigation currentPage={currentPage}></Navigation>
      </header>
      <main className="container mx-auto px-4 mt-4 mb-auto pb-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}
