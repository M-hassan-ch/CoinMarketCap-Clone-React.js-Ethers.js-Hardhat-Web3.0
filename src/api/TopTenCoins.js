export default function topTencoins() {

    const key = 'fafcad2e-b0aa-44a5-80ec-3fc11b7708e2';
    const getData = async () => {
        const response = await fetch(
            `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${key}`,
            {
                method: 'GET',
                headers: {
                    Accept: '*/*',
                },
            },
        )

        const data = await response.json()
        return data;
        // res.status(200).json({ data })
    }

    // getData().then((data) => {
    //     return data;
    // }).catch((error) => {
    //     console.log(error);
    // });
    return getData;
};