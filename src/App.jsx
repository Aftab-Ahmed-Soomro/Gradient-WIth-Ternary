import { useState } from "react"

const App = () => {

  const [isVisible, setIsVisible] = useState(false)

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
    </div>
  )
}

export default App
