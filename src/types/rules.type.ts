import { RuleType } from "rc-field-form/lib/interface";

export interface RulesForm{
    required?: boolean
    message?: string
    type?:  RuleType
    min?:number
}