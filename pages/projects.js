
export default function Projects() {
  return (
   <div id="projects">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mt-16 md:mt-24 mb-8">
        My Projects
      </h1>
       <div className="projects__cards">

                <div className="md:mt-2 md:w-1/2">
                    <h3 className="text-2xl text-500 mb-8">Portfolio Site</h3>
                   
                    <p className="text-xl text-gray-500 mb-8">My custom portfolio site I built from scratch with Next JS
                    </p>
                    <a href="" target="_blank" className="bg-gray-500 text-white font-small py-2 px-2  mr-2 mt-2 rounded-md" >Site</a>
                    <a href="" target="_blank" className="bg-gray-500 text-white font-small py-2 px-2 rounded-md">Code</a>
                </div>

                <div className="md:mt-2 md:w-1/2">
                    <h3 className="text-2xl text-500 mb-8">NFT Marketplace</h3>
                    <img src="https://metamandrill.com/wp-content/uploads/2022/03/nft-marketplace.jpg" alt="Market Landing Page" />
                    <p className="text-xl text-gray-500 mb-8">Nft Marketplace fot buying and selling Nft art.
                    </p>

                    <a href="" target="_blank" className="bg-gray-500 text-white font-small py-2 px-2  mr-2 mt-2 rounded-md" >Site</a>
                    <a href="" target="_blank" className="bg-gray-500 text-white font-small py-2 px-2 rounded-md">Code</a>
                </div>

                <div className="md:mt-2 md:w-1/2">
                    <h3 className="text-2xl text-500 mb-8">Supplychain of Luxury Fashion Items</h3>
                    <img src="https://techmonitor.ai/wp-content/uploads/sites/4/2022/10/shutterstock_2192732633-scaled.jpg" alt=" Landing Page" />
                    <p className="text-xl text-gray-500 mb-8">An Application built using Hyperledger Fabric to track luxury fashion Items.

                    </p>

                    <a href="" target="_blank" className="bg-gray-500 text-white font-small py-2 px-2  mr-2 mt-2 rounded-md" >Site</a>
                    <a href="https://gitlab.com/fabricdev/SanaMUmmer_ClassyFab" target="_blank" className="bg-gray-500 text-white font-small py-2 px-2 rounded-md">Code</a>
                </div>

                <div className="md:mt-2 md:w-1/2">
                    <h3 className="text-2xl text-500 mb-8">NFT Minting DApp</h3>
                    <img src="https://zipmex.com/static/e45bd0df2a58aa12c9a800ed5940ab56/1bbe7/NFT-Minting.jpg" alt="Landing Page" />
                    <p className="text-xl text-gray-500 mb-8">An Application for minting nfts, whitlisting address and more.
                    </p>
                    <a href="" target="_blank" className="bg-gray-500 text-white font-small py-2 px-2  mr-2 mt-2 rounded-md" >Site</a>
                    <a href="" target="_blank" className="bg-gray-500 text-white font-small py-2 px-2  rounded-md">Code</a>
                </div>
            </div>
     
     </div>
  )
}
