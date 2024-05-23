function MainImage({ mainPhoto }){
    const mainPhotoStyle = {
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        objectFit: 'cover',
        margin: '10px'
    };
    return (
        <div>
            <img src={mainPhoto} alt="Pet" style={mainPhotoStyle} />
        </div>
    );
}


