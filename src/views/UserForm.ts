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
			"click:.save-model": this.onSaveClick,
		};
	}

	onSaveClick = (): void => {
		this.model.save();
	};

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
        <input placeholder="${this.model.get(
					"name"
				)}"/>
        <button class="set-name">CHANGE NAME</button>
        <button class="set-age">SET RANDOM AGE</button>
        <button class="save-model">SAVE USER</button>
      </div>
      `;
	}
}
