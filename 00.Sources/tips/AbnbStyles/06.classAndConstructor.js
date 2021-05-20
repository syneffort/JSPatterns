// ************************
// �� Class and Constructor
// ************************


// �� prototype ���� ������ ���ϰ� ��� class ���
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

// �� ����� extends ���
// - instanceof�� �ı����� �ʰ� ������Ÿ���� ����ϱ� ���� ����� �����
// good
class PeekableQueue extends Queue {
    peek() {
        return this.queue[0];
    }
}

// �� �޼ҵ尡 this�� ��ȯ�ϰ� �Ͽ� �޼ҵ� ü�̴� ����
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

// �� toString() ����ص� ������, ���� ���� �� ���̵� ����Ʈ Ȯ�� �ʿ�
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

// �� ���� �޼ҵ忡���� this ��� ����. ������ �޼ҵ忡���� this�� ����ؾ���
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
        return this.bar; // this ���
    }
    static bazMethod() {
        return 'baz';
    }
}

var foo = new Foo();
console.log('non-static method: ', foo.barMethod());
console.log('static method: ', Foo.bazMethod());