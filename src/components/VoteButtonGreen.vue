<template>
<svg viewBox="0 0 209 211" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient x1="50%" y1="100%" x2="50%" y2="-28.5%" id="d">
      <stop offset="0%"/>
      <stop stop-color="#323232" offset="100%"/>
    </linearGradient>
    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
      <stop stop-color="#404040" offset="0%"/>
      <stop offset="100%"/>
    </linearGradient>
    <circle id="b" cx="71.5" cy="71.5" r="71.5"/>
    <filter x="-37.8%" y="-34.3%" width="175.5%" height="175.5%" filterUnits="objectBoundingBox" id="a">
      <feMorphology radius=".5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>
      <feOffset dy="5" in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
      <feGaussianBlur stdDeviation="17" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
      <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
      <feColorMatrix values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.290196078 0 0 0 0.63 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/>
      <feMorphology radius=".5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter2"/>
      <feOffset dy="2" in="shadowSpreadOuter2" result="shadowOffsetOuter2"/>
      <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter2" result="shadowBlurOuter2"/>
      <feComposite in="shadowBlurOuter2" in2="SourceAlpha" operator="out" result="shadowBlurOuter2"/>
      <feColorMatrix values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.288383152 0 0 0 1 0" in="shadowBlurOuter2" result="shadowMatrixOuter2"/>
      <feMerge>
        <feMergeNode in="shadowMatrixOuter1"/>
        <feMergeNode in="shadowMatrixOuter2"/>
      </feMerge>
    </filter>
    <circle id="e" cx="71.5" cy="71.5" r="35.5"/>
    <filter x="-4.9%" y="-4.9%" width="109.9%" height="109.9%" filterUnits="objectBoundingBox" id="f">
      <feGaussianBlur stdDeviation="2.5" in="SourceAlpha" result="shadowBlurInner1"/>
      <feOffset dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"/>
      <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"/>
      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.903532609 0" in="shadowInnerInner1"/>
    </filter>
  </defs>
  <g fill="none" fill-rule="evenodd">
    <g fill-rule="nonzero">
      <g transform="translate(33 29)">
        <use fill="#000" filter="url(#a)" xlink:href="#b"/>
        <use stroke="url(#c)" fill="url(#d)" xlink:href="#b"/>
      </g>
      <g transform="translate(33 29)">
        <use v-bind:fill="isClicked" xlink:href="#e"/>
        <use fill="#000" filter="url(#f)" xlink:href="#e"/>
        <use stroke="#B5B5B5" xlink:href="#e"/>
      </g>
    </g>
  </g>
</svg>

</template>

<script>
  export default {
    // filled 00FF48
    name: 'VoteButtonGreen',
    props: ['clicked'],
    computed: {
      // a computed getter
      isClicked: function () {
        // `this` points to the vm instance
        return this.clicked ? '#00FF48' : '#E3E3E3'
      }
    }
    // clicked ? FF00E5 : fillColor = #fff
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
