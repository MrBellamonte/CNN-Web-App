/*
import { html, fixture, expect } from '@open-wc/testing';

import { Convolution2dLayer } from '../src/Convolution2dLayer.js';
import '../convolution2d-layer.js';

describe('Convolution2dLayer', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<Convolution2dLayer>(html`<convolution2d-layer></convolution2d-layer>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<Convolution2dLayer>(html`<convolution2d-layer></convolution2d-layer>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<Convolution2dLayer>(html`<convolution2d-layer title="attribute title"></convolution2d-layer>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<Convolution2dLayer>(html`<convolution2d-layer></convolution2d-layer>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
*/
