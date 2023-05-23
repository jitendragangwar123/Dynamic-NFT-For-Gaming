// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
        
contract StaticNFT is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;
    constructor() ERC721("GamingCharacter","GIC"){}
    function awardItem(
        address plyaer,
        string memory tokenURI) 
        public returns(uint){
            uint tokenId=_tokenIds.current();
            _mint(plyaer,tokenId);
            _setTokenURI(tokenId,tokenURI);
            _tokenIds.increment();
            return tokenId;
        }    
    }