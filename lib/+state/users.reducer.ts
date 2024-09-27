import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";

import * as UsersActions from "./users.actions";
import { UsersEntity } from "@users/core/data-access";
import { LoadingStatus } from "@users/core/data-access";
import { BehaviorSubject, map, of } from "rxjs";

let a = 5;
let b = 10;

let c = new BehaviorSubject(5);
let d = new BehaviorSubject(10);

console.log(a);
console.log(a);

console.log(c.value);
console.log(d.getValue());

a = 7;
b = 12;

c.next(6);
d.next(13 );

const e = 5;
const f = 10;

const g = new BehaviorSubject(5).asObservable();
const h = of(10);

const sourceData$ = new BehaviorSubject(5);
const calculatedData$ =  sourceData$.pipe(
    map((value) => value * 2)
);

calculatedData$.subscribe(
    value => {
        console.log(value)
    }
);