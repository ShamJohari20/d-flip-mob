import '../css/mobile.css'


const Laptop = (props)=>{
    return(
    <>
        <div className="parent">
            <div className="child1">
                <img src={props.img} alt="" width={300}/>

            </div>

            <div className="child2">
                <h1>{props.name}</h1>
                <ul>
                    <li>{props.f1}</li>
                    <li>{props.f2}</li>
                    <li>{props.f3}</li>
                    <li>{props.f4}</li>
                    <li>{props.f5}</li>
                </ul>

            </div>

            <div className="child3">
            <div id='price'>
                        <h1>₹{props.price}</h1>
                        <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png' width='60'/>
                    </div>
                       <div id='max-price'>
                            <p id='ac-price'>₹{props.aprice}</p>
                            <span>{props.per}% Off</span>
                       </div>


                       <p>Free Delivery</p>
                       <p> Upto ₹{props.free}Off on Exchange</p>

            </div>

        </div>
    </>)
}
export default Laptop