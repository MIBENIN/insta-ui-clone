// import React from "react";

// const PostModal = ({ showModal, handleClose }) => {
//   return (
//     <div
//       className={`modal ${showModal ? "show" : ""}`}
//       tabIndex="-1"
//       role="dialog"
//       style={{ display: showModal ? "block" : "none" }}
//     >
//       <div className="modal-dialog modal-dialog-centered" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title text-center">Create Post</h5>
//             <button
//               type="button"
//               className="btn-close"
//               onClick={handleClose}
//             ></button>
//           </div>
//           <div className="modal-body">
//             <div className="mb-3">
//               <label htmlFor="postTitle" className="form-label">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="postTitle"
//                 placeholder="Enter post title"
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="postMedia" className="form-label">
//                 Photo or Video
//               </label>
//               <input
//                 type="file"
//                 className="form-control"
//                 id="postMedia"
//                 placeholder="Enter photo or video URL"
//               />
//             </div>
//           </div>
//           <div className="modal-footer">
//             <button type="button" className="btn btn-secondary">
//               Post
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostModal;
import React from "react";

const PostModal = ({ showModal, handleClose }) => {
  const modalStyle = {
    display: showModal ? "block" : "none",
    backdropFilter: showModal ? "blur(10px)" : "none",
  };

  return (
    <div
      className={`modal ${showModal ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={modalStyle}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center">Create Post</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="postTitle" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="postTitle"
                placeholder="Enter post title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="postMedia" className="form-label">
                Photo or Video
              </label>
              <input
                type="file"
                className="form-control"
                id="postMedia"
                placeholder="Enter photo or video URL"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
