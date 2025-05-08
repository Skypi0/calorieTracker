import { categories } from "../data/categories"
export default function form() {
  return (
    <form className="space-y-5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="grid grid-cols-1 gap-4">
      <label htmlFor="category">Categoria:</label>
      <select name="category" id="category" className="border border-gray-200 rounded-lg p-2 w-full">
        {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>) } </select>
    </div>
    <div className="grid grid-cols-1 gap-4">
    <label htmlFor="activity">Actividad:</label>  
    <input type="text" name="activity" id="activity" className="border border-gray-200 rounded-lg p-2 w-full" placeholder="Ej: Correr"/>
    </div>
    <div className="grid grid-cols-1 gap-4">
    <label htmlFor="calories">Calorias:</label>  
    <input type="number" name="calories" id="calories" className="border border-gray-200 rounded-lg p-2 w-full" placeholder="Calorias Ej: 300 o 500"/>
    </div>
    <div className="flex justify-center flex-col items-center">
      <input type="submit" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg w-1/2 cursor-pointer" value={"Guardar"}/>
    </div>
    </form>
  )
}
