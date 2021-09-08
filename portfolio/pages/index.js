import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AboutMe from '../components/AboutMe' //importing the whole AboutMe folder
import Shortcut from '../components/Shortcut' //imports the Shortcut component

export default function Home() { 
// "export default function" sort of declares a "class" in .js

  const cum = 420.0;
  var cumTwice = 840.0;
  // "const" if READ ONLY variable 
  // "var" if MUTATE variable
  return ( 
    // anything below here is rendered on page
    <>
      <Head>
        <title>Lucas Struijk</title>
        <meta name="description" content="Created with Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.shortcutGrid}>
        <Shortcut
          name={"Google"}
          image={"google"}
        />
        <Shortcut
          name={"Google"}
          image={"google"}
        />
        <Shortcut
          name={"Google"}
          image={"google"}
        />
      </div>

      <div className={styles.container}>
        
        
        
        

        {/* tag that doesnt need any contents so we can close it with 1 tag */}

        <main className={styles.main}>
          <h1 className={styles.title}>
            {/* Welcome to <a href="https://nextjs.org">Next.js!</a> */}
            {cum + 500.0}
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </>
  )
}
