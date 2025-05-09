# IOC控制反转 DI依赖注入

nestjs的设计模式

## IOC

``控制反转``（Inversion of Control），具体定义是高层模块不应该依赖低层模块，二者都应该依赖其抽象；抽象不应该依赖细节；细节应该依赖抽象。

## DI

``依赖注入``（Dependency Injection）其实和IOC是同根生，这两个原本就是一个东西，只不过由于控制反转概念比较含糊（可能只是理解为容器控制对象这一个层面，很难让人想到谁来维护对象关系），所以2004年大师级人物Martin Fowler又给出了一个新的名字：“依赖注入”。 类A依赖类B的常规表现是在A中使用B的instance。

案例未使用控制反转和依赖注入之前的代码

```ts
class A {
	name: string
	constructor(name: string) {
		this.name = name
	}
}
 
 
class B {
	age:number
	entity:A
	constructor (age:number) {
		this.age = age;
		this.entity = new A('小满')
	}
}
 
const c = new B(18)
```

我们可以看到，**B** 中代码的实现是需要依赖 **A** 的，**两者的代码耦合度非常高。当两者之间的业务逻辑复杂程度增加的情况下，维护成本与代码可读性都会随着增加，并且很难再多引入额外的模块进行功能拓展**。

为了解决这个问题可以使用IOC容器

```ts
class A {
	name: string
	constructor(name: string) {
		this.name = name
	}
}
 
 
class C {
	name: string
	constructor(name: string) {
		this.name = name
	}
}
//中间件用于解耦
class Container {
	modeuls: any
	constructor() {
		this.modeuls = {}
	}
	provide(key: string, modeuls: any) {
		this.modeuls[key] = modeuls
	}
	get(key) {
		return this.modeuls[key]
	}
}
 
const mo = new Container()
mo.provide('a', new A('测试1'))
mo.provide('c', new C('测试2'))
 
class B {
	a: any
	c: any
	constructor(container: Container) {
		this.a = container.get('a')
		this.c = container.get('c')
	}
}
 
new B(mo)
```

其实就是写了一个中间件，来收集依赖，主要是为了解耦，减少维护成本