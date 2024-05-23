function Head({name, breed}){
    const style = {
        fontSize: 30,
        marginLeft: 100
    }
    return (
        <div style={style}>
            <p>{name}</p>  
            <p>{breed}</p>

        </div>
    );
}