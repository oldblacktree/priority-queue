class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;

		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left && this.right) {
			return
		} else if (this.left) {
			this.right = node;
			this.right.parent = this;
		} else {
			this.left = node;
			this.left.parent = this;
		}
	}

	removeChild(node) {
    if (node === this.left){
			this.left = null;
			node.parent = null;
		} else if (node === this.right){
			this.right = null;
			node.parent = null;
		} else {
			throw new Error('Passed node is not a child of this node');
		}
	}

	remove() {
		if (!this.parent){
			return;
		} else {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (!this.parent) {
			return;
		}

		const grandParent = this.parent.parent;
		const parent = this.parent;
		const parentLeftChild = parent.left;
		const parentRightChild = parent.right;
		const leftChild = this.left;
		const rightChild = this.right;

		if (grandParent) {
			grandParent.removeChild(parent);
		}

		if (parentLeftChild) {
			parent.removeChild(parentLeftChild);
		}
		if (parentRightChild) {
			parent.removeChild(parentRightChild);
		}
		if (leftChild) {
			this.removeChild(leftChild);
		}
		if (rightChild) {
			parent.removeChild(rightChild);
		}

		if (grandParent){
			grandParent.appendChild(this);
		}

		if (this === parentLeftChild){
			this.appendChild(parent);
			if (parentRightChild) {
				this.appendChild(parentRightChild);
			}
		}

		if (this === parentRightChild){
			this.appendChild(parentLeftChild);
			this.appendChild(parent);
		}

		if (leftChild){
			parent.appendChild(leftChild);
		}
		if (rightChild){
			parent.appendChild(rightChild);
		}


	// if( this.data === 2){
	//  	console.log(" \n это this ")
	//  	console.log(this)

	//  	console.log(" \n это this.parent ")
	//  	console.log(parent)

	// 	console.log(" \n это this.parent.parent ")
	// 	console.log(grandParent)

	// 	console.log(" \n это parentRightChild ")
	// 	console.log(parentRightChild)

	// 	console.log(" \n это this.parent.parent ")
	// 	console.log(leftChild)

	// 	console.log(" \n это this.parent.parent ")
	// 	console.log(rightChild)
	// }
	}
}

module.exports = Node;
