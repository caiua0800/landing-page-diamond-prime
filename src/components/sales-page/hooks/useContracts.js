import { useState, useEffect } from 'react';

const useContracts = () => {
    const [contracts, setContracts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const CONTRACTS_URL = 'https://diamondprimebackend.goldenbrasil.com.br/api/contracttype';

    useEffect(() => {
        const fetchContracts = async () => {
            try {
                // Fetch Contracts (no authentication required)
                const contractsResponse = await fetch(CONTRACTS_URL, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!contractsResponse.ok) {
                    throw new Error('Falha ao buscar contratos');
                }

                const contractsData = await contractsResponse.json();

                // Filter and Slice
                const activeContracts = contractsData
                    .filter(contract => contract.status === 'ATIVO')
                    .slice(0, 9);

                setContracts(activeContracts);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContracts();
    }, []);

    return { contracts, loading, error };
};

export default useContracts;
