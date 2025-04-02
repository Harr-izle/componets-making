import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-badge',
  styleUrl: 'my-badge.css',
  shadow: true
})
export class MyBadge {
  @Prop() name: string = "Badge";
  @Prop() type: "default" | "large" | "bordered" | "pill" | "link" | "icon" | "notification" | "button" | "icon-only" | "dismissible" = "default";
  @Prop() icon?: string;
  @Prop() link?: string;

  render() {
    return (
      <div class={`badge ${this.type}`}>
        {this.icon && <span class="icon">{this.icon}</span>}
        {this.link ? (
          <a href={this.link} class="link">{this.name}</a>
        ) : (
          <span>{this.name}</span>
        )}
        {this.type === "dismissible" && <button class="close-btn">&times;</button>}
      </div>
    );
  }
}
