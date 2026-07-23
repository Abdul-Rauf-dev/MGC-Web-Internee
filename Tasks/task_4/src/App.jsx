import { useState } from "react"
import ToDo from "./Component/ToDO"

export default function App() {


  let [Title, TitleSet] = useState(``)
  let [Description, DesccriptionSet] = useState(``)
  let [Text, TextSet] = useState([
    {
      Title: "Emp name",
      Description: "Assistantt"
    },
    {
      Title: "Emp name",
      Description: "Hr"
    },
    {
      Title: "Emp name",
      Description: "manager"
    },
    {
      Title: "Emp name",
      Description: "Stock cnt"
    }
  ])

  let text = Text.map((item, index) => <ToDo key={index} item={item} Deletekro={() => Deletekro(index)} />)
  function Addkro() {
    let item =
    {
      Title: Title,
      Description: Description
    }
    console.log(item);


    TextSet(prev => [...prev, item])

    
  }

  function Deletekro(index) {
    let i = index
    console.log(index);
    let newlist = Text.filter((item, index) => !(index == i))
    console.log(newlist)
    TextSet(newlist)
  }



  return (



    <>
      <input type="text" value={Title} onChange={(e) => TitleSet(e.target.value)} />
      <input type="text" value={Description} onChange={(e) => DesccriptionSet(e.target.value)} />
      <button onClick={Addkro}>Add</button>
      

      {text}
    </>
  )

}