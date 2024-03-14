

const Card = ({userName, address, mobile,}) => {
  return (
    // let style=(
    //   color :color;
    // )
    <div className="bg-green-300 h-48 w-48 border-2 border-gray-950 rounded-xl shadow-xl shadow-black m-8 items-center">
        <h1>Name : {userName}</h1>
        <p>address : {address}</p>
        <p>mobileNo : {mobile}</p>
    </div>
  )
}

export default Card