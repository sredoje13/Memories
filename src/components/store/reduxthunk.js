import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const getElement=createAsyncThunk('movies/get',async()=>{
 const response=await axios.get("https://memoriess.herokuapp.com/books")
 return response
})
const postElement=createAsyncThunk('movies/post',async(item)=>{
    const response=await axios.post("https://memoriess.herokuapp.com/books", item)
    return response.data
   })
 const deleteElement=createAsyncThunk('movies/delete',async(item)=>{
 await axios.delete(`https://memoriess.herokuapp.com/books/${item._id}`)
 return item
   })

const updateElement=createAsyncThunk('movies/update',async(item)=>{
await axios.put(`https://memoriess.herokuapp.com/books/${item._id}`, item)
return item
   })
const updateLike=createAsyncThunk('movies/like',async(item)=>{
await axios.put(`https://memoriess.herokuapp.com/books/${item._id}/likeone`, item)
return item
})
const unLike=createAsyncThunk('movies/unlike',async(item)=>{
    await axios.put(`https://memoriess.herokuapp.com/books/${item._id}/unlikeone`, item)
    return item
    })
const favitem=createAsyncThunk('movies/favorite', async(item)=>{
  await axios.put(`https://memoriess.herokuapp.com/books/${item._id}/favone`,item)
  return item

})
const unfavitem=createAsyncThunk('movies/unfavorite', async(item)=>{
  await axios.put(`https://memoriess.herokuapp.com/books/${item._id}/unfavone`,item)
  return item

})
export {unfavitem}
export {favitem}
export {unLike}
export {updateLike}
export {getElement}
export {postElement}
export {deleteElement}
export {updateElement}