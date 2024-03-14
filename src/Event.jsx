

const Event = () => {

    // let handleOnClick = ()=>{
    //     console.log("Button Clicked....")
    // } 

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log("form submitted")
        console.log(event)
    }

  return (
    <>

    {/* <button onClick={handleOnClick}>Click Me</button> */}
    
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search anything you want"/>
        <button>Submit Now</button>
    </form>


    </>
  )
}

export default Event