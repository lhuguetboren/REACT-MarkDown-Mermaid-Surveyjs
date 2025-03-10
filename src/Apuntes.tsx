import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { renderSurvey } from "./SurveyHandler";
import MarkdownRenderer from "./MarkdownHandler";
import FileSelector from "./FileSelector"; // Importar el nuevo módulo

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(""); // Almacena el contenido del archivo .md
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pages = markdown ? markdown.split("---") : [];

  const [titles, setTitles] = useState<string[]>([]);

  useEffect(() => {
    if (pages.length > 0) {
      const extractedTitles = pages.map((page) => {
        const match = page.match(/^#\s(.+)/m); // Busca el primer Heading 1
        return match ? match[1] : "Página sin título"; // Usa el título o un valor por defecto
      });
      // Evitar bucles infinitos: solo actualizar si los títulos han cambiado
      if (JSON.stringify(extractedTitles) !== JSON.stringify(titles)) {
        setTitles(extractedTitles);
      }
    }
  }, [pages]);
  


  const handlePageChange = (index: number) => {
    if (index >= 0 && index < pages.length) {
      setCurrentPage(index);
    }
  };
  //COMENTADO EDITOR ON LINE
  // const updatePageContent = (content: string) => {
  //   const updatedPages = [...pages];
  //   updatedPages[currentPage] = content;
  //   setMarkdown(updatedPages.join("---"));
  //   toogleEdicion;
  // };

  const toogleEdicion = () => {
    document.getElementById("editor").classList.toggle("invisible");
    document.getElementById("visor").classList.toggle("invisible");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Código copiado al portapapeles");
    });
  };

  const renderContent = () => {
    const content = pages[currentPage] || ""; // Evita que content sea undefined
    const surveyComponent = renderSurvey(content, setMarkdown);
    return surveyComponent ? (
      surveyComponent
    ) : (
      <MarkdownRenderer
        content={content || ""}
        copyToClipboard={copyToClipboard}
      />
    );
  };

  return (
    <div className="container-fluid vh-100 d-flex flex-column align-items-center">
      <div className="row w-100 h-10">
      <div className="col-md-12 d-flex flex-column p-3" >
        <button className="btn btn-primary" onClick={toogleEdicion}>SELECCIONAR MD/VER MD</button>
        <div id="editor" className="col-md-12 d-flex flex-column p-3" >
      <FileSelector onFileLoad={setMarkdown} />
          {/* COMENTADO <textarea
            className="form-control flex-grow-1"
            rows={10}
            value={pages[currentPage] || ""}
            onChange={(e) => updatePageContent(e.target.value)}
          />*/}
        </div>
      </div>

     

       {/*Selector de archivo */}
      </div>
      
<div id ="visor" className="invisible"> 
      <div className="row w-100 h-100">
        <div className="col-md-2  p-3">
          <h5>Índice</h5>
          <ul className="list-group">
            {titles.map((title, index) => (
              <li
                key={index}
                className={`list-group-item ${currentPage === index ? "active" : ""}`}
                onClick={() => setCurrentPage(index)}
                style={{ cursor: "pointer" }}
              >
                {title}
              </li>
            ))}
          </ul>

        </div>

        <div className="col-md-10 border-left">
          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-secondary"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
            >
              Anterior
            </button>
            <span>
              Página {currentPage + 1} de {pages.length}
            </span>
            <button
              className="btn btn-secondary"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pages.length - 1}
            >
              Siguiente
            </button>
          </div>
          <div className="border p-3 bg-white  w-xl overflow-auto">
            {renderContent()}
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-secondary"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
            >
              Anterior
            </button>
            <span>
              Página {currentPage + 1} de {pages.length}
            </span>
            <button
              className="btn btn-secondary"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pages.length - 1}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
   </div>  


    </div>
  );
};

export default MarkdownEditor;
