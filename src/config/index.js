const mode = process.env.REACT_APP_mode || "dev";

var apiUrl = "https://api.contractflo.com/api/";
var serverUrl = "https://api.contractflo.com/";
var BASE_URL = "https://www.contractflo.com/";

// where is server running

if (mode == "dev") {
    apiUrl = "https://localhost:5000/";
    serverUrl = "https://localhost:5000/";
} else {
    apiUrl = "https://super-forms.onrender.com/";
    serverUrl = "https://super-forms.onrender.com/";
}

var configObject = {
    apiUrl,
    serverUrl,
    BASE_URL,
    mode
};


export default configObject;
