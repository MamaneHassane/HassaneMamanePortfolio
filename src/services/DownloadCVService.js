import { downloadCvAddress } from "../Variables";
import axios from "axios";

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.withCredentials = true

const downloadCV = (filename) => {
    console.log(`CV Adress : ${downloadCvAddress}/${filename}`)
    axios({
        url: `${downloadCvAddress}/${filename}.pdf`,
        method: "GET",
        responseType: "blob",
    })
        .then((response) => {
            const blob = new Blob([response.data], { type: "application/pdf" });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${filename}.pdf`);
            link.click();
        })
        .catch((err) => {
            console.log(err);
        });
}
    
export { downloadCV };
