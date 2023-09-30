import { User } from "./models/User";

const user = new User({
	name: "Johnny",
	age: 23,
});

user.on("change", () => {});

console.log(user);
