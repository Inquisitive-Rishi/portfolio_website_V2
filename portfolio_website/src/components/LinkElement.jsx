function LinkElement({text, linkTo="#"}) {
  return (
    <a href={linkTo} className="font-bold block text-red-500 hover:underline text-nowrap">{text}</a>
  )
}

export default LinkElement;