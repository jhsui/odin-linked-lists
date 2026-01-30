class Node {
  //   #value;
  //   #nextNode;

  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
    // this.#value = value;
    // this.#nextNode = nextNode;
  }

  //   get value() {
  //     return this.#value;
  //   }

  //   set value(x) {
  //     this.#value = x;
  //   }

  //   get nextNode() {
  //     return this.#nextNode;
  //   }

  //   set nextNode(node) {
  //     this.#nextNode = node;
  //   }
}

class LinkedList {
  #size;

  constructor() {
    this.firstNode = new Node();
    this.#size = 0;
  }

  size() {
    return this.#size;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.size() === 0) {
      this.firstNode = newNode;
      this.#size++;
      return;
    }

    let currentNode = this.firstNode;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = newNode;
    this.#size++;
  }

  prepend(value) {
    const newFirstNode = new Node(value, this.firstNode);
    // newFirstNode.nextNode = this.firstNode.nextNode;

    this.firstNode = newFirstNode;

    this.#size++;
  }

  // how to make size filed private??

  head() {
    if (this.size() === 0) {
      return undefined;
    }

    return this.firstNode.value;
  }

  tail() {
    if (this.size() === 0) {
      return undefined;
    }

    let currentNode = this.firstNode;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    return currentNode.value;
  }

  at(index) {
    if (!Number.isInteger(index) || index < 0 || index > this.size() - 1) {
      return undefined;
    }

    let currentNode = this.firstNode;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode.value;
  }

  pop() {
    if (this.size() === 0) {
      return undefined;
    }

    const returnedNode = this.firstNode;

    this.firstNode = this.firstNode.nextNode;

    this.#size--;
    return returnedNode;
  }

  contains(value) {
    if (this.size() === 0) {
      return false;
    }

    let currentNode = this.firstNode;

    while (currentNode.nextNode !== null) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.nextNode;
      }
    }

    return false;
  }

  findIndex(value) {
    if (this.size() === 0) {
      return -1;
    }

    let index = 0;
    let currentNode = this.firstNode;

    while (currentNode.nextNode !== null) {
      if (currentNode.value === value) {
        return index;
      } else {
        index++;
        currentNode = currentNode.nextNode;
      }
    }

    return -1;
  }

  toString() {
    if (this.size() === 0) {
      return "";
    }

    let string = "";
    let currentNode = this.firstNode;
    while (currentNode.nextNode !== null) {
      string += `( ${currentNode.value} ) -> `;

      currentNode = currentNode.nextNode;
    }

    string += `( ${currentNode.value} )`;
    return string;
  }
}

export { LinkedList };
