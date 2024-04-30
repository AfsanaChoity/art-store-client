import { Link, useLoaderData } from "react-router-dom";


const ArtCraftItems = () => {
   
    const loadedItems = useLoaderData();
    // if ( loadedItems === null) {
    //     return <div className="text-center mt-20"><span className=" loading loading-spinner loading-lg"></span></div>
    // }
    console.log(loadedItems);
    return (
        <div className="my-10 mx-10">
            <h2 className="text-2xl font-bold text-center mb-4">Total Item : {loadedItems.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            loadedItems.map(item => <tr key={item._id} >

                                <td>
                                    <div className="flex items-center gap-3">

                                        <div>
                                            <div className="font-bold">{item.itemName
                                            }</div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    
                                    <span className="badge badge-ghost badge-sm">{item.price} $</span>
                                </td>
                                <td>{item.stockStatus}</td>
                                <th>
                                    <Link to={`/detailsItem/${item._id}`}>
                                    <button className="btn btn-ghost btn-xs">View Details</button>
                                    </Link>
                                </th>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ArtCraftItems;