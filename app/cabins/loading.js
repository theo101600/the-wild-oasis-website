import { TailChase } from "ldrs/react";
import "ldrs/react/TailChase.css";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center text-accent-500 ">
      <TailChase size="40" speed="1.75" color="currentColor" />
      <p>Loading cabin data...</p>
    </div>
  );
}
