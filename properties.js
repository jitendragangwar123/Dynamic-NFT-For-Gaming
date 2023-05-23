const {Revise}= require("revise-sdk");
const AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA5OTVkZTEwLTBiM2MtNDVkYi1hMTZkLWY2MGVlNTYxMDQ5ZSIsImtleSI6IjAzanJldnlpIiwiaWF0IjoxNjg0ODI2MDcxfQ.GuIGAqRpYCQUN4oEMsfr2iCjKyEMlsP89AG9M-ONOrI";

const revise=new Revise({auth:AUTH_TOKEN});

const API=async function(){
  const options=[
      {
          mood:'Angry',
          stamina: "100",
          level:"2",
          image:"https://ipfs.io/ipfs/QmQGD89rmLQ67eoJ8ATc7QiT4iDo7tAgAeGf4QSRcF8uQ2?filename=angry.jpg",

      },
      {
          mood:'Happy',
          stamina:"200",
          level:"3",
          image:"https://ipfs.io/ipfs/QmSNwFe1KrYX5XdZNbo56DX2AuwEG81R1jKUiYewKLDSfP?filename=happy.jpg",

      },
      {
          mood:'Shy',
          stamina:"300",
          level:"4",
          image:"https://ipfs.io/ipfs/QmcJcrZdVQfqhYagVngHmwBL7HzLuXMqcLvYrEusdZmug3?filename=shy.jpg",
      },
  ]

  const randomIndex = Math.floor(Math.random() * 3)
  return options[randomIndex]
}

async function run() {
  revise
    .every('2m')
    .listenTo(API)
    .start(async (data) => {
      const Gordon = await revise.fetchNFT(
        'c8b07576-b310-421a-947a-02b083fbd0c7',
      )

      revise
        .nft(Gordon)
        .setProperty('mood', data.mood)
        .setProperty('stamina', data.stamina)
        .setProperty('level', data.level)
        .setImage(data.image)
        .save()

    console.log(`Current mood is : ${data.mood},stamina is : ${data.stamina} and level is : ${data.level} of Gordon Freeman!`)
  })
}

run()