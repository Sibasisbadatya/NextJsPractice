import Link from "next/link";

export default function Home(props) {
  console.log("PROPS", props);

  return (
    <>
      Welcome to Home Page
      <Link href="/about">About</Link>
    </>
  );
}
