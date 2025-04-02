import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'my-accordion',
  styleUrl: 'my-accordion.css',
  shadow: true,
})
export class MyAccordion {
  @Prop() header: string = '';
  @Prop() variant: 'default' | 'bordered' | 'nested' = 'default';
  @State() isOpen: boolean = false;

  private toggleAccordion = () => {
    this.isOpen = !this.isOpen;
  };

  render() {
    return (
      <div class={`accordion ${this.variant} ${this.isOpen ? 'open' : ''}`}>
        <div class="accordion-header" onClick={this.toggleAccordion}>
          <span>{this.header}</span>
          <span class="icon">{this.isOpen ? '−' : '+'}</span>
        </div>
        <div class="accordion-content">
          <slot></slot>
        </div>
      </div>
    );
  }
}
