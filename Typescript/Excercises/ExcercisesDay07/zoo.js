var Zoo;
(function (Zoo) {
    var RepTile = /** @class */ (function () {
        function RepTile() {
            this.skinType = "scales";
        }
        RepTile.prototype.isMammal = function () {
            return false;
        };
        return RepTile;
    }());
    Zoo.RepTile = RepTile;
})(Zoo || (Zoo = {}));
var Zoo;
(function (Zoo) {
    var Bird = /** @class */ (function () {
        function Bird() {
            this.skinType = "feathers";
        }
        Bird.prototype.isMammal = function () {
            return false;
        };
        return Bird;
    }());
    Zoo.Bird = Bird;
})(Zoo || (Zoo = {}));
var lizard = new Zoo.RepTile();
console.log(lizard.isMammal());
console.log(lizard.skinType);
var parrot = new Zoo.Bird();
console.log(parrot.isMammal());
console.log(parrot.skinType);
