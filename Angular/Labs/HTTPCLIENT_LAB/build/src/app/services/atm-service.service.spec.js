"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var atm_service_service_1 = require("./atm-service.service");
describe('AtmServiceService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [atm_service_service_1.AtmServiceService]
        });
    });
    it('should be created', testing_1.inject([atm_service_service_1.AtmServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=atm-service.service.spec.js.map