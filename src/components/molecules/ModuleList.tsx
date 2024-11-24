// src/components/ModuleList.tsx

import React, {  useState } from 'react';
import { useGetModulesQuery } from '../../api/endpoints/modules';

// Définition du type Module directement dans le fichier
interface Module {
    id: number;
    title: string;
    description: string | null;
    created_at: string | null; // ou Date si vous voulez le convertir en objet Date
}

const ModuleList: React.FC = () => {
    const [modules, setModules] = useState<Module[]>([]); // État pour stocker les modules
    const [error, setError] = useState<string | null>(null); // Message d'erreur

    const { data, isLoading } = useGetModulesQuery()

  if (isLoading) return <p>Loading..</p>

  console.log(data)


    // Affichage en cas d'erreur
    if (error) return <div style={{ color: 'red' }}>Erreur : {error}</div>;

    return (
        <div>
            <h1>Liste des Modules</h1>
            {data.length > 0 ? ( // Vérifie si des modules sont disponibles
                <ul>
                    {data.map(module => (
                        <li key={module.id}>
                            <h2>{module.title}</h2>
                            <p>{module.description || 'Pas de description disponible.'}</p>
                            <p>Créé le : {module.created_at || 'Date inconnue'}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucun module disponible.</p>
            )}
        </div>
    );
};

export default ModuleList;
