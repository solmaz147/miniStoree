
 /*  <div class="kart">
<img src="https://source.unsplash.com/random" alt="" id="image">
<p id="title">mehsulun adi</p>
<b id="price">qiymet</b>
</div>  */
const mehsullarinYerleweceyiDiv = document.querySelector(".products")



 window.addEventListener('load', melumatlariBackenddenGetir)


 async function melumatlariBackenddenGetir() { 
    const unvan = "https://fakestoreapi.com/products"



    try{
 const interneteCixiw = await fetch(unvan)
  console.log(interneteCixiw)
  const frontEndeGelecekMelumatlar = await interneteCixiw.json()
  console.log(frontEndeGelecekMelumatlar)

  for(let i=0; i<20; i++){ mehsullarinYerleweceyiDiv.innerHTML+=` 
  <div class="kart">
  <img src="${frontEndeGelecekMelumatlar[i].image}" alt="" id="image">
  <p id="title">"${frontEndeGelecekMelumatlar[i].title}</p>
  <b id="price">"${frontEndeGelecekMelumatlar[i].price}</b>
  </div>
  
  ` }
}



    catch(err) { console.log("serverde xeta yarandi" + err)

    }
    
 }


