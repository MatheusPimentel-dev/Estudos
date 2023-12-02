const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
            return {
                //String de conexão 
                bd_string: '',

                jwt_pass: 'batatafrita2021',
                jwt_expires_in: '7d'
            }

        case 'html':
            return {
                //String de conexão
                bd_string: ''

            }

        case 'prod':
            return {
                //String de conexão
                bd_string: ''

            }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();