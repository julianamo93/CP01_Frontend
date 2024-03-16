import {useState, useEffect} from "react";
 
const UseFetcher = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
     
    useEffect(()=>{
        const fetchData = async () =>{
            if(loading){
                try{
                    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                    const data = await response.json();
                    // atualização dos dados com a API
                    setPhotos(data);
                 }
                 catch (error){
                    console.error('erro ao buscar dados de api',error);
                 }
                 finally{
                    setLoading(false);
                 }
            }
        };
        
        fetchData();
    }, [loading]);
 
    const recarregarDados = () =>{
        setLoading(true);
    }
    return(
        <>
        <h1> Carregando Fotos </h1>
        {loading ? (
            <p>Carregando...</p>
        ):(
            <div>
                <ul>{photos.map((photos) => (
                    <li key = {photos.albumId} > {photos.url}</li>
                ))}
                </ul>
                <div className="buttonsC">
                <button onClick ={recarregarDados}>CARREGAR DADOS:</button>
                </div>
            </div>
        )}
        </>
    )
 
}
 
export default UseFetcher;