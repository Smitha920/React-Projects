import {ChevronRight} from "lucide-react"
import person1 from "../images/person1.png"
import person2 from "../images/person2.png"
import person3 from "../images/person3.png"
export const Msg = () => {
    return (
        <>
        <div className="msg">
            <div className="UI">
                <p>User Interface </p>
                <span>Tomorrow</span>
                <span>Incoming</span>
                <ChevronRight />
            </div>
            <p>Showcasing new design elements and styles.</p>
            <div id="collaberation">
                <img src={person1} alt="person " />
                <img src={person2} alt="person" />
                <img src={person3} alt="person" />
                <p>Collaborate with <span>Miguel, Jhon, Hane</span></p>
            </div>
        </div>
        </>

    )
}
export default Msg
