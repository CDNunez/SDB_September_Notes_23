//rfc or rfce for shorthand component

function About() {
    const placesVisited = ['Work', 'Home', "My Mom's House"];
    const village = "Guajataca";
    const state = "Puerto Rico";

    let styles = {
        ul: {
            textAlign: 'left',
            color: "purple",
            listStyle: "none"
        },
        p: {
            fontSize: '24px',
        }
    }

    return(
        <>
        <div>
        <p style={styles.p}>I grew up in {village}, {state}</p>
        <ul style={styles.ul}>
            <li>I first went to {placesVisited[0]}</li>
            <li>Then I went to {placesVisited[2]}</li>
            <li>Finally I went {placesVisited[1]}</li>
        </ul>
        </div>
        </>
    )
}

export default About;