import Homepage from "@/app/components/Homepage";
import "@/app/globals.css";
import RootLayout from "@/app/layout";

export default function Home() {
  return (
    <>
      <RootLayout>
          <Homepage/>
      </RootLayout>
    </>
  );
}
