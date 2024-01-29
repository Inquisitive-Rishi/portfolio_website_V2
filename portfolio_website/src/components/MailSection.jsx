import Button from "./Button"
import emailImg  from "../assets/social/email.svg"

function MailSection() {
    const styles = {
        outline: "none",
        border: "none",
        borderRadius: "10px",
        width: "100%",
        padding: ".6em",
        backgroundColor: "lightgrey",
        color: "black"
    }
  return (
    <div className="flex justify-around mt-20">
        <div>
            <img src={emailImg} alt="email image" className="w-full h-auto"/>
        </div>
        <form action="#" className="flex flex-col gap-5 max-w-[100%] items-center">
            <input type="text" name="fullname" placeholder="name" style={styles}/>
            <input type="text" name="email" placeholder="email" style={styles}/>
            <textarea name="text" id="" cols="30" rows="10" style={styles} placeholder="Hello Rishi...."></textarea>
            <Button text="Send"/>
        </form>
    </div>
  )
}

export default MailSection