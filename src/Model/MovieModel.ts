
interface  Show{
    image? : { medium? : string, original? : string},
    name : string,
    genres : string[],
    language : string,
    rating : {average : number},
    network : {
        country? : { code : string}
    },
    schedule : {time : number, days : string[]},
    id : string,
    runtime : number,
    summary : string
}
export interface MovieModel{
    show : Show
}