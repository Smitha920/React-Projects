import { File } from "lucide-react"
import { Plus } from "lucide-react"
import { ChevronRight } from "lucide-react"
export const App = () => {
  return (
    <div className="parent">
      <div className="top">
        <p><File /> Notes</p>
        <button><Plus size={20}/>Add Notes</button>
      </div>
      <div className="bottom">
            <button>Task: All</button>
            <button>Time: All</button>
            <button>Status: All</button>
        <div>
          <div id="msg">
            <div className="UI">
              <p>User Interface </p>
              <span>Tomorrow</span>
              <span>Incoming</span>
              <ChevronRight />
            </div>
            <p>Showcasing new design elements and styles.</p>
            <div>
              <img></img>
              <img></img>
              <img></img>
              <p>Collaborate with <span>Miguel, Jhon, Hane</span></p>
            </div>
          </div>

      </div>
      </div>
    </div>
  )
}
export default App;
