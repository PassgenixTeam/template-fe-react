import { IAddress } from "@api/http-request/requests/the-rike-server/models/address";
import { IBase } from "@api/http-request/requests/the-rike-server/models/base";

export interface IOrderProduct {
	productId: string;
	quantity: number;
	unitPrice: number;
	name: string;
}

export enum ORDER_STATUS {
	PENDING = "PENDING",
	COMPLETED = "COMPLETED",
	CANCELLED = "CANCELLED",
}

export enum ORDER_STATUS_PAYMENT {
	PENDING = "PENDING",
	COMPLETED = "COMPLETED",
	CANCELLED = "CANCELLED",
}

export interface IOrder extends IBase {
	id: string;
	firstName: string;
	lastName: string;
	products: IOrderProduct[];
	email: string;
	phone: string;
	address: IAddress;
	total: number;
	statusPayment: ORDER_STATUS_PAYMENT;
	status: ORDER_STATUS;
	paypalOrderId?: string;
}
