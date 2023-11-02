import { IBase } from "./base";

export interface IProduct extends IBase {
	id: string;
	name: string;
	description: string;
	price: number;
	salePrice?: number;
	quantity: number;
	image: string[];
}
