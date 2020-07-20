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
            <section className="shopify-post">
              <div></div>
              <h1>Why You Should Sell With </h1>
              <p>Selling on the internet can be incredibly tricky, and can come with some serious headaches. </p>
              <a href="">
                <img />
              </a>
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
