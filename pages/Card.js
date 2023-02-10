import * as React from "react"

function CardTemplate(props) {
    const { link, desc } = props
    console.log('link in VideoCard', link)
    return (
        <div class="col-md-4">
            <div class="card mb-4 box-shadow">
                <iframe width="420" height="315"
                    src={link} allowFullScreen>
                </iframe>
                <div class="card-body">
                    <p class="card-text">{desc}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTemplate