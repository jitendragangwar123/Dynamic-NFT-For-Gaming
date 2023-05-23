const {Revise}= require("revise-sdk");
const AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA5OTVkZTEwLTBiM2MtNDVkYi1hMTZkLWY2MGVlNTYxMDQ5ZSIsImtleSI6IjAzanJldnlpIiwiaWF0IjoxNjg0ODI2MDcxfQ.GuIGAqRpYCQUN4oEMsfr2iCjKyEMlsP89AG9M-ONOrI";

const revise=new Revise({auth:AUTH_TOKEN});

async function AddNFT(){
    const collection =await revise.addCollection(
        {
            name:"Gaming Character",
            uri:"jaygangwargamingcharactersforshootinggame99999998"
        }
    )

    const nft=await revise.addNFT({
        image:"https://ipfs.io/ipfs/QmQGD89rmLQ67eoJ8ATc7QiT4iDo7tAgAeGf4QSRcF8uQ2?filename=angry.jpg",
        name:"Gordon Freeman",
        tokenId:'1',
        description:"He is a famous Shooting Game Character!"
    },[{mood:'angry'},{stamina: "100"},{level:"2"}],
        collection.id
    );
    console.log("Created NFT Successfully, ID: ",nft);
}

AddNFT()