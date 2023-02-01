import Head from 'next/head'
import Link from 'next/link'


export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <h1>Sett Teta</h1>
      <p>TESti ng 123</p>
      <Link href="/">Home</Link>
    </>
  )
}
