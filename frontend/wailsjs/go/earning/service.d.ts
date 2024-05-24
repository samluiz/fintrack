// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {types} from '../models';

export function Create(arg1:types.EarningInput):Promise<types.Earning>;

export function Delete(arg1:number):Promise<void>;

export function FindAll():Promise<Array<types.EarningOutput>>;

export function FindAllByProfileID(arg1:number,arg2:types.Pagination):Promise<types.PaginatedResult>;

export function FindByID(arg1:number):Promise<types.EarningToUpdate>;

export function Update(arg1:number,arg2:types.EarningUpdate):Promise<types.Earning>;
