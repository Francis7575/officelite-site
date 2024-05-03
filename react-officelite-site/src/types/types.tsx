export type defaultOption = {
    name: string,
    price: string
}

export type FormData = {
    name: string,
    email: string,
    phoneNumber: string,
    company: string,
    [key: string]: string;
};

export type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export type CardProps = {
    planName: string,
    planPrice: string,
    userQuantity: string,
    benefitOne: string,
    benefitTwo: string,
    benefitThree: string,
    link: string
}

export type SelectionBoxProps = {
    isOpen: boolean,
    onSelectOption: (option: { name: string, price: string }) => void,
}

declare module 'react' {
	interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
		className?: string;
	}
}