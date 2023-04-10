import Link from 'next/link'
import Image from 'next/image'

export default function Blogs() {
  return (
    <div id='blog'>
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mt-16 md:mt-24 mb-8">
      Blogs
      </h1>
        <Link href="https://sanamummer1.substack.com/p/all-you-need-to-know-about-decentralised" legacyBehavior>
        <div className="md:mt-2 md:w-1/2">
        <Image
             src="/defi.png"
             alt=""
             width={350}
             height={250}
             className="full shadow-2xl"
            />  
            <p className="text-xl text-gray-500 mb-8">
        DeFi refers to a system of financial applications that are built on blockchain technology and operate in a decentralised manner.
      </p>
        </div>
        
        </Link>
        
      {/* Add your projects here */}
    </div>
  )
}
