// ************************
// ★ Class and Constructor
// ************************


// ▶ prototype 직접 조작을 피하고 대신 class 사용
// bad
function QueueB(contents = []) {
    this.queue = [...contents];
}
QueueB.prototype.pop = function() {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
};
// good
class Queue {
    constructor(contents = []) {
        this.queue = [...contents];
    }
    pop() {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
    }
}

// ▶ 상속은 extends 사용
// - instanceof를 파괴하지 않고 프로토타입을 상속하기 위해 내장된 방법임
// good
class PeekableQueue extends Queue {
    peek() {
        return this.queue[0];
    }
}

// ▶ 메소드가 this를 반환하게 하여 메소드 체이닝 가능
// bad
function JediB() {

}
JediB.prototype.jump = function() {
    this.jumping = true;
    return true;
};
JediB.prototype.setHeight = function(height) {
    this.height = height;
};

var luke = new JediB();
luke.jump();
luke.setHeight(20);
console.table({luke});

// good
class Jedi {
    jump() {
        this.jumping = true;
        return this;
    }

    setHeight(height) {
        this.height = height;
        return this;
    }
}

var luke = new Jedi();
luke.jump()
    .setHeight(20);
console.table({luke});

// ▶ toString() 사용해도 되지만, 동작 여부 및 사이드 이펙트 확인 필요
class Jedi1 {
    constructor(options = {}) {
        this.name = options.name || 'no name';
    }

    getName() {
        return this.name;
    }

    toString() {
        return `Jedi - ${this.name}`;
    }
}

var luke = new Jedi1({name: "Luke Skywalker"});
console.log(luke.getName());
console.log(luke.toString());

// ▶ 정적 메소드에서는 this 사용 금지. 비정적 메소드에서는 this를 사용해야함
// bad
class FooB {
    bar() {
        console.log('bar');
    }
}
// good
class Foo {
    constructor() {
        this.bar = 'bar';
    }
    barMethod() {
        return this.bar; // this 사용
    }
    static bazMethod() {
        return 'baz';
    }
}

var foo = new Foo();
console.log('non-static method: ', foo.barMethod());
console.log('static method: ', Foo.bazMethod());