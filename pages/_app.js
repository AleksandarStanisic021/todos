import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen bg-red-200 text-gray-900">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
