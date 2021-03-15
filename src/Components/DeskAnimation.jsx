import Lottie from "lottie-react";
import DeskObj from '../JSONDATA/DeskWhite.json'

const DeskAnimation = () => {
    return <Lottie animationData={DeskObj} style={sizing} />;
};

export default DeskAnimation;

const sizing = {
    width: "100%",
    height: "375px",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
}