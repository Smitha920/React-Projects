import { useState } from "react"
import {X} from "lucide-react"

const App = () => {

  
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault(e)

    const copyTask = [...task];
    copyTask.push({title, details})
    setTask(copyTask)
    console.log(copyTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
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
        <div className="flex gap-5 flex-wrap items-start bg-cover justify-self-start mt-5 h-full overflow-[90%]">
          {task.map(function(elem, idx){
            return <div key={idx} className="h-53 relative w-40 rounded-xl text-black p-5 bg-[url('https://png.pngtree.com/png-clipart/20220828/ourlarge/pngtree-ripped-paper-note-sunflower-tape-png-image_6127029.png')]">
              <button onClick={()=>{
                deleteNote(idx)
              }} className="absolute cursor-pointer active:scale-95 top-5 right-5 bg-red-500 p-1 rounded-full text-xs"><X /></button>
              <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
              <p className="mt-4 leading-tight font-medium text-gray-700">{elem.details}</p>
            </div>
          })}
       
        </div>

      </div>
    </div>
  )
}

export default App