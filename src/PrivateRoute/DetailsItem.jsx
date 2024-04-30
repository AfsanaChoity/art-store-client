import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";


const DetailsItem = () => {
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
    return (
        <div className="m-10">
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={item.photo} alt="img" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl font-bold leading-none lg:text-5xl">{item.itemName}
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">{item.description}
                        </p>
                        <div className="flex justify-between  mb-4">
                        <p className="bg-gray-200 px-3 rounded-full text-[16px] font-medium opacity-65 flex items-center gap-1">{item.rating} <FaStar /></p>
                        <p  className="bg-gray-200 px-3 rounded-full text-[16px] font-medium opacity-65">{item.price} $</p>
                        <p  className="bg-gray-200 px-3 rounded-full text-[16px] font-medium opacity-65">{item.stockStatus}</p>
                        </div>

                        <div className="flex justify-between mt-2">
                        <p className="font-bold">Subcategory: {item.subcategory} </p>
                        <p className="font-bold">Customization: {item.customization}</p>
                        
                        </div>
                        {/* <p>{singleCard.facilities}</p> */}
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailsItem;