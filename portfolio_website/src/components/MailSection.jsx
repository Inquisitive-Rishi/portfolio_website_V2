
function MailSection() {
    const styles = {
        outline: "none",
        border: "none",
        borderRadius: "10px",
        padding: ".6em",
        backgroundColor: "lightgrey",
        color: "black"
    }
  return (
    <div className="flex justify-between">
        <div className="bg-email w-[70%] h-[70%]"></div>
        <form action="#" className="flex flex-col gap-5 mt-20 max-w-[50%]">
            <input type="text" name="fullname" placeholder="name" style={styles}/>
            <input type="text" name="email" placeholder="email" style={styles}/>
            <textarea name="text" id="" cols="30" rows="10" style={styles} placeholder="Hello Rishi...."></textarea>
            <button style={styles}>send</button>
        </form>
    </div>
  )
}

export default MailSection