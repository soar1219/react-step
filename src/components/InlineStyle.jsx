export const InlineStyle = () => {
    const ContainerStyle = {
        border: "solid 2px #392eff",
        borderRadius: "20px",
        padding: "8px",
        margin: "8px",
        display:"flex",
        justifyContent: "space-around",
        alignItems: "center"
    };
    const TitleStyle = {
        margin: "0",
        color: "#3d84a8"
    };
    const ButtonStyle = {
        backgroundColor: "#abedd8",
        border: "none",
        padding: "8px",
        borderRadius: "8px",
    };

    return(
        <div style={ContainerStyle}>
            <p style={TitleStyle}> -- Inline styles --</p>
            <button style={ButtonStyle}>FIGHT!</button>
        </div>
    )
}