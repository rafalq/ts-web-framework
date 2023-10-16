import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<
	User,
	UserProps
> {
	eventsMap(): { [key: string]: () => void } {
		return {
			"click:.set-age": this.onSetAgeClick,
			"click:.set-name": this.onSetNameClick,
		};
	}

	onSetNameClick = (): void => {
		const input =
			this.parent.querySelector("input");

		const name = input?.value;

		if (name) {
			this.model.set({ name });
		} else {
			alert("Name needs at least 1 character");
		}
	};

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	template(): string {
		return `
      <div>
        <h1>UserForm</h1>
        <p>User: ${this.model.get("name")} ${
			this.model.get("id") === undefined
				? ""
				: `#${this.model.get("id")}`
		}</p>
        <p>User Age: ${this.model.get("age")}</p>
        <input />
        <button class="set-name">CHANGE NAME</button>
        <button class="set-age">SET RANDOM AGE</button>
      </div>
      `;
	}
}
