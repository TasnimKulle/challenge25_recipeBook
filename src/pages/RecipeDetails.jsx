import React from 'react'
import { Link, useParams } from 'react-router'

export const RecipeDetails = () => {
    const {recipeId}=useParams()
     const recipe = {
     recipeId,
    title: 'Sample Recipe',
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake at 350°F for 25 minutes'
    ]
  };

  return (
    <div className='max-w-4xl mx-auto bg-white shadow rounded mt-4 p-6'>
        <Link 
        to='/recipes'
        className="text-rose-600 hover:text-rose-700 inline-block "
        >
             ← Back to Recipes
        </Link>
        <h2 className="text-3xl font-bold mb-6">{recipe.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h3  className="text-xl font-semibold mb-4">Ingredients</h3>
                <ul className='list-disc list-inside space-y-2'
                 >
                    {
                        recipe.ingredients.map((ingredient,index)=>(
                            <li key={index}>
                                {ingredient}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-4">Instructions</h3>
                <ol className='list-decimal list-inside space-y-2'>
                    {
                        recipe.instructions.map((steps,index)=>(
                            <li key={index}>{steps}</li>
                        ))
                    }
                </ol>
            </div>
        </div>
    </div>
  )
}
