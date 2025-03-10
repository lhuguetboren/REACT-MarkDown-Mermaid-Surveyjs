import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

/**
 * Buscamos el elemento con id "root" en el HTML y lo usamos como contenedor de la aplicación
 */
const rootElement = document.getElementById("root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("No se encontró el elemento con id 'root'");
}
