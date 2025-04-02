import {Component,h, Prop} from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true
})

export class MyButton {
    @Prop() name: string;
    @Prop() type: string;
    @Prop() variant?: 'default' | 'alternative' | 'dark' |'light'| 'green'| 'red'| 'yellow'|'purple' = 'default';
    @Prop() size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
    @Prop() outline?: boolean = false;
    @Prop() social?: 'facebook' | 'twitter' | 'google' | 'linkedin' | 'github';
    @Prop() pill?: boolean = false;
    @Prop() iconOnly?: boolean = false;

    render() {
        const classes = {
            'btn': true,
            [`btn-${this.variant}`]: true,
            [`btn-${this.size}`]: true,
            'btn-outline': this.outline,
            [`btn-${this.social}`]: !!this.social,
            'btn-pill': this.pill,
            'btn-icon': this.iconOnly
        };

        return (
            <button 
                type={this.type} 
                class={Object.keys(classes)
                    .filter(key => classes[key])
                    .join(' ')}
            >
                <slot name="icon"></slot>
                {!this.iconOnly && this.name}
            </button> 
        );
    }
}