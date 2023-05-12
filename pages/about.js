
const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Node Js" },
  { skill: "Express Js" },
  { skill: "MongoDb" },
  { skill: "Solidity" },
  { skill: "React Js" },
  { skill: "Next Js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "Truffle" },
  { skill: "Hardhat" },
  { skill: "Ethereum" },
  { skill: "Web3 Js" },
  { skill: "Ethers Js" },
  { skill: "Hyperledger Fabric" },
]
export default function About() {
  return (
   <div id='about'>
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mt-16 md:mt-24 mb-8">
        About me
      </h1>
      <p className="text-xl text-gray-500 mb-8">
      I am a blockchain developer with expertise in smart contract development, decentralized applications, and blockchain protocols. I am a passionate blockchain enthusiast who is driven to create innovative solutions that leverage the power of blockchain technology.
    I have participated in several hackathons and contributed to open-source blockchain projects. I have a strong understanding of Solidity, Ethereum, and Hyperledger Fabric.
    I am confident that I can use my skills and experience to help you achieve your blockchain goals.
<br></br><br></br> If you are looking for a skilled blockchain developer, please feel free to contact me.
      </p>
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mt-16 md:mt-24 mb-8">
        Skills
      </h1>
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
     </div>
  )
}
