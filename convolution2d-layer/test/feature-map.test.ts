import { assert} from '@open-wc/testing';

import {isValidFeatureMap,isFeatureMap} from "../src/FeatureMap";

describe('FeatureMap', () => {
  it("isFeatureMap can detect a FeatureMap object",  () => {
    const featureMapObject = {'width':30,'height':50,'channels':3}
    assert.equal(isFeatureMap(featureMapObject),true)
  })

  it("isFeatureMap can detect an object that is not a FeatureMap",  () => {
    const featureMapObject = {'width':30,'bla':50,'channels':3}
    assert.equal(isFeatureMap(featureMapObject),false)
  })

  it("isValidFeatureMap can detect a valid FeatureMap",  () => {
    const featureMapObject = {'width':30,'height':50,'channels':3}
    assert.equal(isValidFeatureMap(featureMapObject),true)
  })

  it("isValidFeatureMap can detect an invalid FeatureMap",  () => {
    const featureMapObject = {'width':30,'height':50,'channels':0}
    assert.equal(isValidFeatureMap(featureMapObject),false)
  })

})
