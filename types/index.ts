import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    containerStyle?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType: 'button' | "submit"
    textStyle?: string,
    rightIcon?: string,
    isDisabled?: boolean
}

export interface SearchManufacturerProps {
    setSelected: (manufacturer: string) => void,
    selected: string
}

export interface CarProps {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year: number
}

export interface filterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface OptionsProps {
    title: string,
    value: string
}

export interface CustomFilterProps {
    title: string,
    options: OptionsProps[],
    setFilter: (value: any) => void
}

export interface ShowMoreProps {
    pageNumber: number,
    isNext: boolean,
    setLimit: (value: number) => void
}

export interface SearchBarProps {
    setManufacturer: (value: string) => void,
    setModel: (value: string) => void
}