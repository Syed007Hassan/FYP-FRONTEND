// import { useState } from 'react';

// export default function ProfilePic({ initialSrc }) {
//   const [imageSrc, setImageSrc] = useState(initialSrc);

//   const loadFile = (event) => {
//     setImageSrc(URL.createObjectURL(event.target.files[0]));
//   };

//   return (
//     <div className="flex items-center justify-center relative transition-all duration-300">
//       <input id="file" type="file" onChange={loadFile} className="hidden" />
//       <label htmlFor="file" className="cursor-pointer h-40 w-40 flex items-center justify-center text-transparent hover:bg-black hover:bg-opacity-80 hover:text-white rounded-full transition-all duration-200">
//         <span className="material-icons">photo_camera</span>
//         <span>Change Image</span>
//       </label>
//       <img src={imageSrc} alt="Profile" className="absolute object-cover w-40 h-40 shadow-md rounded-full z-0" />
//     </div>
//   );
// }