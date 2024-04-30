import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


const MyArtCraftList = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const [items, setItem] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [control, setControl] = useState(false);
    // const [selectedFilter, setSelectedFilter] = useState("all");




    useEffect(() => {
        fetch(` https://art-store-server-a4n4s1zml-afsana-mimi-choitys-projects.vercel.app/myItem/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setFilteredItems(data);
                // console.log(data);
            })
    }, [user, control])

    // // Filter
    // const handleFilterChange = (event) => {
    //     setSelectedFilter(event.target.value);
    //   };

    //   const filteredCraftItems = user
    //     ? items.filter((item) => item.email === user.email)
    //     : items; 

    //   const displayedCraftItems =
    //   selectedFilter === "all"
    //     ? filteredCraftItems
    //     : filteredCraftItems.filter((item) => item.customization === selectedFilter);


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
                fetch(` https://art-store-server-a4n4s1zml-afsana-mimi-choitys-projects.vercel.app/delete/${id}`, {
                    method: 'DELETE',

                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
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
    //search item
    const handleSearch = (value) => {

        if (value === "All") {
            // Show all items
            setFilteredItems(items);
        } else {
            // Filter items based on customization
            const filtered = items.filter(item =>
                item.customization.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredItems(filtered);
        }
    };


    return (

        <div className="mt-4">
            <h3 className="text-center text-2xl font-semibold">My Art & Craft List</h3>
            {/* drop down */}
            <div className="dropdown dropdown-bottom flex justify-center mb-40 mt-4">
                <div tabIndex={0} role="button" className="btn m-1">Search</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><button onClick={() => handleSearch("All")} className="btn mb-1">All</button></li>
                    <li><button onClick={() => handleSearch("Yes")} className="btn  mb-1">Yes (Customizable)</button></li>
                    <li><button onClick={() => handleSearch("No")} className="btn ">No (Not Customizable)</button></li>
                </ul>
            </div>

            {/* <div className="dropdown mb-10 border p-2 text-[#8F3034] font-bold text-xl">
            <select value={selectedFilter} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="yes">Yes (Customizable)</option>
              <option value="no">No (Not Customizable)</option>
            </select>
          </div> */}


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    filteredItems?.map(item => (
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
                                        <button onClick={() => handleDeleteItem(item._id)} className="btn">Delete</button>
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