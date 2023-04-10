import Head from 'next/head'
import Link from 'next/link'
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
 
} from "react-icons/ai"

export default function Layout({ children }) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>sanamummer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-centre py-6 md:py-8">
      
        <h1 className="text-gray-900 font-medium mx-4">SANA M UMMER</h1>
        <nav className="hidden md:block">
        <Link legacyBehavior href="#about" >
            <a className="text-gray-500 hover:text-gray-900 font-medium mx-4">About</a>
          </Link>
          <Link legacyBehavior href="#about" >
            <a className="text-gray-500 hover:text-gray-900 font-medium mx-4">Skills</a>
          </Link>
          <Link legacyBehavior href="#projects" >
            <a className="text-gray-500 hover:text-gray-900 font-medium mx-4">Projects</a>
          </Link>
          <Link legacyBehavior href="#blog" >
            <a className="text-gray-500 hover:text-gray-900 font-medium mx-4">Blog</a>
          </Link>
         
        </nav>
      </header>

      <main>{children}</main>

      <footer className="py-6 md:py-8">
      <div>
        <p className="text-gray-500 text-center">
          &copy; Sana M Ummer {new Date().getFullYear()}
        </p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/sanamumer" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/sanam_ummer"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/sanamummer/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          </div>
      </footer>
    </div>
  )
}
