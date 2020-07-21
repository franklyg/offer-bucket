import Container from '../../components/container'
import HeroPost from '../../components/hero-post'
import Layout from '../../components/layout'
import Head from 'next/head'

import { pdfDocs } from '../../lib/api'

import ReactGA from 'react-ga';
const trackingId = "UA-173193284-1"; // Replace with your Google Analytics tracking ID

export default function Index({allPosts}) {
  ReactGA.initialize(trackingId);
  ReactGA.pageview('/cbu');
  return (
    <div className="cbu-parent">
      <>
        <Layout>
          <Container>
            <section className="cbu-offer py-4 max-w-3xl mx-auto">
              <h1 className="text-center text-4xl md:text-6xl"><b>CLICK BANK UNIVERSITY</b></h1>
              <h2 className="text-center text-2xl md:text-4xl">Start making a passive income online <b>today.</b></h2>
              <h3 className="text-center text-2xl md:text-3xl flex flex-row align-center justify-center">
                <svg className="video-arrow mx-3 left-arrow self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M16 9v-4l8 8-8 8v-4s-13.277-2.144-16-14c5.796 6.206 16 6 16 6z"/></svg>
                  <b>Click the video below to learn more!</b>
                <svg className="video-arrow mx-3 right-arrow self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M16 9v-4l8 8-8 8v-4s-13.277-2.144-16-14c5.796 6.206 16 6 16 6z"/></svg>
              </h3>
              <div className="video">
                <div className="video-iframe mx-auto my-6">
                  <iframe className="shadow-md my-t-6 mx-auto" src="https://www.youtube.com/embed/not5j64lEN0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div className="buttons flex flex-col grid grid-cols-12 cols-gap-6 md:px-0 md:flex-row justify-center align-center relative block">
                  <div className="mx-0 my-2 md:mx-2 col-span-12 md:col-span-6 self-center relative w-full md:w-auto">
                    <a id="fold-btn" className="main-cta cta py-3 px-4 md:px-6 block md:static text-center shadow-lg text-2xl" href="https://be03f1v54irfsw5bfg0f9nco99.hop.clickbank.net/"><b>CLICK TO ENROLL NOW</b></a>
                    <svg className="absolute cursor-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 14.655l-5.799.908 3.393 6.917-3.111 1.52-3.413-6.982-4.07 3.651v-15.857l13 9.843m-12.792-10.905l-1.042.519-1.536-3.087 1.043-.519 1.535 3.087zm2.599-3.577l-1.152-.173-.513 3.409 1.152.173.513-3.409zm-4.779 5.848l.557-1.023-3.028-1.648-.557 1.023 3.028 1.648z"/></svg>
                  </div>
                  <div className="mx-0 my-2 md:mx-2 col-span-12 md:col-span-6 self-center w-full md:w-auto">
                    <a className="secondary-cta cta py-3 px-4 block md:static text-center" href={allPosts[0].node.pdf_docs.url} target="_blank">DOWNLOAD YOUR FREE BOOK - <b>7 Steps To Turn Your Passion Into An Online Business</b></a>
                  </div>
                </div>
              </div>

              <div className="course-info mt-10 mb-6">

                <div className="grid flex flex-row grid-cols-12 col-gap-6">
                  <div style={{backgroundSize: 'cover', paddingBottom: '100%', width: '100%', backgroundPosition: 'center'}} className="justin-atlan col-span-12 md:col-span-6 shadow-lg mb-6"></div>
                  <div className="col-span-12 md:col-span-6">
                    <h3 className="mb-3 text-2xl uppercase font-bold">Meet Justin Atlan!</h3>
                    <p className="pb-5">He is the creator of <b>ClickBank University.</b> Was named <b>entreprenuer of the year</b> by the Impact 100 Awards, and has been written up in publications like, Business Insider, Yahoo Finance, and CNN Money. Justin's business today has made more than <b>8 figures</b> using <b>ClickBank.</b> Now it's your turn. Click the enroll button below to get started.</p>
                    <a id="scroll-btn" className="main-cta cta py-3 px-2 md:px-6 block md:static text-center shadow-lg text-2xl" href="https://be03f1v54irfsw5bfg0f9nco99.hop.clickbank.net/"><b>CLICK TO ENROLL TODAY</b></a>
                  </div>
                </div>

                <div className="grid flex flex-row grid-cols-12 col-gap-6 mt-6">
                  <div style={{backgroundSize: 'cover', paddingBottom: '100%', width: '100%', backgroundPosition: 'center'}} className="book-cover col-span-12 md:col-span-6 shadow-lg mb-6"></div>
                  <div className="col-span-12 md:col-span-6">
                    <h3 className="mb-3 text-2xl"><b>Get Your Free Book</b></h3>
                    <p className="pb-5">Get the step by step break down to turn your passion into your day-to-day business. Click the button below to download the <b>7 Steps To Turn Your Passion Into An Online Business</b>. Start leanring and earning.</p>
                    <a className="cta inline-block cta py-4 px-6" href={allPosts[0].node.pdf_docs.url} target="_blank">CLICK TO DOWNLOAD</a>
                  </div>
                </div>

              </div>
              <div className="traffic-tracker px-8 py-1 md:py-3 shadow-lg flex justify-between align-center flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3d8ac9" className="w-3/12 rounded-full"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/></svg>
                <p className="text-1xl w-8/12 self-center">You and <b>47 people</b> are <br />on this page right now.</p>
              </div>
            </section>
            <p className="text-1xl py-10">ClickBank University does not own or operate this website and is not responsible for its contents. It is owned by Offer Bucket, an independent marketing affiliate.</p>
          </Container>
        </Layout>
      </>
    </div>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await pdfDocs(previewData)
  return {
    props: { preview, allPosts },
  }
}
