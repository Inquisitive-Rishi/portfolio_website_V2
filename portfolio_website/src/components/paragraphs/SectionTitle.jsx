function SectionTitle({text, customStyles}) {
    const style = {
        marginTop:50,
        fontSize:'3rem'
    }
    return (
        <p className={customStyles} style={style}>{text}</p>
    )
}

export default SectionTitle;