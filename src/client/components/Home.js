import React, { Component } from "react"
import { connect } from "react-redux"
import { listAllArticles } from "../actions/articles"
import { listAllTags } from "../actions/tags"

class Home extends Component {

    componentDidMount() {
        this.props.dispatch(listAllArticles())
        this.props.dispatch(listAllTags())
    }

    render() {
        const articleList = this.props.articleList
        const tagList = this.props.tagList
        const imgStyle = { width: "25px", borderRadius: "50%" }
        const feedStyle = { border: "1px light grey" }
        const tagStyle = { border: "1px solid grey" }
        return (
            <div>
                <div style={{ textAlign: "center" }}>
                    <h1>Conduit</h1>
                    <h5>A place to share your knowledge</h5>

                    <br></br>

                    <span>Popular Tags: </span>
                    {
                        tagList && tagList.map(tag => {
                            return (
                                <span style={tagStyle}> {tag}</span>
                            )
                        })
                    }
                </div>

                <br></br>
                <br></br>

                <div style={{ color: "green" }}>
                    Global Feed
                </div>

                <br></br>
                <br></br>

                <div>
                    {
                        articleList && articleList.map(article => {
                            return (
                                <div style={feedStyle}>
                                    <span ><img style={imgStyle} src={article.author.image} /></span>
                                    <span>{article.author.username}</span>
                                    <p>{article.createdAt}</p>
                                    <h3>{article.title}</h3>
                                    <h4>{article.description}</h4>
                                    <h5>Read more...</h5>
                                    <br></br><br></br><hr />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        articleList: store.articleReducer.articleList,
        tagList: store.tagReducer.tagList
    }
}

export default connect(mapStateToProps)(Home)