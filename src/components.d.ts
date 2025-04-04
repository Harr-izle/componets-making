/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { BreadcrumbItem } from "./components/breadcrumb/breadcrumb";
export { BreadcrumbItem } from "./components/breadcrumb/breadcrumb";
export namespace Components {
    interface MyAccordion {
        "header": string;
        "variant": 'default' | 'bordered' | 'nested';
    }
    interface MyAlert {
        "bordered": boolean;
        "dismissible": boolean;
        "icon"?: string;
        "listItems"?: string;
        "message": string;
        "type": 'success' | 'danger' | 'warning' | 'info';
    }
    interface MyAvatar {
        "alt"?: string;
        "bordered"?: boolean;
        "initials"?: string;
        "size": 'small' | 'medium' | 'large';
        "src"?: string;
        "stacked"?: boolean;
        "status"?: 'online' | 'offline';
        "tooltip"?: string;
    }
    interface MyBadge {
        "icon"?: string;
        "link"?: string;
        "name": string;
        "type": "default" | "large" | "bordered" | "pill" | "link" | "icon" | "notification" | "button" | "icon-only" | "dismissible";
    }
    interface MyBreadcrumb {
        "background": 'transparent' | 'solid';
        "items": BreadcrumbItem[] | string;
        "type": 'default' | 'header';
    }
    interface MyButton {
        "iconOnly"?: boolean;
        "name": string;
        "outline"?: boolean;
        "pill"?: boolean;
        "size"?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "social"?: 'facebook' | 'twitter' | 'google' | 'linkedin' | 'github';
        "type": string;
        "variant"?: 'default' | 'alternative' | 'dark' |'light'| 'green'| 'red'| 'yellow'|'purple';
    }
    interface MyCard {
        "buttonText"?: string;
        "description"?: string;
        "hasForm"?: boolean;
        "header"?: string;
        "horizontal"?: boolean;
        "imageUrl"?: string;
        "isProfile"?: boolean;
        "linkText"?: string;
        "linkUrl"?: string;
    }
    interface MyDatePicker {
        "endDate"?: string;
        "isRange": boolean;
        "showDefault"?: boolean;
        "startDate"?: string;
    }
    interface MyDropdown {
        "delay": number;
        "label": string;
        "trigger": 'hover' | 'click';
    }
}
export interface MyAlertCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyAlertElement;
}
export interface MyDatePickerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyDatePickerElement;
}
declare global {
    interface HTMLMyAccordionElement extends Components.MyAccordion, HTMLStencilElement {
    }
    var HTMLMyAccordionElement: {
        prototype: HTMLMyAccordionElement;
        new (): HTMLMyAccordionElement;
    };
    interface HTMLMyAlertElementEventMap {
        "alertDismissed": void;
    }
    interface HTMLMyAlertElement extends Components.MyAlert, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMyAlertElementEventMap>(type: K, listener: (this: HTMLMyAlertElement, ev: MyAlertCustomEvent<HTMLMyAlertElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMyAlertElementEventMap>(type: K, listener: (this: HTMLMyAlertElement, ev: MyAlertCustomEvent<HTMLMyAlertElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMyAlertElement: {
        prototype: HTMLMyAlertElement;
        new (): HTMLMyAlertElement;
    };
    interface HTMLMyAvatarElement extends Components.MyAvatar, HTMLStencilElement {
    }
    var HTMLMyAvatarElement: {
        prototype: HTMLMyAvatarElement;
        new (): HTMLMyAvatarElement;
    };
    interface HTMLMyBadgeElement extends Components.MyBadge, HTMLStencilElement {
    }
    var HTMLMyBadgeElement: {
        prototype: HTMLMyBadgeElement;
        new (): HTMLMyBadgeElement;
    };
    interface HTMLMyBreadcrumbElement extends Components.MyBreadcrumb, HTMLStencilElement {
    }
    var HTMLMyBreadcrumbElement: {
        prototype: HTMLMyBreadcrumbElement;
        new (): HTMLMyBreadcrumbElement;
    };
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyCardElement extends Components.MyCard, HTMLStencilElement {
    }
    var HTMLMyCardElement: {
        prototype: HTMLMyCardElement;
        new (): HTMLMyCardElement;
    };
    interface HTMLMyDatePickerElementEventMap {
        "dateSelected": {start: Date, end?: Date};
    }
    interface HTMLMyDatePickerElement extends Components.MyDatePicker, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMyDatePickerElementEventMap>(type: K, listener: (this: HTMLMyDatePickerElement, ev: MyDatePickerCustomEvent<HTMLMyDatePickerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMyDatePickerElementEventMap>(type: K, listener: (this: HTMLMyDatePickerElement, ev: MyDatePickerCustomEvent<HTMLMyDatePickerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMyDatePickerElement: {
        prototype: HTMLMyDatePickerElement;
        new (): HTMLMyDatePickerElement;
    };
    interface HTMLMyDropdownElement extends Components.MyDropdown, HTMLStencilElement {
    }
    var HTMLMyDropdownElement: {
        prototype: HTMLMyDropdownElement;
        new (): HTMLMyDropdownElement;
    };
    interface HTMLElementTagNameMap {
        "my-accordion": HTMLMyAccordionElement;
        "my-alert": HTMLMyAlertElement;
        "my-avatar": HTMLMyAvatarElement;
        "my-badge": HTMLMyBadgeElement;
        "my-breadcrumb": HTMLMyBreadcrumbElement;
        "my-button": HTMLMyButtonElement;
        "my-card": HTMLMyCardElement;
        "my-date-picker": HTMLMyDatePickerElement;
        "my-dropdown": HTMLMyDropdownElement;
    }
}
declare namespace LocalJSX {
    interface MyAccordion {
        "header"?: string;
        "variant"?: 'default' | 'bordered' | 'nested';
    }
    interface MyAlert {
        "bordered"?: boolean;
        "dismissible"?: boolean;
        "icon"?: string;
        "listItems"?: string;
        "message"?: string;
        "onAlertDismissed"?: (event: MyAlertCustomEvent<void>) => void;
        "type"?: 'success' | 'danger' | 'warning' | 'info';
    }
    interface MyAvatar {
        "alt"?: string;
        "bordered"?: boolean;
        "initials"?: string;
        "size"?: 'small' | 'medium' | 'large';
        "src"?: string;
        "stacked"?: boolean;
        "status"?: 'online' | 'offline';
        "tooltip"?: string;
    }
    interface MyBadge {
        "icon"?: string;
        "link"?: string;
        "name"?: string;
        "type"?: "default" | "large" | "bordered" | "pill" | "link" | "icon" | "notification" | "button" | "icon-only" | "dismissible";
    }
    interface MyBreadcrumb {
        "background"?: 'transparent' | 'solid';
        "items"?: BreadcrumbItem[] | string;
        "type"?: 'default' | 'header';
    }
    interface MyButton {
        "iconOnly"?: boolean;
        "name"?: string;
        "outline"?: boolean;
        "pill"?: boolean;
        "size"?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "social"?: 'facebook' | 'twitter' | 'google' | 'linkedin' | 'github';
        "type"?: string;
        "variant"?: 'default' | 'alternative' | 'dark' |'light'| 'green'| 'red'| 'yellow'|'purple';
    }
    interface MyCard {
        "buttonText"?: string;
        "description"?: string;
        "hasForm"?: boolean;
        "header"?: string;
        "horizontal"?: boolean;
        "imageUrl"?: string;
        "isProfile"?: boolean;
        "linkText"?: string;
        "linkUrl"?: string;
    }
    interface MyDatePicker {
        "endDate"?: string;
        "isRange"?: boolean;
        "onDateSelected"?: (event: MyDatePickerCustomEvent<{start: Date, end?: Date}>) => void;
        "showDefault"?: boolean;
        "startDate"?: string;
    }
    interface MyDropdown {
        "delay"?: number;
        "label"?: string;
        "trigger"?: 'hover' | 'click';
    }
    interface IntrinsicElements {
        "my-accordion": MyAccordion;
        "my-alert": MyAlert;
        "my-avatar": MyAvatar;
        "my-badge": MyBadge;
        "my-breadcrumb": MyBreadcrumb;
        "my-button": MyButton;
        "my-card": MyCard;
        "my-date-picker": MyDatePicker;
        "my-dropdown": MyDropdown;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-accordion": LocalJSX.MyAccordion & JSXBase.HTMLAttributes<HTMLMyAccordionElement>;
            "my-alert": LocalJSX.MyAlert & JSXBase.HTMLAttributes<HTMLMyAlertElement>;
            "my-avatar": LocalJSX.MyAvatar & JSXBase.HTMLAttributes<HTMLMyAvatarElement>;
            "my-badge": LocalJSX.MyBadge & JSXBase.HTMLAttributes<HTMLMyBadgeElement>;
            "my-breadcrumb": LocalJSX.MyBreadcrumb & JSXBase.HTMLAttributes<HTMLMyBreadcrumbElement>;
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-card": LocalJSX.MyCard & JSXBase.HTMLAttributes<HTMLMyCardElement>;
            "my-date-picker": LocalJSX.MyDatePicker & JSXBase.HTMLAttributes<HTMLMyDatePickerElement>;
            "my-dropdown": LocalJSX.MyDropdown & JSXBase.HTMLAttributes<HTMLMyDropdownElement>;
        }
    }
}
