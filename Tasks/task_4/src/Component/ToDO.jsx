export default function ToDo({item ,Deletekro}) {

    return (
        <>
            <div style={{ backgroundColor: "lightblue", width: '250px', height: '250px' }} >


                <h1>Title:{item.Title}</h1>
                <h1>Description:{item.Description}</h1>

                <button onClick={Deletekro}>Delete</button>
            </div>
        </>


    )

}