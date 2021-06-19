console.log("Happy hacking :) xd");

const url = "https://platzi-avo.vercel.app/api/avo";
const cajaDePaltas = document.querySelector('#app')

const formatPrice = (price) => {
    
    const newPrice = new window.Intl.NumberFormat("es-ES",{
        style: "currency",
        currency: "PEN",
    }).format(price)

    return newPrice
}

//1. Conectamos al server
window
  .fetch(url)
  //2. La promesa la convertimos en json
  .then((resolve) => resolve.json())
  //3. Lo obtenido es ahora Data con formato json
  .then((dataBase) => {
        let todosLosItems = []
      dataBase.data.forEach((element) => {

        //Crear lo necesario para Image, title, price

        //Image
        let image = document.createElement("img")
        image.src = "https://platzi-avo.vercel.app"+ element.image
        image.className =
      "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
        //Title
        let title = document.createElement("h2")
        title.textContent = element.name
        title.className = "text-lg"; 
        //Price
        let price = document.createElement("div")
        price.textContent = formatPrice(element.price)
        price.className = "text-gray-600";

        //Metemos lo creado en un div
        let container = document.createElement("div")

        container.append(image, title, price)

        todosLosItems.push(container)
        //console.log(todosLosItems)
    })
    //console.log(...todosLosItems);
    cajaDePaltas.append(...todosLosItems)

    }
    
  );

/*
Usando async y await

const url = "https://platzi-avo.vercel.app/api/avo";

//web api
async function fetchData() {
  const response = await fetch(url),
  data = await response.json(),
  allItems = [];

  data.data.forEach((item) => {
    // create image
    const image = document.createElement("img");
    // create title
    const title = document.createElement("h2");
    // create price
    const price = document.createElement("div");

    const container = document.createElement("div");
    container.append(image, title, price);

    allItems.push(container);
  });

  document.body.append(...allItems)
}

fetchData();
*/
