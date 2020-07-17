export * from './tag.model'
export * from './votetopic.model'
export * from './voteitem.model'



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

    // ===============================
    export type text_behavior = 'edit' | 'create'


    // ===============================
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
        nestedList?: resultList;
    }

    export type partitionKey = {
        pkField: string; pkValue: string
    }

    // export type PlainObject = Record<string, Primitive>;
}

export default MyTypes