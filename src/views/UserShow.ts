import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<
	User,
	UserProps
> {
	template(): string {
		return ` <h1>User Detail</h1>
    <p>Name #Id: ${this.model.get("name")} ${
			!this.model.get("id")
				? "#---"
				: `#${this.model.get("id")}`
		}</p>
    <p>Age: ${this.model.get("age")}</p>`;
	}
}
