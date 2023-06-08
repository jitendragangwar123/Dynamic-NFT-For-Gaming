const {Revise}= require("revise-sdk");
const AUTH_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA5OTVkZTEwLTBiM2MtNDVkYi1hMTZkLWY2MGVlNTYxMDQ5ZSIsImtleSI6Ink2OGQxY3B6IiwiaWF0IjoxNjg2MDUwNzY1fQ.G9sUzkOsKz3iCFmN1VAoCUut70MFZuqOYNJZSM0whD8";

const revise=new Revise({auth:AUTH_TOKEN});

const API=async function(){
  const options=[
      {
          mood:'Angry',
          stamina: "10",
          level:"1",
          image:"https://ipfs.io/ipfs/QmQGD89rmLQ67eoJ8ATc7QiT4iDo7tAgAeGf4QSRcF8uQ2?filename=angry.jpg",

      },
      {
          mood:'Happy',
          stamina:"20",
          level:"2",
          image:"https://ipfs.io/ipfs/QmSNwFe1KrYX5XdZNbo56DX2AuwEG81R1jKUiYewKLDSfP?filename=happy.jpg",

      },
      {
          mood:'Shy',
          stamina:"30",
          level:"3",
          image:"https://ipfs.io/ipfs/QmZJnWNaoLkTX1es1Ze146npAHcMdyqkhbH5XEY4qW8rF4?filename=hy.jpg",
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
        '757142d1-bda2-429b-8df2-f1ff63783f6d',
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