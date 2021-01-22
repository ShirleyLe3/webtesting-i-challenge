const enhancer = require('./enhancer.js');
// test away!
test("runs our first test", () => {
    expect(1+1).toBe(2)
})

test("checks the enhancement functions", () => {
expect(
	enhancer.repair({
		name: "",
		durability: 0,
		enhancement: 0,
	})
).toEqual({
	name: "",
	durability: 100,
	enhancement: 0,
}),
	expect(
		enhancer.success({
			name: "",
			durability: 0,
			enhancement: 0,
		})
	).toEqual({
		name: "",
		durability: 0,
		enhancement: 1,
	}),
	expect(
		enhancer.success({
			name: "",
			durability: 0,
			enhancement: 20,
		})
	).toEqual({
		name: "",
		durability: 0,
		enhancement: 20,
	}),
	expect(
		enhancer.fail({
			name: "",
			durability: 10,
			enhancement: 14,
		})
	).toEqual({
		name: "",
		durability: 5,
		enhancement: 14,
	}),
	expect(
		enhancer.fail({
			name: "",
			durability: 10,
			enhancement: 15,
		})
	).toEqual({
		name: "",
		durability: 0,
		enhancement: 15,
	}),
	expect(
		enhancer.fail({
			name: "",
			durability: 10,
			enhancement: 17,
		})
	).toEqual({
		name: "",
		durability: 0,
		enhancement: 16,
	});
})