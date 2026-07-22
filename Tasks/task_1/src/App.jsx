import Card from "./Component/Card";

export default function App() {
let User=[{
  name:"Rehman Ali",
  age:20,
  gendar:"male"
},
{
  name:"MUjahid",
  age:35,
  gendar:"male"
},
{
  name:"Rimsha Raiz",
  age:25,
  gendar:"female"
},
{
  name:" Ali",
  age:29,
  gendar:"male"
}]




  return (
    <>

<Card  name={User[0].name} age={User[0].age} gendar={User[0].gendar}/>
<Card  name={User[1].name} age={User[1].age} gendar={User[1].gendar}/>
<Card  name={User[2].name} age={User[2].age} gendar={User[2].gendar}/>
<Card  name={User[3].name} age={User[3].age} gendar={User[3].gendar}/>

    </>


  )

}