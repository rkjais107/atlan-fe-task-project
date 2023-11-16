import Image from "next/image";
import { lusitana } from "./fonts";

export default function AtlanLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row justify-center items-center leading-none text-white rounded border`}
    >
      <Image
        priority={true}
        src="/atlan-logo.jpg"
        width={260}
        height={136}
        alt="Atlan Company Logo"
      />
    </div>
  );
}
