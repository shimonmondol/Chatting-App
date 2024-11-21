import React, {useState} from 'react'
import { MdError } from "react-icons/md";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    let [email, setEmail] = useState('');
    let [name, setName] = useState('');
    let [password, setPassword] = useState('');
    let [emailerror, setEmailerror] = useState('');
    let [nameerror, setNameerror] = useState('');
    let [passworderror, setPassworderror] = useState('');
    let [showpassword, setShowpassword] = useState(false);


    let handleEmail =(e)=>{
        setEmail(e.target.value)
        setEmailerror('')
    }
    let handleName =(e)=>{
      setName(e.target.value)
      setNameerror('')
    }
    let handlePassword =(e)=>{
        setPassword(e.target.value)
        setPassworderror('')
    }
    let handleLogin =()=>{
        if(!email){
          setEmailerror('Email is Required');
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
          setEmailerror ('Invalid Email');
        }
        if(!name){
          setNameerror('Name is Required');
        }
        if(!password){
            setPassworderror('Password is Required');
        } 
        else if(email && password && name && !emailerror){
          
          setEmail('')
          setName('')
          setPassword('')

          toast.success('Login Successful', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        }
    }

    let handleShowPassword =()=>{
        setShowpassword(!showpassword)
    }

  return (
    <>
      <div className='flex w-[100%]'>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome to Our Chatting App
          </h2>
          <h2 className='mt-3 text-teal-500 text-5xl font-bold leading-9 tracking-tight'>ChatGear</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={handleEmail}
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  placeholder='Enter Your Email'
                  className="block px-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {emailerror &&
                <div className='flex items-center justify-between mt-2 ml-1'>
                   <p className='text-red-500 font-bold text-md'>{emailerror}</p>
                   <MdError className='text-red-500' />
                </div>
                }  
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  onChange={handleName}
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  placeholder='Enter Your Name'
                  className="block px-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {nameerror &&
                <div className='flex items-center justify-between mt-2 ml-1'>
                   <p className='text-red-500 font-bold text-md'>{nameerror}</p>
                   <MdError className='text-red-500' />
                </div>
                }  
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  onChange={handlePassword}
                  id="password"
                  name="password"
                  type={showpassword ? 'text' : 'password' }
                  value={password}
                  placeholder='Enter Your Password'
                  className="block px-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {showpassword ?
                <IoIosEye onClick={handleShowPassword} className='absolute text-2xl top-2 right-5' />
                :<IoIosEyeOff onClick={handleShowPassword} className='absolute text-2xl top-2 right-5' />
                }               
                {passworderror &&
                <div className='flex items-center justify-between mt-2 ml-1'>
                  <p className='text-red-500 font-bold text-md'>{passworderror}</p>
                  <MdError className='text-red-500' />
                </div>
                }
              </div>
            </div>

            <div>
              <button
                onClick={handleLogin}
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#5F35F5] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
          </div>
          <div className='w-[50%] h-[550px]' >
            <img src="/public/Chatting-app.jpg" alt="" />
          </div>
      </div>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClickrtl={false}
          pauseOnFocusLoss draggable pauseOnHover theme="colored"
          transition= {Bounce}
      />
    </>
  )
}

export default Login