<template>
<svg viewBox="0 0 209 211" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
    <title>Group</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="-28.5429414%" id="linearGradient-1">
            <stop stop-color="#000000" offset="0%"></stop>
            <stop stop-color="#323232" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="-2.48949813e-15%" x2="50%" y2="100%" id="linearGradient-2">
            <stop stop-color="#404040" offset="0%"></stop>
            <stop stop-color="#000000" offset="100%"></stop>
        </linearGradient>
        <circle id="path-3" cx="71.5" cy="71.5" r="71.5"></circle>
        <filter x="-37.8%" y="-34.3%" width="175.5%" height="175.5%" filterUnits="objectBoundingBox" id="filter-4">
            <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="5" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="17" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 0   0 0 0 0 0.898039216  0 0 0 0.627943841 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter2"></feMorphology>
            <feOffset dx="0" dy="2" in="shadowSpreadOuter2" result="shadowOffsetOuter2"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter2" result="shadowBlurOuter2"></feGaussianBlur>
            <feComposite in="shadowBlurOuter2" in2="SourceAlpha" operator="out" result="shadowBlurOuter2"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 0   0 0 0 0 0.899796196  0 0 0 1 0" type="matrix" in="shadowBlurOuter2" result="shadowMatrixOuter2"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
            </feMerge>
        </filter>
        <circle id="path-5" cx="71.5" cy="71.5" r="35.5"></circle>
        <filter x="-4.9%" y="-4.9%" width="109.9%" height="109.9%" filterUnits="objectBoundingBox" id="filter-6">
            <feGaussianBlur stdDeviation="2.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.903532609 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Pixel-2" transform="translate(-17.000000, -345.000000)">
            <g id="Group" transform="translate(50.000000, 374.000000)" fill-rule="nonzero">
                <g id="Oval">
                    <use fill="black" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-3"></use>
                    <use stroke="url(#linearGradient-2)" stroke-width="1" fill="url(#linearGradient-1)" xlink:href="#path-3"></use>
                </g>
                <g id="Oval">
                    <use v-bind:fill="isClicked" xlink:href="#path-5"></use>
                    <use fill="black" fill-opacity="1" filter="url(#filter-6)" xlink:href="#path-5"></use>
                    <use stroke="#B5B5B5" stroke-width="1" xlink:href="#path-5"></use>
                </g>
            </g>
            <g id="Page"></g>
            <g id="Page"></g>
        </g>
    </g>
</svg>
</template>

<script>
  export default {
    // filled FF00E5
    name: 'VoteButtonPink',
    props: ['clicked'],
    computed: {
      // a computed getter
      isClicked: function () {
        // `this` points to the vm instance
        return this.clicked ? '#FF00E5' : '#E3E3E3'
      }
    }
    // clicked ? FF00E5 : fillColor = #fff
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
