import React, { useContext, useState } from 'react'
import '../Pages/CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Item/Item'
import { useEffect } from 'react'


const ShopCategory = (props) => {  //getting props from app.js

    const [products, setproducts] = useState([]);
    console.log(products)
    const fetchallproducts = async () => {
        await fetch('http://localhost:5000').then((response) => {
            if (!response) {
                throw new Error('Failed to fetch newcollection');
            }
            return response.json();
        }).then((data) => {
            let newprods = { ...products };
            newprods = data
            setproducts(data.products)
            console.log(products)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchallproducts();
    }, [])

    // const { all_products } = useContext(ShopContext)

    return (
        <div className='shopcat'>

            <div className='banimg'>
                <img src={props.banner} alt='' ></img>
            </div>
            <div className="index">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="sort">
                    <button>Sort <img src={dropdown_icon}></img></button>
                </div>
            </div>


            <div className="prods">
                {products.map((val, index) => {
                    if (val.category == props.category) {
                        return <Item key={index} id={val.id} name={val.name} image={val.image} new_price={val.new_price} old_price={val.old_price} />
                    }
                })}
            </div>


            <div className='load'>
                <button>Explore</button>
            </div>
        </div>
    )
}

export { ShopCategory }