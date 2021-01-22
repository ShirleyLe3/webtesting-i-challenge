module.exports = {
	success,
	fail,
	repair,
	get,
};

function success(item) {
	let enhancement = item.enhancement;
	if (enhancement < 20) {
		enhancement++;
	}
	return { ...item, enhancement: enhancement };
}

function fail(item) {
	let enhancement = item.enhancement;
	let durability = item.durability;
	if (enhancement < 15) {
		durability = durability - 5;
	}
	if (enhancement >= 15) {
		durability = durability - 10;
	}
	if (enhancement > 16) {
		enhancement--;
	}
	return { ...item, durability, enhancement };
}

function repair(item) {
	return { ...item, durability: 100 };
}

function get(item) {
	return { ...item };
}
