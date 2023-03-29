import { createSlice } from '@reduxjs/toolkit'
import { getElement } from './reduxthunk'
import { deleteElement } from './reduxthunk'
import { updateElement } from './reduxthunk'
import { postElement } from './reduxthunk'
import { updateLike } from './reduxthunk'
import { unLike } from './reduxthunk'
import { favitem } from './reduxthunk'
import { unfavitem } from './reduxthunk'
const booksandmovies=createSlice({
    name:"booksandmovies",
    initialState:{items:[], 
        isloading:true, 
        iserror:null, 
       
    }, 
    extraReducers(builder){
    builder.addCase(getElement.pending,(state,action)=>{
    state.isloading=true
    })
    builder.addCase(getElement.fulfilled,(state,action)=>{
state.isloading=false
state.items=action.payload.data
    })
    builder.addCase(getElement.rejected,(state,action)=>{
        state.isloading=false
        state.iserror=true;

    })
    builder.addCase(updateElement.pending,(state,action)=>{
      state.isloading=true
    })
    builder.addCase(updateElement.fulfilled,(state,action)=>{
        const findindex=state.items.findIndex((item)=>item._id===action.payload._id)
      state.items[findindex]=action.payload
      console.log(findindex)


    })
   
    builder.addCase(postElement.pending,(state,action)=>{
       state.isloading=true
    })
    builder.addCase(postElement.fulfilled,(state,action)=>{
       
        state.items.push(action.payload)
    })
   
    builder.addCase(deleteElement.pending,(state,action)=>{
        state.isloading=true
    })
    builder.addCase(deleteElement.fulfilled,(state,action)=>{
        state.isloadingdelete=false
        state.items=state.items.filter((item)=>item._id!==action.payload._id)

    })
  
    builder.addCase(updateLike.pending,(state,action)=>{
     state.isloading=false
    })
    builder.addCase(updateLike.fulfilled,(state,action)=>{
        state.isloadingupdate=false
        const findindex=state.items.findIndex((item)=>item._id===action.payload._id)
       
         state.items[findindex]={...action.payload, likes:action.payload.likes+1} 
    })

    builder.addCase(updateLike.rejected,(state,action)=>{
        state.isloading=false

    })
    
       builder.addCase(unLike.fulfilled,(state,action)=>{
           state.isloadingunlike=false
          
           const findindex=state.items.findIndex((item)=>item._id===action.payload._id)
           state.items[findindex]={...action.payload, unlikes:action.payload.unlikes+1}
       })
      
     
       builder.addCase(favitem.fulfilled,(state,action)=>{
          
           const findindex=state.items.findIndex((item)=>item._id===action.payload._id)
           console.log(action.payload)
           state.items[findindex]={...action.payload, isfavorite:action.payload.isfavorite}

       })
       builder.addCase(unfavitem.fulfilled,(state,action)=>{
          
        const findindex=state.items.findIndex((item)=>item._id===action.payload._id)
        console.log(action.payload)
        state.items[findindex]={...action.payload, isfavorite:!action.payload.isfavorite}

    })
     

    }
})
const additem=createSlice({
    name:"additem",
    initialState:{showform:false, index:null},
    reducers:{
        show(state,action){
            state.showform=!state.showform
        },
        setitem(state,action){
            state.index=action.payload
           
        },
        close(state,action){
            state.showform=false
        }
       
    }


})

const showchange=createSlice({
    name:"showchange",
    initialState:{showform:false,item:{}},
    reducers:{
        show(state,action){
            state.showform=true
            state.item=action.payload
        },
        close(state,action){
            state.showform=false
            state.item={}
        },
    }
})
const deleteItem=createSlice({
    name:"deleteItem",
    initialState:{item:{}},
    reducers:{
        delete(state,action){
            state.item=action.payload
        },
       
        },
    }
)

const searchItem=createSlice({
    name:"searchItem",
    initialState:{item:""},
    reducers:{
        search(state,action){
            state.item=action.payload
        },
       
        },
    }
)
export const Deleteone=deleteItem.actions
export const Searcheone=searchItem.actions
export const Showchangeform=showchange.actions
export const AddItems=additem.actions
export const addreducer=additem.reducer
export const reducerrr=booksandmovies.reducer  
export const reducerform=showchange.reducer 
export const deletereducers=deleteItem.reducer
export const searchreducers=searchItem.reducer

