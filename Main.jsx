function Main(props) {
    console.log("1")
    const [pet, setPet] = React.useState({
        name: props.name,
        breed: props.breed,
        mainPhoto: props.mainPhoto,
        photo: props.photo,
        bio: props.bio,
        picture1: props.picture1,
        picture2: props.picture2,
        picture3: props.picture3,
        text: props.text
    });
    
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "#FFC90E",
        borderRadius: 25
        
    };
   
    return (
        // console.log("a")
        <div >
            <div style={containerStyle}>
                <MainImage mainPhoto={pet.mainPhoto} />
                <Head name={pet.name} breed={pet.breed} />
                <Bio bio ={pet.bio} photo ={pet.photo}/>
                
            </div>
            <Images picture1={pet.picture1} picture2={pet.picture2} picture3={pet.picture3}/>
            <Text text={pet.text}/>
        </div>
    );
}

