import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'norm-dsp-list',
  styleUrl: 'norm-dsp-list.scss'
})
export class NormDspList {

  @Prop() propdata: any;
  @Prop() name: any;

  render() {
    console.log('inside:', this.propdata);
    return (
      <div>
        Name: {this.name}
        <pre>
          {this.propdata}
        </pre>
      </div>
    );
  }
}
