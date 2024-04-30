import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const CraftItemSection = () => {
    const { user, loading } = useContext(AuthContext);
    // console.log(user);
    const [items, setItem] = useState([]);
    // const [control, setControl] = useState(false);
    


    useEffect(() => {
        fetch(`http://localhost:5000/myItem/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                // console.log(data);
            })
    }, [user])

    if ( loading) {
        return <div className="text-center mt-20"><span className=" loading loading-spinner loading-lg"></span></div>
    }

    return (
        <div>
             <div className="">
            
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
                                    <div className="flex justify-end mt-4">
                                    <Link to={`/detailsItem/${item._id}`}>
                                    <button className="btn">View Details</button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
        </div>
    );
};

export default CraftItemSection;