import Card from "./src/Card"

const CardTab = () => {
  return (
    <div className="flex justify-center content-center items-center">
        <Card userName= "Rajeev" address= "Mohali" mobile= {+9100000000}/>
        <Card userName= "Shivangi" address= "Mohali" mobile= {+9100000000}/>
       <Card userName= "Sahil" address= "Mohali" mobile= {+9100000000}/>
        <Card userName= "Vaibhav" address= "Mohali" mobile= {+9100000000}/>
    </div>
  )
}

export default CardTab