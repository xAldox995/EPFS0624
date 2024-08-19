import { Component } from "react";

class ImageComponent extends Component {
render () {
    return (
        <>
        <img src={this.props.src} alt="logoACaso" />
        </>
    )
}
}

export default ImageComponent