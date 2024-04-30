import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const UpdateItem = () => {


    const { id } = useParams();
    console.log(id);

    const [item, setItem] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/singleItem/${id}`)
        .then(res => res.json())
        .then(data => {
            setItem(data)
            console.log(data)
        })
    }, [id])


    const handleUpdateItem = (e) =>{
        e.preventDefault();
        

        const form = e.target;

        const itemName = form.itemName.value;
        const photo = form.photo.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        
        const description = form.description.value;

        
        const info = {itemName, photo, subcategory, price, rating, customization, processingTime, stockStatus, description};

        console.log(info);

        //update to database
        fetch(`http://localhost:5000/updateitem/${id}`,{
            method:"PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(info)
        })
            
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast("Updated Successfully!")
            }
        })



    }
    return (
        <div className="my-10">
            <h2 className="text-center text-2xl font-bold mb-8">You Can Update Your Item Here!</h2>
            <div className="flex justify-center">
          <form onSubmit={handleUpdateItem} className="grid grid-cols-2 lg:grid-cols-3 gap-4" action="">
                <div className="">
                    <label>Item Name</label>
                    <br />
                    <input type="text" name="itemName" className="rounded p-4 mt-2 text-xs" placeholder="Enter item name" defaultValue={item.itemName} required/>
                </div>
                <div className="">
                    <label>Photo URL</label>
                    <br />
                    <input type="text" name="photo" className="rounded p-4 mt-2 text-xs" placeholder="Enter Photo URL of Item" defaultValue={item.photo} required/>
                </div>
                <div className="">
                    <label>Subcategory</label>
                    <br />
                    <input type="text" name="subcategory" className="rounded p-4 mt-2 text-xs" placeholder="Subcategory name" defaultValue={item.subcategory} required/>
                </div>
               
                <div className="">
                    <label>Price</label>
                    <br />
                    <input type="text" name="price" className="rounded p-4 mt-2 text-xs" placeholder="0$" defaultValue={item.price} required/>
                </div>
                <div className="">
                    <label>Rating</label>
                    <br />
                    <input type="text" name="rating" className="rounded p-4 mt-2 text-xs" placeholder="1 to 5" defaultValue={item.rating} required/>
                </div>
                <div className="">
                    <label>Customization</label>
                    <br />
                    <input type="text" name="customization" className="rounded p-4 mt-2 text-xs" placeholder="Yes or No" defaultValue={item.customization} required/>
                </div>
                <div className="">
                    <label>Processing Time</label>
                    <br />
                    <input type="text" name="processingTime" className="rounded p-4 mt-2 text-xs" placeholder="in days" defaultValue={item.processingTime} required/>
                </div>
                <div className="">
                    <label>Stock Status</label>
                    <br />
                    <input type="text" name="stockStatus" className="rounded p-4 mt-2 text-xs" placeholder="In stock / Made to Order" defaultValue={item.stockStatus} required/>
                </div>
               
                
                <div className="grid col-span-2">
                    <label>Description</label>
                    
                    <input type="text" name="description" className="rounded p-4 mt-2 text-xs" placeholder="Describe your item" defaultValue={item.description} required/>
                </div>
                
                
                <button type="submit" className="btn "> Update</button>
                
           </form>
          </div>
          <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateItem;