import React from 'react'

const style =(id)=>{
    if(id ==1 )
    {
        style.baground
    }
}
const Payment = (props) => {
    return (
        <div className='main'>
            {props.payment.map((payment) =>(
            <div className='main-card'>
                <div className='top'>
                    <p>{payment.date}</p>
                    <img src={payment.image} />
                </div>
                <button>Case Study</button>
                <h1>{payment.company}</h1>
                <h1>{payment.type}</h1>
                <p>{payment.product}</p>
            </div>
            ))};
        </div>
    );
};

export default Payment;