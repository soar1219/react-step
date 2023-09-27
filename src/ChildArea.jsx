import {React, memo} from "react"

const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki"
}

export const ChildArea = memo((props) => {
    const {open} = props;
    console.log("childareaがレンダリングされた")

    const data = [...Array(2000).keys()];
    console.log(data);
    data.forEach(() => {
        console.log("...")
    })
    return(
        <>
            {open && <div style={style}>
                <p>子コンポーネント</p>
            </div>}
        </>
    )
});