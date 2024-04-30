import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleRegister = e => {
        e.preventDefault();



        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);

        if (password.length < 6) {
            setError("Password must be 6 characters")
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            setError("Password must contain one uppercase letter & one lowercase letter")
            return;
        }

        //user created i firebase
        createUser(email, password)
            .then(result => {
                // console.log(result.user);

                //update user profile
                updateUserProfile(name, photo)
                    .then(() => {
                        console.log("updated successful");
                    })

                //new user created in database
                const createdAt = result.user?.metadata?.creationTime;
                const user = { name, photo, email, createdAt: createdAt };

                fetch(' https://art-store-server-a4n4s1zml-afsana-mimi-choitys-projects.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            toast("Registration Successful!")
                            e.target.reset();
                        }

                    })
            })
            .catch(error => {
                setError(error.message.split("/")[1].split(")")[0]);
            })

        setError('');
    }
    return (
        <div className="flex justify-center my-10">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Please Register!</h1>

                </div>
                <form onSubmit={handleRegister} noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Name</label>
                            <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Photo URL</label>
                            <input type="text" name="photo" id="photo" placeholder="Your Photo" className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="abc@gmail.com" className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>

                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        {/* show error message */}
                        <div>
                            {
                                error && <span className="text-red-500">{error}</span>
                            }
                        </div>
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">Register</button>
                        </div>
                        <p className="px-6 text-sm text-center text-gray-400 dark:text-gray-600">Already have account?
                            <NavLink to='/login' rel="noopener noreferrer" className="hover:underline text-violet-400 dark:text-violet-600 ml-2">Login</NavLink>
                        </p>
                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;