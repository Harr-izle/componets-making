import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-avatar',
  styleUrl: 'my-avatar.css',
  shadow: true,
})
export class MyAvatar {
  @Prop() src?: string;
  @Prop() alt?: string = 'User avatar';
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() bordered?: boolean = false;
  @Prop() initials?: string;
  @Prop() tooltip?: string;
  @Prop() status?: 'online' | 'offline';
  @Prop() stacked?: boolean = false;

  private getSizeClass() {
    return `avatar-${this.size}`;
  }

  render() {
    return (
      <div class={{ 'avatar': true, [this.getSizeClass()]: true, 'bordered': this.bordered, 'stacked': this.stacked }} title={this.tooltip}>
        {this.src ? (
          <img src={this.src} alt={this.alt} class="avatar-img" />
        ) : this.initials ? (
          <span class="avatar-initials">{this.initials}</span>
        ) : (
          <span class="avatar-placeholder">👤</span>
        )}
        {this.status && <span class={{ 'dot-indicator': true, [this.status]: true }}></span>}
      </div>
    );
  }
}
