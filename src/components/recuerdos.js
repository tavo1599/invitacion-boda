// src/components/Recuerdo.js
import React, { useState, useRef } from 'react';
import Icono from '../assets/icons/camara.png';

const Recuerdo = () => {
    const [file, setFile] = useState(null);
    const [comment, setComment] = useState('');
    const [preview, setPreview] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        
        // Mostrar vista previa del archivo si es una imagen
        if (selectedFile && selectedFile.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setPreview(''); // Limpiar vista previa si el archivo no es una imagen
        }
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío de archivos y comentarios
        console.log('Archivo subido:', file);
        console.log('Comentario:', comment);
        // Puedes agregar lógica adicional para manejar los datos enviados
    };

    const handleCustomFileClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-fuchsia-200 text-black">
            <div className=" p-8 rounded-lg  ">
            <div className="flex justify-center">
                <img src={Icono} alt="Icono" className="w-20 h-20 mb-4" />
                </div>
                <h1 className="text-6xl font-bold mb-4 text-center">¡Comparte tus Recuerdos!</h1>
                <p className="text-lg mb-6 text-center">
                    Queremos que todos los momentos especiales sean recordados. ¡Comparte tus fotos y comentarios sobre la celebración!
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        
                        <input 
                            type="file" 
                            ref={fileInputRef}
                            onChange={handleFileChange} 
                            className="hidden"
                        />
                        <button 
                            type="button"
                            onClick={handleCustomFileClick} 
                            className="w-full p-2 border border-gray-300 rounded bg-cyan-600 text-white font-bold hover:bg-cyan-700"
                        >
                            Sube tu recuerdo
                        </button>
                        {preview && (
                            <div className="mt-4 flex justify-center">
                                <img src={preview} alt="Vista previa" className="w-96 h-auto rounded" />
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2">Comentario</label>
                        <textarea 
                            value={comment} 
                            onChange={handleCommentChange} 
                            className="w-full p-2 border border-gray-300 rounded"
                            rows="4"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="px-6 py-3 bg-cyan-600 text-white font-bold rounded hover:bg-cyan-700"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Recuerdo;
