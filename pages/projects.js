
export default function Projects() {
  return (
   <div id="projects">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mt-16 md:mt-24 mb-8">
        My Projects
      </h1>
       <div className="projects__cards">
       <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                <div className="md:mt-2 md:w-1/2 p-4">
                    <h3 className="text-2xl text-500 mb-8">Classy Chain - NFT Marketplace for the Fashion Industry</h3>
                    <img src="https://metamandrill.com/wp-content/uploads/2022/03/nft-marketplace.jpg" alt="Market Landing Page" />
                    <p className="text-xl text-gray-500 mb-8">ClassyChain s a groundbreaking project aimed at revolutionizing the 
                    fashion industry by leveraging non-fungible tokens (NFTs) and blockchain technology. 
                    It aims to create a dedicated marketplace that connects fashion designers, brands, and enthusiasts, enabling the seamless trade and ownership of unique digital fashion assets.
                    </p>

                {/* <a href="" target="_blank" className="bg-gray-500 text-white font-small py-2 px-2  mr-2 mt-2 rounded-md" >Site</a> */}
                    <a href="https://github.com/sanamumer/nftmarketplace" target="_blank" className="bg-gray-500 text-white font-small py-2 px-2 rounded-md">Code</a>
                </div>

                <div className="md:mt-2 md:w-1/2 p-4">
                    <h3 className="text-2xl text-500 mb-8">FabFashion - Supplychain of Luxury Fashion Items</h3>
                    <img src="https://techmonitor.ai/wp-content/uploads/sites/4/2022/10/shutterstock_2192732633-scaled.jpg" alt=" Landing Page" />
                    <p className="text-xl text-gray-500 mb-8">FabFashion is a blockchain based application built to track luxury fashion Items.
                    Leveraging the power of Hyperledger Fabric, FabFashion aims to enhance transparency, traceability, and authenticity within the supply chain
                    of luxury fashion items. The project focuses on enabling secure and efficient tracking of products from their creation to the end consumer,
                     ensuring the integrity of luxury fashion brands and providing customers with confidence in their purchases.

                    </p>

                    <a href="https://gitlab.com/fabricdev/SanaMUmmer_ClassyFab" target="_blank" className="bg-gray-500 text-white font-small py-2 px-2 rounded-md">Code</a>
                </div>

                <div className="md:mt-2 md:w-1/2 p-4">
                    <h3 className="text-2xl text-500 mb-8">NFT Land Marketplace</h3>
                    <img src="https://zipmex.com/static/e45bd0df2a58aa12c9a800ed5940ab56/1bbe7/NFT-Minting.jpg" alt="Landing Page" />
                    <p className="text-xl text-gray-500 mb-8">NFT Land Marketplace is a decentralized land marketplace built on the Ethereum blockchain. 
                    The platform aims to provide a secure, transparent, and efficient solution for buying, selling, and trading land assets via bidding.
                     Leveraging the capabilities of smart contracts and blockchain technology, enables participants to conduct land transactions with trust, immutability, and minimal intermediaries.
                    </p>
                    <a href="https://github.com/sanamumer/LandMarketplace" target="_blank" className="bg-gray-500 text-white font-small py-2 px-2  rounded-md">Code</a>
                </div>


                <div className="md:mt-2 md:w-1/2 p-4">
                    <h3 className="text-2xl text-500 mb-8">Portfolio Site</h3>
                    <img src='/port.png' alt="Market Landing Page" />
                    <p className="text-xl text-gray-500 mb-8">My custom portfolio site I built from scratch with Next JS & Tailwind CSS.
                    </p>
                    <a href="https://github.com/sanamumer/portfolio" target="_blank" className="bg-gray-500 text-white font-small py-2 px-2 rounded-md">Code</a>
                </div>

            </div>
     </div>
   </div>
  )
}
