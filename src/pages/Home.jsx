import { Link } from "react-router"

export const Home = () => {
  return (
    <div className="text-center">
        <div className="mt-4">
          <h1 className="text-3xl font-bold mb-6">Welcome to Recipe Book</h1>
          <p className="text-gray-600 text-xl mb-8"> Discover delicious recipes and start cooking today!</p>
          <div className="grid grid-cols-2  gap-5 max-w-2xl mx-auto">
            <Link 
            to='recipes'
            className="bg-rose-600 p-6 text-white rounded shadow"
            >
                <h2 className="text-2xl font-bold mb-2">Browser Recipe</h2>
                   <p>Explore our collection of delicious recipes</p>
            </Link>
            <Link 
            to='catogories'
            className="bg-rose-600 p-6 text-white rounded shadow"
            >
                      <h2 className="text-2xl font-bold mb-2">Recipe Categories</h2>
          <p>Find recipes by category</p>
            </Link>
          </div>
        </div>
    </div>
  )
}
