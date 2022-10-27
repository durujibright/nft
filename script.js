// var slide = 0;
// mySliderImage()

// function mySliderImage() {
//     var boxSlider = document.querySelectorAll('.slide');
//     for (var i = 0; i < boxSlider.length; i++) {
//         boxSlider[i].style.display = "none"
//     }

//     slide++;

//     if (slide > boxSlider.length) {
//         slide = 1;
//     }

//     boxSlider[slide - 1].style.display = "flex";
//     setTimeout(mySliderImage, 2000);
// }

// Setup: npm install alchemy-sdk
// Github: https://github.com/alchemyplatform/alchemy-sdk-js
// const options = { method: 'GET', headers: { accept: 'application/json' } }

// fetch(
//   'https://eth-mainnet.g.alchemy.com/nft/v2/demo/getNFTMetadata?contractAddress=0xe785E82358879F061BC3dcAC6f0444462D4b5330&tokenId=44&refreshCache=false',
//   options,
// )
//   .then((response) => response.json())
//   .then((response) => {
//     const metaData = response.metadata
//     console.log(metaData)
//   })
//   .catch((err) => console.error(err))

// all nfts
// const options = { method: 'GET', headers: { accept: 'application/json' } }

// fetch(
//   'https://eth-mainnet.g.alchemy.com/nft/v2/demo/getNFTs?owner=vitalik.eth&withMetadata=false',
//   options,
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err))

// const options = { method: 'GET', headers: { accept: 'application/json' } }

// fetch(
//   'https://eth-mainnet.g.alchemy.com/nft/v2/demo/getNFTsForCollection?contractAddress=0xe785E82358879F061BC3dcAC6f0444462D4b5330&withMetadata=false',
//   options,
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err))


// getnftmetadata

// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://eth-mainnet.g.alchemy.com/nft/v2/demo/getNFTMetadata?contractAddress=0xe785E82358879F061BC3dcAC6f0444462D4b5330&tokenId=44&refreshCache=false', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// getcontractmetadata
// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://eth-mainnet.g.alchemy.com/nft/v2/demo/getContractMetadata?contractAddress=0xe785E82358879F061BC3dcAC6f0444462D4b5330', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


// getnftscollection

// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://eth-mainnet.g.alchemy.com/nft/v2/demo/getNFTsForCollection?contractAddress=0xe785E82358879F061BC3dcAC6f0444462D4b5330&withMetadata=false', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// getownersfortoken

// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://eth-mainnet.g.alchemy.com/nft/v2/demo/getOwnersForToken?contractAddress=0xe785E82358879F061BC3dcAC6f0444462D4b5330&tokenId=44', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// getownersforcollection

// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://eth-mainnet.g.alchemy.com/nft/v2/demo/getOwnersForCollection?contractAddress=0xe785E82358879F061BC3dcAC6f0444462D4b5330&withTokenBalances=false', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


// getspamcontract

// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://eth-mainnet.g.alchemy.com/nft/v2/demo/getSpamContracts', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// isspamcontract

// reingestconytract

// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://eth-mainnet.g.alchemy.com/nft/v2/demo/reingestContract?contractAddress=0xe785E82358879F061BC3dcAC6f0444462D4b5330', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


// getfloorprice

// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://eth-mainnet.g.alchemy.com/nft/v2/demo/computeRarity?contractAddress=0xe785E82358879F061BC3dcAC6f0444462D4b5330&tokenId=44', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


// api handle

const options = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json', Authorization: 'eab74d47-f18c-443c-bc14-63cb9078e0d6' }
};

const nftSection = document.querySelector('#same')
nftSection.innerHTML = '';
const addr = ['0xa7a05e655cbed5356d2fa851e96f7f68e4a6f954', '0x401e9ae678cce4efccdb36b1adc61cdb14b522da','0xa7a05e655cbed5356d2fa851e96f7f68e4a6f954', '0x401e9ae678cce4efccdb36b1adc61cdb14b522da',]
for (var i = 0; i < addr.length; i++) {
  console.log(addr[i])
  //const contract = nfts.nfts[i].contract_address
  let img = desc = name = ''
    fetch(`https://api.nftport.xyz/v0/nfts/${addr[i]}?chain=ethereum`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        img = response.contract.metadata?.thumbnail_url
        desc = response.contract.metadata?.description
        name = response.contract?.name
        nftSection.innerHTML += `
     <div class="same">
                    <img src="${img}" alt="">
                    <div id="coiname"><h6>${name}</h6>
                        <li>$123.455</li>
                    </div>
                </div>
        `;
      })
      .catch(err => console.error(err));

}

  //  <div id="auct">
  //               <img id="meg" src="${img}" alt="">
  //               <h4>${name}</h4>
  //               <div id="nons">
  //                  <img id="gem" src="./img/image1.png" alt="">
  //                         <div class="mill lim"><li>david mill</li>
  //                          <li>$5.46eth</li></div>
                 
  //                       <div class="mill mil"><li>creator</li>
  //                       <li>$5.46eth</li></div>
  //                   </div>
  //               </div>
  //                   <button id="bargain"><i class="uil uil-money-stack"></i> bargain price</button>
  //           </div>