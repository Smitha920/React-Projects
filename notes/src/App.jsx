import { useState } from "react"

const App = () => {

  
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault(e)

    const copyTask = [...task];
    copyTask.push({title, details})
    setTask(copyTask)
  

    setTitle('')
    setDetails('')
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex lg:w-1/2 items-start flex-col gap-5 p-10'>

        <h1 className="text-3xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes heading"
          className="px-5 w-full font-medium py-2 border-2 rounded outline-none"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}

        />

        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 font-medium w-full h-32 py-2 flex items-start flex-row border-2 rounded outline-none"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />

        <button className="bg-white w-full active:scale-95 text-black px-5 py-2 rounded">Add Notes</button>

      </form>

      <div className=" p-10 lg:border-l-2 lg:w-1/2">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex gap-5 flex-wrap mt-5 h-full overflow-auto">
          {task.map(function(elem, idx){
            return <div className="h-53 w-40 rounded-xl bg-white"></div>
          })}
       
        </div>

      </div>
    </div>
  )
}

export default App