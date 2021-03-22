import {handleSubmit} from '../src/client/js/form';

describe("Testing the submit functionality", ()=>{
    test("Testing the handleSubmit() function",()=>{
        expect(handleSubmit).toBeDefined();
    })
})