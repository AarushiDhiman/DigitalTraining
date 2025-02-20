import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function ProductDetails() {
    const {id} = useParams();   //it will get the data from URL Parameters
    const [products,setProducts]=useState(null);
    
    const fetchData=async()=>{
        try{
            const resp = await axios.get('https://dummyjson.com/products/'+id);
            // console.log(resp)
            setProducts(resp.data)
        }catch(error){
            console.log(error)
        }
    }
    //this effect will execute only one when the component load
    useEffect(()=>{
        fetchData();
    },[])
    return ( 
       <div>
        {
            products &&
        <div>
            <h3> {products.title}</h3>
            <img src={products.thumbnail} />
            <p>{products.description}</p>
            <p>Category: {products.category}</p>
            <h5>Reviews</h5>
            {
                products.reviews.map(review=>(
                    <div>
                        <p>
                            Rating: {review.rating} <br/>
                            comment: {review.comment}<br/>
                            User Name: {review.reviewerName} <br/>
                            Date: {review.date}
                        </p>
                        <hr/>
                    </div>
                ))
            }
        </div>
        }
       </div>
     );
}

export default ProductDetails;