function Text({text}){
    return (
        <div>
            <p style={textStyle}>{text}</p>
        </div>
    );
}
const textStyle = {
    margin: "10px",
    fontSize: 30,
    padding: 15
};
