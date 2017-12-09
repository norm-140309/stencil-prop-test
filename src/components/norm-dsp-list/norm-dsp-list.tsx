import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'norm-dsp-list',
  styleUrl: 'norm-dsp-list.scss'
})
export class NormDspList {

  @Prop() propdata: any;
  @State() propObject: any;
  @Prop() name: any;

  componentWillLoad() {
    this.propObject = JSON.parse(this.propdata);
  }

  render() {
    return (
      <div>
        Name: {this.name}
        <article>
          <div>Name: {this.propObject.name} </div>
          <div>Email: {this.propObject.email} </div>
          Interests:
          <ul>
            { this.propObject.interests.map( obj => <li> {obj.id} - {obj.title} </li> ) }
          </ul>
        </article>
      </div>
    );
  }
}
