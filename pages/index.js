import Layout from '../components/Layout'
import Image from 'next/image'
import About from './about'
import Projects from './projects'
import Blogs from './blog'


export default function Home() {
  return (
    <Layout>
      <section className="mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className='text-4xl sm:text-4xl font-extrabold leading-tight mb-4'>Hi, I am Sana M Ummer</p>
            <p className="text-4xl sm:text-4xl font-extrabold leading-tight mb-4">
            Blockchain Developer
            </p>
            <a href="/sanamummer_Resume.pdf">
            <button className="bg-gray-900 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
              Hire me
            </button>
            </a>
            
            </div>
            <div className="flex justify-center">
            <div className="w-full max-w-md">
              <Image
                src="/saaaa.JPG"
                alt="sanamummer"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
          </div>
           
        </div>
            <About></About>
            <Projects></Projects>
            <Blogs></Blogs>
            
      </section>
    </Layout>
  )
}
