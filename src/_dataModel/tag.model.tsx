
export type type_Tag = {
    id?: String;
    name?:String;
    isActive?: Boolean;
    createdAt? : any;
    sortNumber?: number;
}

export const model_Tag = {
    id: {label: "ID"},
    name: {label: "Tag name"},
    isActive: {label: "Active"},
    createdAt: {label: "Created At"},
    sortNumber: {label: "Sort Number"}
}