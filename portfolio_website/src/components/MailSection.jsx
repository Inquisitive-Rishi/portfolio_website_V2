import Button from "./Button"
import emailImg  from "../assets/social/email.svg"
import ProjectTitle from "./paragraphs/ProjectTitle"

function MailSection() {
    const styles = {
        outline: "none",
        border: "2px solid black",
        width: "100%",
        padding: "0.4rem",
        color: "black"
    }
  return (
    <div className="flex justify-between mt-20">
        <div className="block">
        <ProjectTitle title="🤓 Let's get in touch"/>
        <p className="font-bold text-3xl mt-10 text-red-500">rishiraj007bgp@gmail.com</p>
        </div>
        <form action="#" className="flex flex-col gap-5 max-w-[100%] items-center">
            <input type="text" name="fullname" placeholder="name" style={styles}/>
            <input type="text" name="email" placeholder="email" style={styles}/>
            <textarea name="text" id="" cols="30" rows="10" style={styles} placeholder="Hello Rishi...."></textarea>
            <button className="p-2 bg-red-500 text-white w-[100%] hover:font-bold">Submit</button>
        </form>
    </div>
  )
}

export default MailSection