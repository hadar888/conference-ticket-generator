import React from "react";

const UploadImage = () => {
    return (
        <div className="form-item">
            <label>
                Upload Avatar
            </label>
            <div className="drag-and-drop" onDrop={() => { }} onDragOver={() => { }}>
                <img alt="upload" src="assets/images/icon-upload.svg" />
                drag and drop or click to upload
            </div>
            <div className="extra-info">
                <img src="assets/images/icon-info.svg" alt="info" />
                Upload your photo (JPG or PNG, max size: 500KB).
            </div>
        </div>
    )
};

export default UploadImage;