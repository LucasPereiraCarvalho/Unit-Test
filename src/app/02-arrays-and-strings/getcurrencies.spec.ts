import { getCurrencies } from "./getCurrencies"

describe('getCurrencies', () => {
    it('Should contain currencie in array', () => {
        const currencies = getCurrencies();

        expect(currencies).toContain('USD');
        expect(currencies).toContain('AUD');
        expect(currencies).toContain('EUR');
    })
})