// DefinitelyTyped  by Danilo C Castro
// https://x-tag.readme.io/docs

declare module xtag {
	interface ILifecycle {
		created?: () => void;
		inserted?: () => void;
		removed?: () => void;
		attributeChanged?: (attrName: string, oldValue: any, newValue: any) => void;
	}
	interface IAccessors {
		attribute?: { name?: string };
		set?: (value: any) => void;
		get?: () => any;
	}
	interface IDefinition {
		content?: string;
		lifecycle?: ILifecycle;
		events: { [name: string]: (...args: any[]) => void; }; // TODO: check args
		accessors: { [name: string]: IAccessors; };
		methods: { [name: string]: (...args: any[]) => void; }
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
