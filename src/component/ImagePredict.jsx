import axios from "axios";
import { useEffect, useState } from "react";
import { blight, commonRust, grayLeafSpot } from "../assets/diseases";

function ImagePredict() {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [result, setResult] = useState({
    name: "",
    description: "",
    handling: [],
  });

  const handleInputImage = (image) => {
    const imagePredict = image.target.files[0];
    const imagePreview = URL.createObjectURL(imagePredict);

    setImage(imagePredict);
    setImagePreview(imagePreview);
  };

  const handlePredict = async (event) => {
    event.preventDefault();
    const API_URL = "https://model-api-enrj3bmurq-et.a.run.app";

    const dataPredict = new FormData();
    dataPredict.append("image_predict", image);

    const formatPredictionName = (name) => {
      return name.replace(/_/g, " ").toLowerCase();
    };

    try {
      const response = await axios.post(`${API_URL}/predict`, dataPredict);
      const request = response.data.history;
      let data = request.prediction.name;

      data = formatPredictionName(data);

      if (data === "blight") {
        setResult(blight);
      } else if (data === "gray leaf spot") {
        setResult(grayLeafSpot);
      } else if (data === "common rust") {
        setResult(commonRust);
      } else {
        setResult({
          name: "Healthy",
          description:
            "Tanaman jagung Anda sehat dan bebas dari penyakit. Terus jaga kondisi pertumbuhan yang baik!",
          handling: [],
        });
      }
    } catch (error) {
      console.log(error);
      setResult({
        name: "Error",
        description:
          "Terjadi kesalahan saat memprediksi gambar. Silakan coba lagi.",
        handling: [],
      });
    }
  };

  return (
    <section className="isolate px-6 pt-32 md:pt-52 lg:px-16">
      <div className="content">
        <h1 className="text-3xl md:text-6xl font-jetbrains font-extrabold">
          Predict
        </h1>
        <p className="mt-3 md:mt-6 md:text-lg leading-6 text-gray-600">
          Silakan unggah gambar daun jagung Anda untuk memprediksi kemungkinan
          penyakitnya.
        </p>
        <div className="predict-section mt-10 grid md:grid-cols-2">
          <div className="form-predict bg-gray-100 p-8 rounded-lg w-fit mb-8 md:mb-0">
            <form onSubmit={handlePredict}>
              <div className="preview">
                <figure className="mb-10">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="preview"
                      className="rounded md:w-[500px] md:h-[500px]"
                    />
                  ) : null}
                </figure>
              </div>

              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 p-2 mb-4"
                id="image_predict"
                type="file"
                onChange={handleInputImage}
                multiple
              />

              <button className="py-2 px-3 bg-green-600 hover:bg-green-500 text-white rounded w-full shadow-md">
                Predict
              </button>
            </form>
          </div>
          <div className="description">
            <div className="name-disease mb-4">
              <h1 className="font-extrabold font-jetbrains text-2xl md:text-4xl mb-2 md:mb-4">
                {result.name || ""}
              </h1>
              <p>{result.description}</p>
            </div>
            {result.handling && result.handling.length > 0 && (
              <div className="handling mb-6">
                <h1 className="font-bold font-jakarta text-xl mb-2">
                  Cara penanganan
                </h1>
                <ul className="list-disc ps-8">
                  {result.handling.map((handling, index) => (
                    <li key={index}>{handling}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="video">
              <div className="video-wrapper">
                {result.video ? (
                  <iframe
                    src={result.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full rounded-xl shadow-xl h-[210px] md:h-[315px]"
                  ></iframe>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImagePredict;
