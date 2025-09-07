import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import { TailChase } from "ldrs/react";
import "ldrs/react/TailChase.css";

export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center text-accent-500 ">
            <TailChase size="40" speed="1.75" color="currentColor" />
            <p>Loading cabin data...</p>
          </div>
        }
      >
        <CabinList />
      </Suspense>
    </div>
  );
}
