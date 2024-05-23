
function Images({picture1, picture2,picture3}){
    return (
        <div style={styles.div}>
            <img src={picture1} alt="Pet" style={styles.images} />
            <img src={picture2} alt="Pet" style={styles.images} />
            <img src={picture3} alt="Pet" style={styles.images} />
        </div>
    );
}
const styles = {
    images: {
        width: '400px',
        height: '400px',
        border: "5px solid orange",
        objectFit: 'cover',
        margin: '10px'
    },
    div:{
        display: "flex",
        justifyContent: "center"
    }
};
