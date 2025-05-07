import Form from "./components/Form"

function App() {

  return (
    <>
     <header className="bg-lime-600 py-3">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-white uppercase font-bold text-center text-lg ">
          Calorietracker
        </h1>
      </div>
     </header>
     <section className="bg-yellow-200 py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <Form />
      </div>
     </section>
    </>
  )
}

export default App
