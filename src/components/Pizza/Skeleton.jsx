import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="142" cy="120" r="120" />
    <rect x="0" y="254" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="296" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="405" rx="10" ry="10" width="91" height="27" />
    <rect x="127" y="397" rx="20" ry="20" width="153" height="45" />
  </ContentLoader>
)

export default Skeleton;