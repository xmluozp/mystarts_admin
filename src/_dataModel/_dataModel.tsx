export * from './tag.model'
export * from './votetopic.model'



// ======= some basic types
// export type resultList = {
//     list: any[];
//     // count: Number;
//     nextToken?: String;
//     message?: String;
//     error?: String;
// }

// export type pagination = {
//     pages: String[];
//     pageIndex: number;
// }

// export type resultSingleItem = {
//     item: any;
//     itemError?: any;
//     message?: String;
//     error?: String;
// }

declare namespace MyTypes {

    export type resultList = {
        list: any[];
        // count: Number;
        nextToken?: String;
        message?: String;
        error?: String;
    }
    
    export type pagination = {
        pages: String[];
        pageIndex: number;
    }
    
    export type resultSingleItem = {
        item: any;
        itemError?: any;
        message?: String;
        error?: String;
    }


}

export default MyTypes