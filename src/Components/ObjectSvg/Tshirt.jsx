import React from "react";

const BODY_PATH =
  "m177.5 701.59 32.621 36.518h4.5115l8.3288-8.749v109.55l1.3881 3.8039 125.97-0.38041 3.8174-2.6628-1.0411-109.17 9.3699 9.1294 3.8174-0.76078 31.927-35.757v-5.3255l-41.991-45.647-43.726-19.78s-15.964 18.639-47.544 0.76079l-41.644 15.976-45.809 52.494z";

const Tshirt = ({ color = "#eee", style, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220.71 210.36"
      version="1.1"
      style={style}
      {...rest}
    >
      <g transform="translate(-177.5 -632.36)">
        <path id="path2890" d={BODY_PATH} fill={color} />
      </g>
    </svg>
  );
};

export default Tshirt;
