import Container from '../../components/container'
import HeroPost from '../../components/hero-post'
import Layout from '../../components/layout'
import Head from 'next/head'

export default function Index() {
  return (
    <div className="cbu-parent">
      <>
        <Layout>
          <Container>
            <section className="cbu-offer py-4 max-w-3xl mx-auto">
              <h1 className="text-center text-5xl">Click Bank University</h1>
              <h2 className="text-center text-4xl">Start making money online today.</h2>
              <h3 className="text-center text-3xl flex flex-row align-center justify-center">
                <svg className="video-arrow mx-3 left-arrow self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M16 9v-4l8 8-8 8v-4s-13.277-2.144-16-14c5.796 6.206 16 6 16 6z"/></svg>
                  <b>Click the video below to learn more!</b>
                <svg className="video-arrow mx-3 right-arrow self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M16 9v-4l8 8-8 8v-4s-13.277-2.144-16-14c5.796 6.206 16 6 16 6z"/></svg>
              </h3>
              <div className="video">
                <div className="video-iframe mx-auto my-6">
                  <iframe className="shadow-md my-t-6 mx-auto" src="https://www.youtube.com/embed/not5j64lEN0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <div className="buttons flex flex-col md:px-0 md:flex-row justify-center align-center relative block">
                  <div className="mx-0 my-2 md:mx-2 self-center relative w-full md:w-auto">
                    <a className="main-cta cta py-3 px-6 block md:static text-center shadow-lg text-2xl" href="https://be03f1v54irfsw5bfg0f9nco99.hop.clickbank.net/"><b>CLICK TO ENROLL NOW</b></a>
                    <svg className="absolute cursor-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 14.655l-5.799.908 3.393 6.917-3.111 1.52-3.413-6.982-4.07 3.651v-15.857l13 9.843m-12.792-10.905l-1.042.519-1.536-3.087 1.043-.519 1.535 3.087zm2.599-3.577l-1.152-.173-.513 3.409 1.152.173.513-3.409zm-4.779 5.848l.557-1.023-3.028-1.648-.557 1.023 3.028 1.648z"/></svg>
                  </div>
                  <div className="mx-0 my-2 md:mx-2 self-center w-full md:w-auto">
                    <a className="secondary-cta cta py-3 px-4 block md:static text-center" href="">CLICK TO DOWN LOAD YOUR FREE BOOK - </a>
                  </div>
                </div>
              </div>

              <div className="course-info mt-10 mb-6">

                <div className="grid flex flex-row grid-cols-12 col-gap-6">
                  <div style={{backgroundSize: 'cover', paddingBottom: '100%', width: '100%', backgroundPosition: 'center'}} className="justin-atlan col-span-12 md:col-span-6 shadow-lg mb-6"></div>
                  <div className="col-span-12 md:col-span-6">
                    <h3 className="mb-3 text-2xl uppercase font-bold">Meet Justin Atlan!</h3>
                    <p className="pb-5">He is the creator of <b>ClickBank University.</b> Was named <b>entreprenuer of the year</b> by the Impact 100 Awards, and has been written up in publications like, Business Insider, Yahoo Finance, and CNN Money. Justin's business today has made more than <b>8 figures</b> using <b>ClickBank.</b> Now it's your turn.</p>
                    <a className="main-cta inline-block cta py-4 px-6 shadow-lg text-2xl" href="https://be03f1v54irfsw5bfg0f9nco99.hop.clickbank.net/"><b>CLICK TO ENROLL TODAY</b></a>
                  </div>
                </div>

                <div className="grid flex flex-row grid-cols-12 col-gap-6 mt-6">
                  <div style={{backgroundSize: 'cover', paddingBottom: '100%', width: '100%', backgroundPosition: 'center'}} className="book-cover col-span-12 md:col-span-6 shadow-lg mb-6"></div>
                  <div className="col-span-12 md:col-span-6">
                    <h3 className="mb-3 text-2xl">Get Your Free Free Book</h3>
                    <p></p>
                    <a className="cta inline-block cta py-4 px-6" href="">CLICK TO DOWNLOAD</a>
                  </div>
                </div>

              </div>

            </section>
          </Container>
        </Layout>
      </>
    </div>
  )
}

// export async function getStaticProps({ preview = false, previewData }) {
//   const allPosts = await getAllPostsForHome(previewData)
//   return {
//     props: { preview, allPosts },
//   }
// }
