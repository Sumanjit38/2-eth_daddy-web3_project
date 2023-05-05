// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ETHDaddy is ERC721 {

    address public owner;
    //string public name = "ETH Daddy";
    //string public symbol = "ETHD";

    //string public name = "ETH Daddy";
    //string public symbol = "ETHD";

    //TO DO
    /// 1. List domains
    /// 2. Buy domains
    /// 3. Get paid

    struct Domain {
        string name;
        uint256 cost;
        bool isOwned;
    }

    mapping(uint256 => Domain) public domains;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
        //name = "ETH Daddy";
        //name = _name;
        //symbol = _symbol;

        // add code here ....

        owner = msg.sender;
    }
    function list(string memory _name, uint256 _cost) public {
        // code goes here...

        // Model a domain
        domains[1] = Domain(_name, _cost, false);
        // Save the domain
        // update total domain count

    }
}