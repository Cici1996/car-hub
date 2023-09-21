import { CarProps, filterProps } from "@/types";

export async function fetchCars(filter: filterProps) {
    const { manufacturer, year, model, limit, fuel } = filter

    const headers = {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers
    })

    const result = await response.json();

    return result
}

export function generateCarImageUrl(car: CarProps, angle?: string) {
    const url = new URL('https://cdn.imagin.studio/getimage')

    const { make, year, model } = car
    url.searchParams.append('customer', 'hrjavascript-mastery')
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split(' ')[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)

    return `${url}`

}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePriceDay = 50
    const mieageFactor = 0.1
    const ageFactor = 0.05

    const mileageRate = city_mpg * mieageFactor;
    const agerate = (new Date().getFullYear() - year) * ageFactor

    const rentalratePay = basePriceDay + mileageRate + agerate

    return rentalratePay.toFixed(0)
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(type, value)
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    return newPathName
}