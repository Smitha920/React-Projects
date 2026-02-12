import { File, Plus } from "lucide-react"

export const Note = () => {
  return (
    <>
    <div className="top">
          <p><File /> Notes</p>
          <button><Plus size={20} />Add Notes</button>
      </div><div className="bottom">
              <button>Task: All</button>
              <button>Time: All</button>
              <button>Status: All</button>
          </div>
          </>
    
  )
}

export default Note
