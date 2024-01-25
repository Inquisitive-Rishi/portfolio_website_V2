function SectionTitle({text, customStyles}) {
    const style = {
        marginTop:50,
        marginBottom:20,
        fontSize:'3rem'
    }
    return (
        <p className={customStyles} style={style}>{text}</p>
    )
}

export default SectionTitle;