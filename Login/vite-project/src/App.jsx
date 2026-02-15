import { UserRound, EyeOff, SquareCheck } from "lucide-react"
export const App = () => {
  return (
    <div className="login">
      <div className="top">
        <h3>Login</h3>
        <p>Welcome back please login to your account.</p>
      </div>
      <div className="center">
        <div className="user-input">
          <UserRound className="icon" size={20} />
          <input type="text" placeholder="User Name"/>
        </div>
        <div className="password-input">
          <EyeOff className="icon" size={20}/>
          <input type="text" placeholder="Password"/>
        </div>
        <div className="check">
          <SquareCheck size={20}/>
          <p>Remember me</p>
        </div>
        
      </div>
      <div className="bottom">
        <button>Login</button>
        <p>Dont't have an account? <span>Signup</span></p>
        <p id="footer">created by smitha</p>
      </div>

    </div>
  )
}

export default App;
