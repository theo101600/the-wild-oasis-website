import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { TailChase } from "ldrs/react";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));

  return ids;
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve Cabin {cabin.name}. Pay on arrival.
        </h2>
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center text-accent-500 ">
              <TailChase size="40" speed="1.75" color="currentColor" />
              <p>Loading cabin data...</p>
            </div>
          }
        >
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
