import Home_Layout from '@/components/layouts/home/Home_Layout'
import { Attributes } from '@/components/navigation/footer/IFooter_Navigation'
import { fetchGraphQL } from 'lib'
import { GetStaticProps } from 'next'
// import { fetchGraphQL } from 'lib'
import Head from 'next/head'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout<Attributes> = () => {
  //console.log(2);
  return <h1>Contenido</h1>
}

Page.getLayout = function getLayout(page: ReactElement) {
  // console.log(3);
  // console.log(page);
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Home_Layout>{page}</Home_Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Attributes> = async () => {
  const query = `
  {
    footer {
      data {
        attributes {
          logo {
            image {
              data{
                attributes{
                  url
                  alternativeText
                }
              }
            }
          }
          frase
        }
      }
    }
  }
  `;
  const footer_data: any = await fetchGraphQL(query, {});

  return {
    props: {
      logo: footer_data.footer.data.attributes.logo,
      frase: footer_data.footer.data.attributes.frase
    },
    revalidate: 60,
  };
};

export default Page