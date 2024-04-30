// 'use client';

// import { useCallback, useEffect } from 'react';
// import styles from './DistortionImage.module.scss';
// import hoverEffect from 'hover-effect';
// import { useState } from 'react';
// import DisplacementAnimation from './DisplacementAnimation';
// import { SlowMo } from 'gsap/EasePack';
// import gsap from 'gsap';

// const images = [
//   'https://picsum.photos/1440/1179?image=336',
//   'https://picsum.photos/1440/1179?image=242',
//   'https://picsum.photos/1440/1179?image=140',
//   'https://picsum.photos/1440/1179?image=204',
// ];

// const coordsArray = () => {
//   return {
//     xf: (Math.random() - 0.4) * 2,
//     yf: (Math.random() - 0.4) * 2,
//     zf: Math.random() * 4 + 1,
//   };
// };

// const MagicBackgroundText = () => {
//   const text = "WOW IT'S A BEAUTIFUL DISPLACEMENT ANIMATION ";
//   const repeatedText = new Array(1000).fill(1).map(() => text);
//   return (
//     <div
//       style={{
//         position: 'absolute',
//         zIndex: -1,
//       }}
//     >
//       {repeatedText}
//     </div>
//   );
// };

// const DistortionImage = ({ activeServiceIndex }) => {
//   gsap.registerPlugin(SlowMo);

//   const animationProps = {
//     dispImg: 'https://picsum.photos/1440/1179?image=735',
//     intensity1: 1,
//     intensity2: 1,
//     commonAngle: Math.PI / 4,
//     speedIn: 2,
//     easing: SlowMo.ease.config(0.5, 0.4, false),
//     onComplete: () => setDisabled(false),
//   };

//   const [selected, setSelected] = useState(0);
//   const [coords, setCoords] = useState();
//   const [disabled, setDisabled] = useState(false);

//   const changeImage = () => {
//     if (selected >= images.length - 1) {
//       setSelected(0);
//     } else {
//       setSelected(selected + 1);
//     }
//   };

//   return (
//     <>
//       <DisplacementAnimation
//         {...animationProps}
//         image={images[selected]}
//         coords={coords}
//       />
//       {/* <div
//         className={[styles.imageWrapper, 'distortContainer'].join(' ')}
//       ></div> */}
//     </>
//   );
// };

// export default DistortionImage;
