import React, { useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'

export default function Home () {
  useEffect(() => {
    Router.push('/home')
  })

  return (
    /**
     * anything here is rendered on the Home Page
     * except for the <HEAD> tag which is for the page's metadata like tab title
     */
    <>
      <Head>
        <title>Lucas Struijk&apos;s Portfolio</title>
        <meta
          name="description"
          content="Created by Lucas Struijk and Andrea Ang using Next JS ©2023"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}
