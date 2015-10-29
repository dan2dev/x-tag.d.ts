// DefinitelyTyped by Danilo C Castro
// Type definitions for x-tag 1.0
// https://x-tag.readme.io/docs
// Version: xtag.d.js v0.0.2 2015-10-29
// The MIT License (MIT)
// github: https://github.com/danilodeven/x-tag.d.ts
// follow me: https://twitter.com/danilodeven


declare module xtag {
	interface ILifecycle {
		created?: Function;
		inserted?: Function;
		removed?: Function;
		attributeChanged?: (attrName: string, oldValue: any, newValue: any) => Function;
	}
	interface IAccessors {
		attribute?: { name?: string };
		set?: (value: any) => void;
		get?: () => any;
	}
	interface IDefinition {
		content?: string;
		lifecycle?: ILifecycle;
		events?: { [name: string]: (event: Event) => void; };
		accessors?: { [name: string]: IAccessors; };
		methods?: { [name: string]: (...args: any[]) => void; }
	}
	export var register: (name: string, definition: IDefinition) => void; 
	export var query: (element: Element, selector: string) => any[];
	export var toArray: (element: Element ) => Element[];
	export var typeOf: (object: Object) => string;
	export var wrap: (object1: Function, object2: Function) => Object;
	export var merge: (object1: Object, object2: Object) => Object;
	export var uid: () => string;
	export var matchSelector: (element: Element, selector: string) => boolean;
	export var queryChildren: (element: Element, selector: string) => Element[];
	export var createFragment: (content: string | Function | Element[] | Element[]) => DocumentFragment;
	export var requestFrame: (callback: () =>  void) => any;
	export var cancelFrame: (any: any) => void;
	export var skipFrame: (callback: () => void) => void;
	export var skipTransition: (element: Element, callback: () => void) => void;
	export var addEvent: (element: Element, type: string, callback: (event: Event) => void) => void;
	export var addEvents: (element: Element, options: { [name: string]: (event: Event) => void}) => void;
}
