interface FeatureMap {
  width: number,
  height: number,
  channels: number
}

function isFeatureMap(m: any): m is FeatureMap {
  return  'width' in m && typeof m?.width === 'number' &&
          'height' in m && typeof m?.height === 'number' &&
          'channels' in m && typeof m?.channels === 'number'
}

function isValidFeatureMap(m: FeatureMap): boolean {
  return Array.of(m.channels,m.height,m.width).every( number => number > 0 )
}

function calculateFeatureMapOut(kernelSize:number, stride:number, padding:number, dilation:number, channels: number, map: FeatureMap ) {

  const outputMap: FeatureMap = {
    'width':  (map.width+2*padding-dilation*(kernelSize-1)-1)/stride+1,
    'height' : (map.height+2*padding-dilation*(kernelSize-1)-1)/stride+1,
    'channels' : channels
  };

  return outputMap;

}

export { FeatureMap, isFeatureMap, isValidFeatureMap, calculateFeatureMapOut}
