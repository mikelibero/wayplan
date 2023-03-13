export interface GraphQLResponse {
    data: any;
    errors?: any[];
}


export const fetchGraphQL = async (query: string, variables: any): Promise<any> => {
    const url = process.env.GRAPHQL_API_URL; // asumes que la variable de entorno GRAPHQL_API_URL está definida
    if (!url) {
        throw new Error('La URL de la API de GraphQL no está definida');
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const { data, errors } = await response.json();

    if (errors) {
        throw new Error(`Error fetching GraphQL data: ${JSON.stringify(errors)}`);
    }

    return data;
};
