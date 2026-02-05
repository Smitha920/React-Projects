import Card from "./components/Card"
export const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/011/598/471/original/google-logo-icon-illustration-free-vector.jpg",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Bengaluru"
  },
  {
    brandLogo: "https://purepng.com/public/uploads/large/amazon-logo-s3f.png",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Mumbai"
  },
  {
    brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png?20210729021049",
    name: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bengaluru"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.zDiqohRgbnp9cDa2X9f7lgHaD7?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Netflix",
    datePosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Mumbai"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Bengaluru"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.n-qBGTTsnFyAFEnTIMj3hwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Infosys",
    datePosted: "4 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$35/hr",
    location: "Mumbai"
  },
  {
    brandLogo: "https://indiancompanies.in/wp-content/uploads/2020/05/TCS-Logo-Tata-consultancy-service-1920x1144.png",
    name: "TCS",
    datePosted: "6 weeks ago",
    post: "System Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Bengaluru"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/054/650/802/non_2x/flipkart-logo-rounded-flipkart-logo-free-download-flipkart-logo-free-png.png",
    name: "Flipkart",
    datePosted: "8 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "Mumbai"
  },
  {
    brandLogo: "https://example.com/logos/zomato.png",
    name: "Zomato",
    datePosted: "2 months ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bengaluru"
  },
  {
    brandLogo: "https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png",
    name: "Swiggy",
    datePosted: "12 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Mumbai"
  }
];
console.log(jobOpenings)

  return (
    <div className="parant">
      {jobOpenings.map(function(elem){
         return <Card 
         company = {elem.name} 
         post = {elem.post}
         datePosted = {elem.datePosted}
         tag1 = {elem.tag1}
         tag2 = {elem.tag2}
         pay = {elem.pay}
         location = {elem.location}
         logo = {elem.brandLogo}/>
      })}
    </div>
  )
}

export default App;
