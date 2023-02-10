import Head from 'next/head'
import Link from 'next/link'


export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <h1>Sett Teta</h1>
      <p>Welcome</p>
      <Link href="/about">About</Link>
    </>
  )
}
