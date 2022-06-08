const mongoose= require('mongoose')

const RandomProductSchema= new mongoose.Schema({
 locationName:{type:String,required:true},
 googleMapLink:{type:String,required:true},
 address:{type:String,required:true},
 mediaType:{type:String,required:true},
 mediaLink:{type:String,required:true},
 description:{type:String,required:true},
 emailId:{type:String,required:true},
 emailBody:{type:String,required:true}
})

module.exports=mongoose.model('RandomProducts',RandomProductSchema)