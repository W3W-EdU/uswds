/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface UsaButton {
        /**
          * The button text.
         */
        "text": string;
    }
    interface UsaLink {
        /**
          * The link href.
         */
        "href"?: string;
        /**
          * Inverse link for dark backgrounds. Previously alt, but changed to avoid confusion with existing HTML alt attribute.
         */
        "inverse": boolean;
        /**
          * The link label.
         */
        "text": string;
    }
}
declare global {
    interface HTMLUsaButtonElement extends Components.UsaButton, HTMLStencilElement {
    }
    var HTMLUsaButtonElement: {
        prototype: HTMLUsaButtonElement;
        new (): HTMLUsaButtonElement;
    };
    interface HTMLUsaLinkElement extends Components.UsaLink, HTMLStencilElement {
    }
    var HTMLUsaLinkElement: {
        prototype: HTMLUsaLinkElement;
        new (): HTMLUsaLinkElement;
    };
    interface HTMLElementTagNameMap {
        "usa-button": HTMLUsaButtonElement;
        "usa-link": HTMLUsaLinkElement;
    }
}
declare namespace LocalJSX {
    interface UsaButton {
        /**
          * The button text.
         */
        "text"?: string;
    }
    interface UsaLink {
        /**
          * The link href.
         */
        "href"?: string;
        /**
          * Inverse link for dark backgrounds. Previously alt, but changed to avoid confusion with existing HTML alt attribute.
         */
        "inverse"?: boolean;
        /**
          * The link label.
         */
        "text"?: string;
    }
    interface IntrinsicElements {
        "usa-button": UsaButton;
        "usa-link": UsaLink;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "usa-button": LocalJSX.UsaButton & JSXBase.HTMLAttributes<HTMLUsaButtonElement>;
            "usa-link": LocalJSX.UsaLink & JSXBase.HTMLAttributes<HTMLUsaLinkElement>;
        }
    }
}
