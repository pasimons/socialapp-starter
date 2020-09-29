// import React from "react"
// import DataService from '../../dataService'
// class FileUploader extends React.Component {
//     state = { 
//         imgURL: `https` ,
//         formData: null,
// }


//     setFallBackImage = event => {
//         event.target.src = "https://www.gravatar.com/avatar/?d=mp"
//     }

//     createFormData = event => {
//         const file = event.target.files[0]
//         const formData = new FormData()
//         formData.append("picture", file)

//         this.setState({ formData} )

//         // console.log(file)
//         // console.log(formData)
//     }

// handleUpload = event => {
//     DataService.uploadPicture(this.state.formData)
//     .then(response => {
//         if (response.data.statusCode === 200) {
//             this.updatePicture()
//         }
//     })
// }

// updatePicture() {
//     const timestamp = Date.now()
//     consr imageURL = ``
//     this.setState({ imgURL} )
    
// }

//     render() {
//         return (
//             <div className='FileUploader'>
//                 <input type="file" name='picture' onChange={this.createFormData} />
//                 <button onClick={this.handleUpload}>Upload</button>

//                 <div className='image-preview'>
//                     <img
//                         src={this.state.imgUrl}
//                         alt="user"
//                         onError={this.setFallBackImage}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

// export default FileUploader