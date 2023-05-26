const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'acbc8c3254msheb3e17a8482eb55p1b00a2jsn3355b454281a',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

export interface ResponseObjectType {
    fname: string;
    sname: string;
    percentage: number;
    result: string;
}

export async function getPercentage<ResponseObject>(fname: string, sname: string): Promise<ResponseObject> {
    return await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, options)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        else {
            throw new Error(`Http error ${response.statusText}`)
        }
    })
}