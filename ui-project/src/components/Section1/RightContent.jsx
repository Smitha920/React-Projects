import { RightCard } from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full p-6 w-2/3 flex gap-5 overflow-auto'>
      {props.users.map(function(elem, idx){
         return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent