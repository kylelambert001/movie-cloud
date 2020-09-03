import React from "react";

import HeroBackdrop from "./hero-backdrop";
import HeroInformation from "./hero-information";

function Hero(props) {
  const { mediaType, data } = props;
  return (
    data && (
      <section className="hero">
        <HeroBackdrop
          backdropPath={data.backdrop_path}
          alt={mediaType === "movie" ? data.title : data.name}
        />
        <HeroInformation data={data} mediaType={mediaType} />
      </section>
    )
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
