import { useState } from "react"
import Rauf2 from "./Component/Rauf2"

export default function () {

  let [name ,Nameset] = useState(``)
  let [price ,Priceset] = useState(``)
  let [description , descripSet] = useState(``)

  let [Product, Productset] = useState(

    [{
      name: "Watch",
      price: 200,
      description: "stylish"

    },
    {
      name: "Car",
      price: 500,
      description: "Remote Control"
    },
    {
      name: "Tracter",
      price: 400,
      description: "Engine"
    }
    ]
  )

  let product=Product.map((item, index) => <Rauf2 key={index} product={item} Product={() => Addkro(index)} />)

  function Addkro() {
    let item = {
      name: name,
      price: price,
      description: description
    }
    console.log(item);
    
    Productset(prev => [...prev, item])
   

  }

  return (
    <>
      <div style={{ backgroundColor: "skyblue", height: '170px', width: '170px', display: "flex" }}>

</div>





    {
      product
    }

      <input type="text" value={name} onChange={(e) => Nameset(e.target.value)} />
      <input type="text" value={price} onChange={(e) => Priceset(e.target.value)} />
      <input type="text" value={description} onChange={(e) => descripset(e.target.value)} />
      <button onClick={Addkro}>Add</button>



    </>
  )

}

