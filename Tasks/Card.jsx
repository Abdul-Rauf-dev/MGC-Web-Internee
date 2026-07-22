export default function Card({name , age ,gendar}) {




    return (
        <>
<h2>Task</h2>
<div style={{height:'150px', width:'150px', gap:'10px', backgroundColor:"lightblue", justifyContent:"space-between", flexDirection:"row"}}>
<h2> name:{name}</h2>
<h2> age:{age}</h2>
<h2> gendar:{gendar}</h2>

</div>
        </>



    )

}