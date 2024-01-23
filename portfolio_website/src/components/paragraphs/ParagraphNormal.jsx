function ParagraphNormal({text,style}) {
    const styles = {
        fontSize: '1.2rem'
    }
    return (
        <p className={style} style={styles}>{text}</p>
    )
}

export default ParagraphNormal;