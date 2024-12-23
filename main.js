fetch(`https://api-berita-indonesia.vercel.app/`)

.then((response) => response.json())
.then((res)=>{
   console.log(res)
   // res.forEach((r) => {
   //    let a = document.createElement("h1")
   //    a.textContent = r.name
   // });
})



