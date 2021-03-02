import { html, css, LitElement, property } from 'lit-element';
import {calculateFeatureMapOut} from "./FeatureMap";

export class Convolution2dLayer extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--convolution2d-layer-text-color, #000);
    }
  `;

  @property({ type: Object }) featureMap = {'width':0, 'height': 0, 'channels': 0};

  @property({ type: Number }) kernel = 1;

  @property({ type: Number }) stride = 1;

  @property({ type: Number }) padding = 0;

  @property({ type: Number }) channels = 5;

  @property({ type: Number }) dilation = 1;

  calculateNewMap() {
    const newFeatureMap = calculateFeatureMapOut(this.kernel,this.stride,this.padding,this.dilation,this.channels,this.featureMap);
    const event = new CustomEvent('new-feature-map-calculated', {
        detail: {
          message: newFeatureMap
        }
      });
    this.dispatchEvent(event);
  }

  getElement(id: string): HTMLInputElement{
    return this.shadowRoot?.getElementById(id) as HTMLInputElement
  }

  render() {
    this.calculateNewMap();
    return html`
      <h2>Feature-Map Transformation</h2>
      <div><input id="channels" .value="${this.channels}" type="number" @change=${ () => {
        this.channels = Number(this.getElement('channels').value);
        this.requestUpdate()
      }  }></div>
      <div><input .value="${this.kernel}"></div>
      <div><input .value="${this.stride}"></div>
      <div><input .value="${this.padding}"></div>
      <div><input .value="${this.dilation}"></div>
    `;
  }
}
