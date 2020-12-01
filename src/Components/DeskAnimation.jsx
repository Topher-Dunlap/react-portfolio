import Lottie from "lottie-react";
import DeskObj from '../JSONDATA/DeskWhite.json'

const DeskAnimation = () => {
    return <Lottie animationData={DeskObj} style={sizing} />;
};

export default DeskAnimation;

const sizing = {
    // margin: "5px 22rem 5px auto",
    width: "375px",
    height: "375px",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
}