import { createElement, patch } from 'million';

const el = createElement(<div></div>);
document.body.appendChild(el);

const vnode = () => <div>Hello World</div>;

patch(el, vnode);
