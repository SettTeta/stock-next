import Head from 'next/head'
import Link from 'next/link'
import LoginButton from 'components/loginBtn'

export default function Home() {
  return (
    <div className='center'>
      <Head>
        <title>Index Page</title>
      </Head>
      <h1>Sett Teta</h1>
      <p>Welcome</p>
      <div>
        <LoginButton />
      </div>
      <Link href="/about">About</Link>
      <br />
      <Link href="/blogs">Blogs</Link>
    </div>
  )
}
