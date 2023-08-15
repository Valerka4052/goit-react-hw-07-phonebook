export type InitialFilterType = string;
export type ContactResponseType = {
    phone: string
    name: string 
    id:string
}
export type ErrorType = {
    message: string
} 

export type InitialStateContactsSliceType = {
    items: Array<ContactResponseType>
    isLoading: boolean
    error: ErrorType
};
export type ContactType = {
    phone: string
    name: string 
}