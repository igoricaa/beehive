export default function ArrowRight({ color = '#fff' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='29'
      height='17'
      fill='none'
      viewBox='0 0 29 17'
    >
      <path
        fill={color}
        d='M22.78 9.389H7.03a.873.873 0 01-.876-.889c0-.498.385-.889.875-.889h15.75c.49 0 .875.391.875.889a.873.873 0 01-.875.889z'
      ></path>
      <path
        fill={color}
        d='M18.404 15.611a.81.81 0 01-.612-.267.89.89 0 010-1.262l5.512-5.6-5.512-5.6a.89.89 0 010-1.262.857.857 0 011.242 0l6.125 6.222a.89.89 0 010 1.262l-6.125 6.223a.872.872 0 01-.612.266l-.018.018z'
      ></path>
    </svg>
  );
}
