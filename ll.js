function LinkedList() {
	this = self;
	self.head = null;
	self.tail = null;
}

function node(value, next, prev) {
	this = self;
	self.value = value;
	self.next = next;
	self.prev = prev;
}

//This in this fucntion always refers to the this of class LinkedList as we are in the prototype function of LinkedList
//addToHead functions add a new node to the head of the linkedlist.
LinkedList.prototype.addToHead = (value) => {
	//this.head is referencing to the previous head node
	var newNode = new Node(value, this.head, null);
	this.head ? this.head.prev = newNode : this.tail = newNode;
	this.head = newNode;
}

LinkedList.prototype.addToTail = (value) => {
	var newNode = new Node(value, null, this.tail)
	this.tail ? this.head.next = newNode : this.head = newNode;
	this.tail = newNode
}

LinkedList.prototype.removehead = () => {
	//Check if the LL is empty; if it is make the operation illegal!! 
	if(!this.head) return null
	var value = this.head.value;
	this.head = this.head.next;
	//If after removing the node you have an empty list; set tail to null.
	(this.head) ? this.head.prev = null : this.tail = null;;
	return value;
}

LinkedList.prototype.removeTail = () => {
	if(!this.tail) return null
	var value = this.tail.value;
	this.tail = this.tail.prev;
	//If after removing the node you have an empty list; set head to null.
	(this.tail) ? this.tail.next = null : this.head = null;;
	return value;	
}

LinkedList.prototype.search = (value) => {
	if(!this.head) return null
	var currentNode = this.head
	while(currentNode) {
		if(value === currentNode.value) return value
		currentNode = currentNode.next;  
	}
	return null
}