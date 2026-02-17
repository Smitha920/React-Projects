import { Section1 } from "./components/Section1/Section1";
import {Section2} from "./components/Section2/Section2"

export const App = () => {
  
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Satisfied',
      color: 'royalblue'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661666962678-faa6afa3d796?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'UnderServed',
      color: 'orange'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1723618936097-f78940fb26eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Underbanked',
      color: 'green'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1723618936097-f78940fb26eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'undefined',
      color: 'pink'
    }


  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}
export default App;