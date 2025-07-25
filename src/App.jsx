import { useState } from "react"
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const App = () => {

  const [isVisible, setIsVisible] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <div>
    <div className="flex flex-col h-[50vh] justify-center items-center gap-4 bg-gradient-to-tr from-gray-500 to-gray-700">
      <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent text-3xl 
      ">Gradient Color</h1>
      <button className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 transition-all text-white px-4 py-2 rounded cursor-pointer">
        Hover Me
      </button>
    </div>
    <div className="flex flex-col items-center justify-center bg-gray-100 font-sans h-[50vh]">
      <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent text-3xl mb-6
      ">Ternary Operator Usage</h1>
      <button
        onClick={() => setIsVisible(preve => !preve)}
        className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300 mb-6 cursor-pointer"
      >
        Click Me!
      </button>

      <p
        className={`text-xl font-semibold transition duration-300 ${
          isVisible ? "text-green-600" : "text-red-500"
        }`}
      >
        {isVisible ? "✅ Visible: True" : "❌ Visible: False"}
      </p>
    </div>
    <div className="h-[50vh] flex flex-col justify-center items-center bg-blue-200 px-4">
      <div className="w-full max-w-sm">
        <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent text-3xl mb-6
      ">Password Visibility Toggle</h1>
        <p className="mb-2 text-lg font-medium text-gray-700">Password</p>

        <div className="relative">
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full px-4 py-3 pr-12 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition"
          />

          <div
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
          >
            {isPasswordVisible ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
