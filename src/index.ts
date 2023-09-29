import { User } from "./models/User";

const user = new User({
	name: "Johnny",
	age: 23,
});

console.log(user.get("name"));
console.log(user.get("age"));
