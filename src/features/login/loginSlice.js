import { createSlice } from '@reduxjs/toolkit'

const loginDb = [
    {email: 'test@hotmail.be', password: "0123"}, 
    {email: "ttt@hotmail.com" , password: '789'}
]

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        acces: false,
        denied: false,
    },
    reducers: {
        submit: (state, action)=>{
            const {email , password} = action.payload;

            const hasUser = loginDb.some(user => user.email === email && user.password === password);
            if (hasUser) {
                return {acces: true, denied: false}
            } else {
                return {acces: false, denied: true}
            }         
        },
        logout: ()=>{
            return {acces: false, denied: false}
        }
    }
})

export const {submit,logout} = loginSlice.actions;
export default loginSlice.reducer;