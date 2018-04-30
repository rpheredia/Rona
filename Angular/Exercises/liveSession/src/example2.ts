import { PromisePhone } from './example1';
let x = new PromisePhone();

let boughtPhone = x.boughtPhone();
let showPhone = x.showoffPhone();

boughtPhone.then ( (result) => {
    console.log(result);
    showPhone.then ((resp) => {
        console.log(resp);
    })
});