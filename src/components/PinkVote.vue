<template>
<svg width="82px" height="82px" viewBox="0 0 82 82" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
    <title>Oval Copy 9</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pinkGradient">
            <stop stop-color="#e3e3e3" offset="0%"></stop>
            <stop stop-color="#535353" offset="100%"></stop>
        </linearGradient>
        <circle id="path-2" cx="217" cy="574" r="8"></circle>
        <filter x="-331.2%" y="-331.2%" width="762.5%" height="762.5%" filterUnits="objectBoundingBox" id="filter-pink">
            <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="17.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 0   0 0 0 0 0.898039216  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <filter x="-240.6%" y="-240.6%" width="581.2%" height="581.2%" filterUnits="objectBoundingBox" id="filter-4">
            <feGaussianBlur stdDeviation="2.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Pixel-2-Copy" transform="translate(-176.000000, -533.000000)">
            <g id="Page"></g>
            <g id="Page"></g>
            <g id="Oval-Copy-9" fill-rule="nonzero">
                <use fill="black" fill-opacity="1" filter="url(#filter-pink)" xlink:href="#path-2"></use>
                <use fill="#FF00E5" xlink:href="#path-2"></use>
                <use stroke="url(#pinkGradient)" stroke-width="1" xlink:href="#path-2"></use>
            </g>
        </g>
    </g>
</svg>
</template>

<script>
  export default {
    name: 'PinkVote',
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
