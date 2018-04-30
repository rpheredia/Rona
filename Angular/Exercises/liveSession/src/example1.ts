
export class PromisePhone {
    constructor () {
    }

    public boughtPhone() {
        return new Promise( (resolve,reject) => {
            setTimeout(() => {
                resolve('My mom bought me this phone:');
            }, 2000)        
    })
}

    public showoffPhone() {
        return new Promise( (resolve,reject) => {
            setTimeout(() => {
                resolve('I am showing it off:');
            }, 2000)        
    })
}

}