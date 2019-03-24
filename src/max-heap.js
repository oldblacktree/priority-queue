const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		const node = new Node(data, priority);

		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if (!this.parentNodes.length) {
			return;
		}

		const root = this.detachRoot();
		this.restoreRootFromLastInsertedNode(root);
		this.shiftNodeDown(this.root);

		return root.data;
	}

	detachRoot() {
		const index = this.parentNodes.indexOf(this.root);
		if (index + 1){
		  this.parentNodes = this.parentNodes.splice(index, 1);
		}
     
		const root = this.root;
		this.root = null;

		return root;
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if (!this.root) {
			this.root = node;
		} else {
			this.parentNodes[0].appendChild(node);
		}
    
		this.parentNodes.push(node);

		if (this.parentNodes[0].left && this.parentNodes[0].right){
			this.parentNodes.shift();
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
