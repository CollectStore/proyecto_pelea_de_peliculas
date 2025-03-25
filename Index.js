const fetchData = async(searchTerm) => {
    const response = await axios.get('htt://omdbapi.com/', {
        params: {
            apikay:'688ffa7a',
            s: 'avengers'
        }
    })

    if(response.data.Error){
        return[]
    }

    console.log(response.data)
}

fetchData()