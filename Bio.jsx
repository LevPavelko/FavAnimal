function Bio({bio, photo}){
    const bioStyle = {
        fontSize: 30,
        marginLeft: 100,
        flex: 1
    };

    const photoStyle = {
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginLeft: 850,
        marginTop: 10
    };

    return (
        <div style={bioStyle}>
            <p>{bio}</p>
            <img src={photo} alt="Pet" style={photoStyle} />
        </div>
    );
    
    
}