// Inline SVG fallback shown if the profile photo ever fails to load, so the
// layout never breaks. Colours match the champagne / graphite palette.
export const PHOTO_PLACEHOLDER =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='360' height='460'>
       <defs>
         <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
           <stop offset='0' stop-color='#1a1917'/>
           <stop offset='1' stop-color='#211f1c'/>
         </linearGradient>
       </defs>
       <rect width='100%' height='100%' fill='url(#g)'/>
       <circle cx='180' cy='170' r='70' fill='#c9ad7a'/>
       <rect x='90' y='260' width='180' height='190' rx='90' fill='#c9ad7a'/>
       <text x='50%' y='430' fill='#f2efe8' font-family='Georgia, serif'
             font-size='22' text-anchor='middle' letter-spacing='2'>DANIA</text>
     </svg>`
  );

// Shared onError handler: swap to the placeholder once, never loop.
export const handleImgError = (e) => {
  if (e.currentTarget.src !== PHOTO_PLACEHOLDER) {
    e.currentTarget.src = PHOTO_PLACEHOLDER;
  }
};
