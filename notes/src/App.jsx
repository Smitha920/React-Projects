const App = () => {

  const submitHandler = (e) => {
    e.preventDefault(e)
    console.log("form submited")
  }
  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex lg:w-1/2 items-start flex-col gap-5 p-10'>
        <input
          type="text"
          placeholder="Enter Notes heading"
          className="px-5 w-full font-medium py-2 border-2 rounded outline-none"
        />
        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 font-medium w-full h-32 py-2 flex items-start flex-row border-2 rounded outline-none"
        />
        <button className="bg-white w-full text-black px-5 py-2 rounded">Add Notes</button>
      </form>
      <div className="flex p-5 flex-wrap bg-gray-900 lg:w-1/2">
      <h1>Your Notes</h1>
        <div className="h-32 w-32 rounded-2xl bg-white"></div>
      </div>
    </div>
  )
}

export default App