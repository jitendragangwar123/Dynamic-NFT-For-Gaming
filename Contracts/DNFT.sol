// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyDNFT is ERC721 {

    string baseuri;
    constructor(string memory _baseuri) 
    ERC721("RVDNFT", "RVD")  
    {
        baseuri = _baseuri;
    }

    function mint(address to, uint256 tokenId) 
        public  
    {
        _safeMint(to, tokenId);
    }

    function _baseURI() 
        internal 
        view 
        override(ERC721) 
        returns (string memory)  
   {
        return baseuri;
    }
}