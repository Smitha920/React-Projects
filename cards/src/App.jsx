import { Bookmark } from "lucide-react"
export const App = () => {
  return (
    <div className="parant">
      <div className="card">
        <div>
          <div className="top">
            <img src="https://toppng.com/public/uploads/preview/amazon-logo-transparent-background-116589592271nenw0vuo4.png" alt=""></img>
            <button>Save<Bookmark size={15} /></button>
          </div>
          <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX designer</h2>
            <div className="tag">
              <h4>Part Time</h4>
              <h3>Senior Level</h3>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div>
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
            </div>
            <button>Apply now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
