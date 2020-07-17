
import {type_Votetopic} from './votetopic.model'

export type type_Voteitem = {
    id?: String;
    title?:String;
    votetopic: type_Votetopic; 
    isActive: Boolean;
    createdAt? : any;
    votetopicID?: string; // parentId, used to modify
    sortNumber: number;
}
// type PlainObject = Record<string, Primitive>;

export const model_Voteitem = {
    id: {label: "ID"},
    title: {label: "Title"},
    votetopic: {label: "Topic"},
    isActive: {label: "Active"},
    createdAt: {label: "Created At"},
    sortNumber: {label: "Sort"}
}