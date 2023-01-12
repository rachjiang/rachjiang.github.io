import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './assets/images/hand.json'
import { useState } from 'react'

function LottieControl(props) {
  // eslint-disable-next-line no-unused-vars
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Lottie options={defaultOptions} height={150} width={150} />
    )
}

export default LottieControl;