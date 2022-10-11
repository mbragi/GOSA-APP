import resolveConfig from "tailwindcss/resolveConfig";
import axios from "axios";

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig("./src/css/tailwind.config.js");
};

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 3,
    notation: "compact",
  }).format(value);

export const formatThousands = (value) =>
  Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
    notation: "compact",
  }).format(value);

export const uploadFile = async (imageData, setFunc) => {
  const data = new FormData();
  const cloudName = "gosa-2013";
  data.append("file", imageData);
  data.append("upload_preset", "my_default");
  return axios
    .post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, data, {
      onUploadProgress: (ProgressEvent) => {
        console.log((ProgressEvent.loaded / ProgressEvent.total) * 100);
        setFunc((ProgressEvent.loaded / ProgressEvent.total) * 100);
      },
    })
    .then(async (res) => {
      console.log(res.data.secure_url);
      return res.data.secure_url;
    })
    .catch(console.log(error.message));
};
