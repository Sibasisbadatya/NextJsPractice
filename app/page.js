import Link from "next/link";
import ReusableComponent from "../components/component";

export default function Home(props) {
  console.log("PROPS", props);

  return (
    <>
      Welcome to Home Page
      <ReusableComponent />
      <Link href="/about">About</Link>
    </>
  );
}
