import RightCardContent from "./RightCardContent"


export const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden rounded-4xl relative'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent tag={props.tag} color={props.color} id={props.id} />



    </div>
  )
}
