import Link from "next/link";


export default async function ID({ params }: any) {

  const { id } = await params

  return (
    <>
      <p>ID: {id}</p>
      <Link href="/second">second</Link><br />
    </>


  );
}
