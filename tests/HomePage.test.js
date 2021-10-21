import {sumAll} from '../src/components/pages/Home/HomePage'

describe('Homepage Testing', () => {
    
    it('Should sum all numbers in array of object.value',() => {
        const sumTotal = sumAll([{value: 1},{value: 2},{value: 5}])

        expect(sumTotal).toEqual(8)
    })

    it('Should return NaN when trying sum string',() => {
        const sumTotal = sumAll([{value: 1},{value: 2},{value: 'asd'}])

        expect(sumTotal).toEqual(NaN)
    })
    
})