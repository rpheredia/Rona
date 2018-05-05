/// <reference path="ZooAnimals.ts" />
namespace Zoo {
    export class Bird implements Animal {
        skinType = "feathers";
        isMammal() {
            return false;
        }
    } 
}