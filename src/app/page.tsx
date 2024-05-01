import Header from "@/components/Header";
import ButtonGradient from "@/components/SVG/ButtonGradient";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <h1 className="h-screen">Something</h1>
      </div>
      <ButtonGradient />
    </>
  );
}
