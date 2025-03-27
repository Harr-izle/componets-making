import {Component,h, Prop} from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true
})

export class MyButton {
    @Prop () name: string;
    @Prop () type: string;
    @Prop() state?: 'default' | 'alternative' | 'dark' |'light'| 'green'| 'red'| 'yellow'|'purple' = 'default';

  render() {
    return (
      <button 
                type={this.type} 
                class={`btn ${this.state}`}
            >
                {this.name}
            </button> 
    );
  }
}