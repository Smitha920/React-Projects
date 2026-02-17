import {ArrowRight} from "lucide-react"
const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-bold">{props.id + 1}</h2>
            <div>
                <p className="text-xl text-shadow-2xs leading-relaxed text-white mb-14">Lorem ipsum Corrupti vero nemo quos odio rerum doloribus iste totam repellat ab architecto.</p>
                <div className="flex justify-between">
                    <button style={{backgroundColor:props.color}} className="text-white font-medium px-8 py-3 rounded-full">{props.tag}</button>
                    <button className="text-white font-medium px-3 py-2 rounded-full "><ArrowRight /></button>
                </div>

            </div>

        </div>
    )
}

export default RightCardContent