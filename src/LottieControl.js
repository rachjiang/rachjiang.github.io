import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './assets/images/hand.json'
import { useState } from 'react'

function LottieControl(props) {
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
    <Lottie options={defaultOptions} height={100} width={100} />
    )
}

export default LottieControl;