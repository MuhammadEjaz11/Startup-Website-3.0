import React from 'react';

const DEFAULT_COLOR = '#9d999d';

const lightenHex = (hex, amount = 0.15) => {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, ((num >> 16) & 0xff) + 255 * amount);
  const g = Math.min(255, ((num >> 8) & 0xff) + 255 * amount);
  const b = Math.min(255, (num & 0xff) + 255 * amount);
  return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`;
};

const darkenHex = (hex, amount = 0.25) => {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.max(0, ((num >> 16) & 0xff) * (1 - amount));
  const g = Math.max(0, ((num >> 8) & 0xff) * (1 - amount));
  const b = Math.max(0, (num & 0xff) * (1 - amount));
  return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`;
};

const Bag = ({ color = DEFAULT_COLOR, style, ...rest }) => {
  const uid = (typeof React.useId === 'function' ? React.useId().replace(/:/g, '') : null) || `bag-${Math.random().toString(36).slice(2)}`;
  const g = (n) => (n != null ? `${uid}-${n}` : uid);
  const light = lightenHex(color, 0.12);
  const dark = darkenHex(color, 0.3);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2069.122 2568.268"
      style={style}
      {...rest}
    >
      <defs>
        <linearGradient id={g(1)} x1="1034.561" y1="2645.48" x2="1034.561" y2="370.486" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={dark} />
          <stop offset="0.471" stopColor={color} />
          <stop offset="1" stopColor={light} />
        </linearGradient>
        <linearGradient id={g(2)} x1="1034.561" y1="2561.025" x2="1034.561" y2="47.903" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={dark} />
          <stop offset="0.09" stopColor={color} />
          <stop offset="0.249" stopColor={light} />
          <stop offset="0.407" stopColor={light} />
          <stop offset="0.56" stopColor={light} />
          <stop offset="0.671" stopColor={light} />
          <stop offset="0.761" stopColor={color} />
          <stop offset="0.844" stopColor={color} />
          <stop offset="0.922" stopColor={dark} />
          <stop offset="0.997" stopColor={dark} />
        </linearGradient>
        <linearGradient id={g(3)} x1="1034.561" y1="465.237" x2="1034.561" y2="2885.497" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={dark} />
          <stop offset="0.031" stopColor={color} />
          <stop offset="0.489" stopColor={color} />
          <stop offset="0.761" stopColor={color} />
          <stop offset="0.999" stopColor={dark} />
        </linearGradient>
        <linearGradient id={g(4)} x1="1034.561" y1="70.267" x2="1034.561" y2="1169.393" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={dark} />
          <stop offset="1" stopColor={color} />
        </linearGradient>
        <linearGradient id={g(5)} x1="69.286" y1="2349.773" x2="2003.836" y2="2349.773" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={dark} />
          <stop offset="0.489" stopColor={color} />
          <stop offset="0.999" stopColor={dark} />
        </linearGradient>
      </defs>
      <g style={{ isolation: 'isolate' }}>
        <g>
          <g>
            <path d="M2038.086,849.591H31.037l40.622,1565.864s-13.645,114.714,78.462,114.287h1768.881c92.107.427,78.462-114.287,78.462-114.287l40.622-1565.864Z" fill={`url(#${g(1)})`} />
            <path d="M2038.086,849.591H31.037l40.622,1565.864s-13.645,114.714,78.462,114.287h1768.881c92.107.427,78.462-114.287,78.462-114.287l40.622-1565.864Z" fill={`url(#${g(2)})`} />
            <path d="M2038.085,849.591H31.037l40.623,1565.864s-13.646,114.715,78.461,114.287h1768.882c92.106.428,78.461-114.287,78.461-114.287l40.622-1565.864ZM1705.791,2159.291c-239.469,328.386-843.426,352.366-1200.133,137.524C148.952,2081.972,138.951,915.287,138.951,915.287h1803.534s-38.286,971.926-236.693,1244.003Z" fill={`url(#${g(3)})`} style={{ mixBlendMode: 'multiply', opacity: 0.24 }} />
            <g>
              <path d="M1533.019,1023.568c-2.918-23.239-72.372-571.472-152.073-775.782-25.332-64.956-84.582-150.119-222.983-186.959-27.748-7.386-54.133-11.603-77.28-13.929-2.497-.52-24.977-2.774-46.122-2.566-21.145-.208-43.625,2.046-46.122,2.566-23.148,2.326-49.532,6.543-77.28,13.929-138.4,36.84-197.651,122.003-222.983,186.959-79.701,204.31-149.155,752.543-152.073,775.782-2.087,16.628,17.816,31.164,44.457,32.467,1.284.063,2.563.094,3.833.094,25.007,0,46.196-12.017,48.183-27.843.709-5.642,71.761-566.611,149.616-766.212,54.706-140.242,195.959-156.629,252.37-157.373,56.411.745,197.664,17.132,252.37,157.373,77.855,199.6,148.907,760.569,149.616,766.212,1.987,15.826,23.176,27.843,48.183,27.843,1.27,0,2.548-.031,3.833-.094,26.64-1.303,46.544-15.839,44.456-32.467Z" fill="#000001" />
              <path d="M1543.778,1023.381c-2.98-23.371-73.934-574.745-155.355-780.225-25.879-65.328-86.408-150.979-227.796-188.03-28.347-7.429-55.302-11.669-78.949-14.009-2.55-.524-25.516-2.79-47.117-2.581-21.601-.209-44.567,2.057-47.117,2.581-23.647,2.339-50.602,6.58-78.949,14.009-141.388,37.051-201.917,122.702-227.796,188.03-81.421,205.48-152.375,756.853-155.355,780.225-2.133,16.724,18.2,31.343,45.416,32.654,1.312.063,2.618.095,3.916.095,25.547,0,47.193-12.085,49.223-28.002.724-5.674,73.309-569.856,152.845-770.6,55.887-141.045,200.19-157.525,257.818-158.274,57.628.749,201.931,17.229,257.818,158.274,79.536,200.744,152.121,764.926,152.845,770.6,2.03,15.917,23.676,28.002,49.223,28.002,1.297,0,2.603-.032,3.916-.095,27.215-1.31,47.548-15.93,45.415-32.654Z" fill={`url(#${g(4)})`} />
              <g>
                <g>
                  <polygon points="1463.904 974.091 1451.014 963.154 1455.614 959.566 1468.503 970.502 1463.904 974.091" fill={color} />
                  <polygon points="1497.89 1002.922 1480.898 988.505 1485.497 984.917 1502.49 999.335 1497.89 1002.922" fill={color} />
                  <polygon points="1527.774 1028.274 1514.884 1017.337 1519.484 1013.749 1532.373 1024.686 1527.774 1028.274" fill={color} />
                </g>
                <g>
                  <polygon points="1516.832 970.822 1511.826 967.827 1523.273 955.387 1528.279 958.383 1516.832 970.822" fill={color} />
                  <polygon points="1486.651 1003.617 1481.648 1000.621 1496.739 984.223 1501.742 987.218 1486.651 1003.617" fill={color} />
                  <polygon points="1460.115 1032.452 1455.109 1029.457 1466.555 1017.018 1471.561 1020.013 1460.115 1032.452" fill={color} />
                </g>
              </g>
              <g>
                <g>
                  <polygon points="610.819 974.091 623.709 963.154 619.109 959.566 606.219 970.502 610.819 974.091" fill={color} />
                  <polygon points="576.833 1002.922 593.825 988.505 589.226 984.917 572.233 999.335 576.833 1002.922" fill={color} />
                  <polygon points="546.949 1028.274 559.839 1017.337 555.239 1013.749 542.35 1024.686 546.949 1028.274" fill={color} />
                </g>
                <g>
                  <polygon points="557.89 970.822 562.896 967.827 551.45 955.387 546.444 958.383 557.89 970.822" fill={color} />
                  <polygon points="588.072 1003.617 593.075 1000.621 577.984 984.223 572.981 987.218 588.072 1003.617" fill={color} />
                  <polygon points="614.608 1032.452 619.614 1029.457 608.168 1017.018 603.162 1020.013 614.608 1032.452" fill={color} />
                </g>
              </g>
            </g>
          </g>
          <path d="M1978.414,2446.939c-10.371,48.894-102.234,47.413-102.234,47.413,0,0-1598.695,1.481-1665.369,0-66.674-1.482-77.045-10.372-77.045-10.372-50.376-16.298-64.479-159.998-64.479-159.998h0s2.373,91.473,2.373,91.473c0,0-13.646,114.715,78.461,114.287h1768.881c92.107.428,78.462-114.287,78.462-114.287l6.372-245.653c-.006.1-15.053,228.253-25.423,277.136Z" fill={`url(#${g(5)})`} style={{ mixBlendMode: 'multiply', opacity: 0.24 }} />
        </g>
      </g>
    </svg>
  );
};

export default Bag;
