import { greet } from "./greet"

describe('greet', () => {
    it('Should contain the name in the message', () => {
        expect(greet('Lucas')).toContain('Lucas')
    })
})