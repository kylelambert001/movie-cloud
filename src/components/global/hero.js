import React from "react";

import HeroBackdrop from "./hero-backdrop";
import HeroInfo from "./hero-info";

function Hero(props) {
  const { mediaType, item } = props;
  return (
    <section className="hero">
      <HeroBackdrop item={item} mediaType={mediaType} />
      <HeroInfo item={item} mediaType={mediaType} />
    </section>
  );
}

export default Hero;

// class Hero extends Component {
//   render() {
//     const { content } = this.props;
//     const { backdrop_path, name, title } = content;
//     return (
//       <section className="hero">
//         <div className="hero-backdrop">
//           <FadeIn>
//             {(handleOnLoad) => (
//               <img
//                 src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
//                 alt={title ? title : name}
//                 onLoad={handleOnLoad}
//                 className="hero-backdrop-img"
//               />
//             )}
//           </FadeIn>
//         </div>
//         <div className="hero-content">
//           <HeroInfo content={content} />
//         </div>
//       </section>
//     );
//   }
// }

// export default Hero;
