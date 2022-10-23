import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import {DiscussionEmbed} from "disqus-react"
import Footer from '../../components/footer/footer'

const Cast = () => {

  const router = useRouter()
  const { guid } = router.query

  const [episode, setEpisode] = useState({})

  useEffect(() => {
    if(router.isReady) {
      fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fanchor.fm%2Fs%2Fc4c86a80%2Fpodcast%2Frss').then(res => res.json()).then(res => res.items).then(res => res.filter(r=> {
        return r.guid === guid})).then(data => {
        setEpisode(data[0])
      })
    }
  }, [guid, router.isReady])
 
  const disqusShortname = "ecma-today"
  const disqusConfig = {
    url: "https://ecma.today/episode/" + guid,
    identifier: guid, // Single post id
    title: episode.title  // Single post title
  }

  return (
    <div>
      <Navbar/>
      <main>
            <div className="py-12 px-4 mx-auto max-w-screen-xl sm:py-20 lg:px-6">
                <h1 className="mt-2 pb-8 text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Episodio:  <span className="text-blue-600 dark:text-blue-500">{episode.title}</span></h1>
                <iframe className='w-full pb-8 md:px-28' id="anchor-podcast-iframe" src={`${episode.link}/embed`}  frameborder="0" scrolling="no" name="iframe"></iframe>
                <DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
            </div> 
      </main>
      <Footer/>
    </div>
  )
}

export default Cast