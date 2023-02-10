import * as React from 'react'
import VideoCard from './Card.js'
import Head from 'next/head'

const linkArray = require('./data.json')

function Home() {

  let videoCards = [];
  for (let i = 0; i < linkArray.length; i++) {
    let linkVideo = linkArray[i];
    videoCards.push(<VideoCard link={linkVideo.link} desc={linkVideo.desc} />);
  }

  return (
    <main role="main">

      <div>
        <Head>
          <title>My Next.js App</title>
          <meta name="description" content="A simple Next.js application" />
        </Head>
      </div>

      <section className="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Album example</h1>
          <p class="lead text-muted">
            Something short and lke it short and sweet, but not too short so folks don't simply skip over it entirely.
          </p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">

            {videoCards}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
