import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found — Urban Bites" />
      <main className="pt-28">
        <div className="container-page flex min-h-[65vh] items-center justify-center py-16 text-center">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rosebrand/10 text-4xl text-rosebrand"><i className="ri-error-warning-line" /></div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-rosebrand">404</p>
            <h1 className="mt-2 font-heading text-4xl font-extrabold">Oops, that page is missing</h1>
            <p className="mx-auto mt-3 max-w-md text-[#756861]">The page you're looking for may have moved. Let's get you back to something delicious.</p>
            <Link to="/" className="mt-7 inline-flex rounded-full bg-rosebrand px-7 py-3.5 font-bold text-white">Back to Home</Link>
          </div>
        </div>
      </main>
    </>
  );
}