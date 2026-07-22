import Card from "./Component/Card";

export default function App() {
  let User = [{
    name: "Rehman Ali",
    age: 20,
    gendar: "male"
  },
  {
    name: "MUjahid",
    age: 35,
    gendar: "male"
  },
  {
    name: "Rimsha Raiz",
    age: 25,
    gendar: "female"
  },
  {
    name: " Ali",
    age: 29,
    gendar: "male"
  }]



  return (
    <>
      {
        User.map((User, index)=> <Card name={User.name} age={User.age} gendar={User.gendar} />)
}
      <Card />

    </>


  )

}