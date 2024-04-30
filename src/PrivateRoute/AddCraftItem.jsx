import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const AddCraftItem = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);

    const handleAddItem = (e) =>{
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
        const email = user.email? user.email : form.email.value;
        const name = user.displayName? user.displayName: form.name.value;
        const description = form.description.value;

        // console.log(itemName, photo, subcategory, price, rating, customization, processingTime, stockStatus, email, name, description);

        const itemInfo = {itemName, photo, subcategory, price, rating, customization, processingTime, stockStatus, email, name, description};

        // console.log(itemInfo);

        fetch("http://localhost:5000/addItem", {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(itemInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data?.insertedId){
                    toast('Item has been added!')
                    e.target.reset();
                }
            })

    }
    return (
        <div className="my-10">
            <h2 className="text-center text-2xl font-bold mb-8">Add Your Favourite Craft Item Here!</h2>

          <div className="flex justify-center">
          <form onSubmit={handleAddItem} className="grid grid-cols-2 lg:grid-cols-3 gap-4" action="">
                <div className="">
                    <label>Item Name</label>
                    <br />
                    <input type="text" name="itemName" className="rounded p-4 mt-2 text-xs" placeholder="Enter item name" required/>
                </div>
                <div className="">
                    <label>Photo URL</label>
                    <br />
                    <input type="text" name="photo" className="rounded p-4 mt-2 text-xs" placeholder="Enter Photo URL of Item" required/>
                </div>
                <div className="">
                    <label>Subcategory</label>
                    <br />
                    <input type="text" name="subcategory" className="rounded p-4 mt-2 text-xs" placeholder="Subcategory name" required/>
                </div>
               
                <div className="">
                    <label>Price</label>
                    <br />
                    <input type="text" name="price" className="rounded p-4 mt-2 text-xs" placeholder="0$" required/>
                </div>
                <div className="">
                    <label>Rating</label>
                    <br />
                    <input type="text" name="rating" className="rounded p-4 mt-2 text-xs" placeholder="1 to 5" required/>
                </div>
                <div className="">
                    <label>Customization</label>
                    <br />
                    <input type="text" name="customization" className="rounded p-4 mt-2 text-xs" placeholder="Yes or No" required/>
                </div>
                <div className="">
                    <label>Processing Time</label>
                    <br />
                    <input type="text" name="processingTime" className="rounded p-4 mt-2 text-xs" placeholder="in days" required/>
                </div>
                <div className="">
                    <label>Stock Status</label>
                    <br />
                    <input type="text" name="stockStatus" className="rounded p-4 mt-2 text-xs" placeholder="In stock / Made to Order" required/>
                </div>
                <div className="">
                    <label>User Email</label>
                    <br />
                    <input type="email" name="email" className="rounded p-4 mt-2 text-xs" placeholder="Enter your email" defaultValue={user.email} required/>
                </div>
                <div className="">
                    <label>User Name</label>
                    <br />
                    <input type="text" name="name" className="rounded p-4 mt-2 text-xs" placeholder="Enter your name" defaultValue={user.displayName} required/>
                </div>
                <div className="grid col-span-2">
                    <label>Description</label>
                    
                    <input type="text" name="description" className="rounded p-4 mt-2 text-xs" placeholder="Describe your item"  required/>
                </div>
                
                
                <button type="submit" className="btn "> Add</button>
                
           </form>
          </div>
          <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddCraftItem;