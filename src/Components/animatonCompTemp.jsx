import React from 'react';
import Lottie from 'react-lottie';

export default function animation() {
    return (
        <Lottie options={{
            loop: true,
            autoplay: true,
            animationData: {},
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
            }
        }}
                height={1080}
                width={1920}
        />
    );
}