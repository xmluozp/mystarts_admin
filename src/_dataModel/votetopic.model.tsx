
export type type_Votetopic = {
    id?: String;
    title?:String;
    description?: String;
    voteitems?: any[];
    createdAt? : any;
}
// type PlainObject = Record<string, Primitive>;

export const model_Votetopic = {
    id: {label: "ID"},
    title: {label: "Vote for"},
    description: {label: "Description"},
    voteitems: {label: "ID"},
    createdAt: {label: "Created At"}
}