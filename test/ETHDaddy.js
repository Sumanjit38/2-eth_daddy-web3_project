const { expect } = require("chai")
const { ethers } = require("hardhat")
const { string } = require("hardhat/internal/core/params/argumentTypes")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("ETHDaddy", () => {

  let ethDaddy
  let deployer, owner1
  
  const NAME = "ETH Daddy"
  const SYMBOL = "ETHD"

  beforeEach(async () => {
    //setup accounts
    [deployer, owner1] = await ethers.getSigners();

    //console.log(signers.length);
    //console.log(signers[0].address);
    //await ethers.getSigner();
    
    // deploy contract
    const ETHDaddy = await ethers.getContractFactory('ETHDaddy')
    ethDaddy = await ETHDaddy.deploy("ETH Daddy", "ETHD")

    const transaction = await ethDaddy.connect(deployer).list("jack.eth", tokens(10))
    await transaction.wait()

  })

  describe("Deployment", () => {
    
    it('has a name', async () => {
    
      const result = await ethDaddy.name()
      expect(result).to.equal(NAME)
  
    })
  
    it('has a symbol', async () => {
      
      const result = await ethDaddy.symbol()
      expect(result).to.equal(SYMBOL)
  
    })

    it('has a owner', async () => {
      
      const result = await ethDaddy.owner()
      expect(result).to.equal(deployer.address)
  
    })
  
  })

  describe("Domain",() => {
    it("Returns domain attriburtes", async () => {
      let domain = await ethDaddy.domains(1);
      expect(domain.name).to.be.equal("jack.eth")
    })
  })
  
})