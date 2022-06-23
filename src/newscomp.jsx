import React from "react"
import NewsItem from "./newsitem"
import Spinner from "./spinner"
import InfiniteScroll from "react-infinite-scroll-component"




function Component({ category, setProgress }) {
    const [item, setItem] = React.useState([])
    const [page, chngePage] = React.useState(1)
    const [loading, setLoading] = React.useState(true)
    const apiKey = process.env.REACT_APP_NEWS_API
    let totalResults = 0
    

    async function fetchData(pageNo) {
        setProgress(10)
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&page=${pageNo}&pageSize=6`)
        setProgress(30)
        let json = await data.json()
        setProgress(60)
        setLoading(false)
        setItem(json.articles)
        totalResults = json.totalResults
        document.title = `${category[0].toUpperCase() + category.slice(1, category.length)} - NewsMonkey`
        setProgress(100)
    }
    React.useEffect(() => {
        fetchData(page)
    }, [])

    async function fetchMoreData() {
        chngePage(page + 1)
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&page=${page + 1}&pageSize=6`)
        let json = await data.json()
        setItem((preValues) => [...preValues].concat(json.articles))
    }



    return (
        <div className="mx-10">
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate text-center mt-4 mb-6">NewsMonkey - Top {category[0].toUpperCase() + category.slice(1, category.length)} Headlines</h1>
            {loading ? <Spinner /> : null}
            <InfiniteScroll
                dataLength={item.length}
                next={fetchMoreData}
                hasMore={item.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-5">
                    {item !== undefined ? item.map((element, index) => {
                        if (typeof element.description === "string" && element.description.length > 116) {
                            return <NewsItem key={index} author={element.author} date={element.publishedAt} title={element.title.slice(0, 72) + "..."} source={element.source.name} body={element.description.slice(0, 116) + "..."} img={element.urlToImage ? element.urlToImage : "https://newscorp.com/wp-content/uploads/2021/04/homepage-wallstreetjournal.jpg?w=1440&h=710&crop=1"} url={element.url} />
                        } else {
                            return <NewsItem key={index} author={element.author} date={element.publishedAt} title={element.title.slice(0, 72) + "..."} source={element.source.name} body={element.description} img={element.urlToImage ? element.urlToImage : "https://newscorp.com/wp-content/uploads/2021/04/homepage-wallstreetjournal.jpg?w=1440&h=710&crop=1"} url={element.url} />
                        }
                    }) : null}
                </div>
            </InfiniteScroll>

        </div>
    )



}








export default Component
