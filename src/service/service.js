export default class Service {

    _url = "https://rickandmortyapi.com/api/"

    async getData(category,numberPage=1) {
        
        let res 
        if (category==="Characters") {
            res = await fetch(`${this._url}character/?page=${numberPage}`)
        }
        if (category==="Episodes") {
            res = await fetch(`${this._url}episode/?page=${numberPage}`)
        }
        if (category==="Locations") {
            res = await fetch(`${this._url}location/?page=${numberPage}`)
        }
        
        if (!res.ok) {
            throw new Error(`could not fetch "api/ ${category}", received ${res.status}`)
        }

        return await res.json()

    }

    async getCharacterFilter(filter,page=1) {
        
        const res = await fetch(`${this._url}character/?page=${page}&${filter.name}=${filter.value}`)

        if (!res.ok) {
            throw new Error(`could not fetch "api/character" ${filter.name}=${filter.value} , received ${res.status}`)
        }

        return await res.json()


    }
    async getLocation(name) {
        
        let res = await fetch(`${this._url}episode/?name=${name}`)

        if (!res.ok) {
            throw new Error(`could not fetch "api/episode" ${name}, received ${res.status}`)
        }

        return await res.json()

    }

    async getDataForFilters() {
        
        const arrFilterNames= ["species", "gender", "status"];

        const resLoop = async _ => {
            let fullData = []
            for (let index = 1; index < 35; index++) {
                const arrdata = await fetch(`${this._url}character/?page=${index}`)
                let res = await arrdata.json()
                fullData.push(...res.results)
                
            }
            return fullData
        }
         
        let arr = await resLoop()

        let objFilter = {}

        arrFilterNames.forEach(item =>
            objFilter[item] = [])

        arr.forEach(item => {
            arrFilterNames.forEach(filterName => {
                if (!objFilter[filterName].includes(item[filterName])) {
                    objFilter[filterName].push(item[filterName])
                }
            })
        })
        return objFilter

    }


}