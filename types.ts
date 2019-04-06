export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type PickKeys<T, Conditions extends Array<keyof T>> = Pick<T, {
    [K in keyof T]: K extends (Conditions extends Array<infer O> ? O : never) ? K : never
}[keyof T]>