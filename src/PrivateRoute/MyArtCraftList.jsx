import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


const MyArtCraftList = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const [items, setItem] = useState([]);
    const [control, setControl] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:5000/myItem/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                console.log(data);
            })
    }, [user, control])

    //delete item
    const handleDeleteItem = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${id}`, {
                    method: 'DELETE',
        
                })
                .then((res) => res.json())
                .then((data) => {
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        setControl(!control)
                    }
                })
            }
          });
        
    }

    return (

        <div className="mt-4">
            <h3 className="text-center text-2xl font-semibold">My Art & Craft List</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                items?.map(item => (
                    <div key={item._id} className="my-10  flex justify-center ">
                        <div className="card w-96 bg-base-100 shadow-xl ">
                            <figure><img src={item.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {item.itemName}
                                    <div className="badge badge-secondary">{item.price} $</div>
                                </h2>
                                <p className="flex items-center gap-1">Customization:  {item.customization}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">
                                    <p className="flex items-center gap-1"> {item.rating} <FaStar /></p>
                                    </div>
                                    <div className="badge badge-outline">{item.stockStatus}</div>
                                </div>
                                <div className="flex justify-between mt-4">
                                   <Link to={`/updateItem/${item._id}`}>
                                   <button className="btn">Update</button>
                                   </Link>
                                    <button onClick={()=>handleDeleteItem(item._id)} className="btn">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>

        </div>
    );
};

export default MyArtCraftList;