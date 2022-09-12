{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  }

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {
    }
    get size() {
      return this._size;
    }
    push(value: T) {
      if (this._size === this.capacity) {
        throw new Error(`Stack is Full`);
      }
      this.head = {
        value,
        next: this.head
      }
      this._size++;
    }
    pop(): T {
      if (this.head == null) {
        throw new Error(`Stack is Empty`);
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(10);
  stack.push('song');
}