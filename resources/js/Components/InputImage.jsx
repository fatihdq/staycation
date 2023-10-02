import Button from "./Button";
import propTypes from "prop-types";

import { useState, useEffect } from "react";

export default function InputImage(props) {
  const hidden = document.getElementById("hidden-input");
  const [fileImages, setFileImages] = useState([]);

  const imgUrlToFile = async (urls) => {
    if (urls.length > 0) {
      await urls.forEach((url) => {
        fetch(url)
          .then((response) => response.blob())
          .then((myBlob) => {
            addFile(
              new File([myBlob], url.split("/").slice(-1), {
                type: myBlob.type,
              })
            );
          })
          .catch((error) => console.error(error));
      });
    }
  };

  useEffect(() => {
    imgUrlToFile(props.initialValue);
  }, []);

  useEffect(() => {
    props.handleOnChange(fileImages);
  }, [fileImages]);

  const addFile = (file) => {
    const isImage = file.type.match("image.*");
    if (isImage) {
      if (fileImages.length !== props.imageLimit) {
        setFileImages((prevArray) => [...prevArray, file]);
      }
    }
  };

  const buttonUploadClick = () => {
    hidden.click();
    hidden.onchange = (e) => {
      for (const file of e.target.files) {
        addFile(file);
      }
    };
  };

  const deletePreview = (file) => {
    setFileImages(fileImages.filter((item) => item !== file));
  };
  let templatePreview = [];
  if (fileImages.length !== 0) {
    fileImages.forEach((file, index) => {
      templatePreview.push(
        <Template
          key={file.name}
          objectURL={URL.createObjectURL(file)}
          filename={file.name}
          file={file}
          handleDelete={(v) => deletePreview(v)}
        />
      );
    });
  }

  return (
    <>
      <div className="mt-1 mb-3">
        <label className="block mb-2 form-label">{props.label}</label>
        <div className="w-1/2">
          {/* <!-- file upload modal --> */}
          <article aria-label="File Upload Modal" className="flex flex-col">
            <section className="flex flex-col">
              <input
                id="hidden-input"
                type="file"
                name="image"
                multiple
                className="hidden"
              />

              <Button
                type="button"
                title="Upload a file"
                onClick={buttonUploadClick}
                isPassive
                isMedium
              />

              <h1 className="pt-8 pb-3 font-semibold sm:text-sm text-gray-900">
                To Upload
              </h1>

              <ul id="gallery" className="flex">
                <li
                  id="empty-image"
                  className={`${
                    fileImages.length === 0 ? "" : "hidden"
                  } h-full w-full text-center flex flex-col items-center justify-center items-center`}
                >
                  <img
                    src="/images/icon-default-image.png"
                    width={120}
                    height={120}
                    alt="no data"
                  />
                  <span className="text-small text-gray-500">
                    No files selected
                  </span>
                </li>
                {templatePreview}
              </ul>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}

function Template(props) {
  return (
    <li key={props.objectURL} id={props.objectURL} className="block p-1">
      <article tabIndex="0" className="relative w-full h-full">
        <div className="rounded-md focus:outline-none focus:shadow-outline bg-gray-100  shadow-sm">
          <img
            src={props.objectURL}
            alt={props.filename}
            style={{ height: 4 * 25, width: 6 * 25 }}
          />
        </div>

        <button
          type="button"
          onClick={() => props.handleDelete(props.file)}
          className="absolute top-1 right-1"
        >
          <img src="/images/icon-close.svg" height={8} width={8} />
        </button>
      </article>
    </li>
  );
}

InputImage.defaultProps = {
  imageLimit: 3,
  initialValue: [],
};
InputImage.propTypes = {
  label: propTypes.string,
  imageLimit: propTypes.number,
  initialValue: propTypes.array,
};
